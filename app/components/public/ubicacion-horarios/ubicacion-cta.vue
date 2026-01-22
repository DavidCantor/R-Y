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
  <section ref="sectionRef" class="relative w-full bg-[#1D5948] overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-overlay">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseGroup"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#noiseGroup)" />
      </svg>
    </div>

    <div class="absolute top-0 right-0 w-1/4 h-full bg-[#F2C46D] opacity-[0.03] -skew-x-12 translate-x-20"></div>

    <div class="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div :class="['flex-1 text-center lg:text-left transition-all duration-1000', 
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']">
          
          <div class="inline-flex items-center gap-3 mb-6">
            <span class="w-8 h-[2px] bg-[#F2C46D]"></span>
            <span class="font-sans text-[#F2C46D] text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Experiencias Colectivas</span>
          </div>
          
          <h2 class="font-amatic text-7xl md:text-9xl text-white leading-[0.8] mb-6">
            ¿Vienen en <br class="hidden md:block">
            <span class="text-[#F2C46D]">Gran Grupo?</span>
          </h2>
          
          <p class="font-sans text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed italic">
            "Transformamos tus reuniones en banquetes inolvidables. Menús personalizados para empresas, familias y amigos en el corazón de Suba."
          </p>
        </div>

        <div :class="['flex-1 w-full lg:w-auto transition-all duration-1000 delay-300', 
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10']">
          
          <div class="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl">
            <div class="flex flex-col gap-5">
              
              <a href="https://wa.me/tu-numero"
                class="group relative flex items-center justify-center gap-3 px-8 py-6 bg-[#F2C46D] text-[#1D5948] font-sans font-black uppercase text-xs tracking-[0.2em] rounded-2xl transition-all hover:bg-white hover:scale-[1.02] active:scale-95 shadow-xl">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82l.446.265c1.504.895 3.229 1.367 4.999 1.368 5.404 0 9.803-4.398 9.805-9.804.001-2.621-1.021-5.084-2.876-6.94s-4.32-2.877-6.94-2.877c-5.405 0-9.804 4.399-9.806 9.805-.001 1.83.479 3.618 1.39 5.162l.292.492-1.103 4.03 4.127-1.082z"/></svg>
                Cotizar por WhatsApp
              </a>

              <a href="tel:+57"
                class="flex items-center justify-center gap-3 px-8 py-6 bg-transparent border-2 border-white/20 text-white font-sans font-black uppercase text-xs tracking-[0.2em] rounded-2xl transition-all hover:bg-white/10 hover:border-white">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Atención Telefónica
              </a>

              <p class="text-center font-sans text-white/40 text-[9px] uppercase tracking-[0.3em] mt-2">
                * Descuentos especiales para grupos +15 personas
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="h-2 w-full bg-[#F2C46D]"></div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@400;700;900&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }

/* Evitar cortes extraños en móviles */
section {
  contain: paint;
}
</style>