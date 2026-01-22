<script setup>
import { onMounted, ref } from 'vue'

const isVisible = ref(false)
const sectionRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) isVisible.value = true
  }, { threshold: 0.1 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="relative py-16 md:py-24 bg-[#F2C46D] overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.12]" 
         style="background-image: 
           linear-gradient(45deg, #1D5948 1px, transparent 1px), 
           linear-gradient(-45deg, #1D5948 1px, transparent 1px);
         background-size: 10px 10px;">
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        <div :class="['w-full lg:w-1/2 transition-all duration-1000', 
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']">
          
          <div class="grid grid-cols-2 gap-3 md:gap-4">
            <div class="relative group overflow-hidden rounded-[2rem] aspect-square shadow-xl border-2 border-white/50">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600" 
                   class="w-full h-full object-cover" alt="Evento" />
            </div>
            
            <div class="flex flex-col gap-3 md:gap-4">
              <div class="relative group overflow-hidden rounded-[1.5rem] aspect-video shadow-lg border-2 border-white/50">
                <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=400" 
                     class="w-full h-full object-cover" alt="Detalle" />
              </div>
              <div class="relative group overflow-hidden rounded-[1.5rem] flex-1 shadow-lg border-2 border-white/50 min-h-[100px]">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=400" 
                     class="w-full h-full object-cover" alt="Cena" />
              </div>
            </div>
          </div>
        </div>

        <div :class="['w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 delay-200', 
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
          
          <div class="inline-flex items-center gap-2 mb-4">
            <span class="font-sans text-[#1D5948] text-[9px] font-black uppercase tracking-[0.4em] bg-white/40 px-3 py-1 rounded-full">
              Servicio Especial
            </span>
          </div>
          
          <h2 class="font-amatic text-6xl md:text-8xl text-[#1D5948] leading-[0.85] mb-6">
            ¿Planeas un <br class="hidden md:block">
            <span class="text-white drop-shadow-sm italic">Evento Único?</span>
          </h2>
          
          <p class="font-sans text-[#1D5948]/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            Espacios privados y menús personalizados en Suba. Nos encargamos de todo para que disfrutes tu celebración.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button class="w-full sm:w-auto px-8 py-4 bg-[#1D5948] text-[#F2C46D] font-sans font-black uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-white hover:text-[#1D5948] transition-all shadow-lg">
              Cotizar Evento
            </button>
            <button class="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#1D5948]/20 text-[#1D5948] font-sans font-black uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-white/30 transition-all">
              Ver Galería
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@400;700;900&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }

/* Evita que el componente sea gigante en móviles */
@media (max-width: 768px) {
  h2 { line-height: 1; }
}
</style>