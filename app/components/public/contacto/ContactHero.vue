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
  <section ref="sectionRef" class="relative bg-[#1D5948] overflow-hidden pt-32 pb-20 md:pt-44 md:pb-36">
    
    <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-overlay">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="contactGrain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#contactGrain)" />
      </svg>
    </div>

    <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#F2C46D] rounded-full opacity-[0.03] blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        <div :class="['w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 ease-out', 
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']">
          
          <nav class="flex justify-center lg:justify-start mb-6">
            <span class="font-sans text-[#F2C46D] text-[10px] md:text-xs font-black uppercase tracking-[0.5em] border-b-2 border-[#F2C46D]/20 pb-2">
              Línea Directa
            </span>
          </nav>

          <h1 class="font-amatic text-7xl md:text-9xl text-white leading-[0.85] mb-8">
            Estamos a un <br />
            <span class="text-[#F2C46D] italic">Mensaje</span> de distancia
          </h1>

          <p class="font-sans text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 italic">
            "Tu mesa favorita o tu próximo gran evento en Suba están a un clic. Nuestro equipo está listo para crear una experiencia a tu medida."
          </p>

          <div :class="['flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 transition-all duration-1000 delay-500',
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']">
            <div class="flex -space-x-3">
              <img src="https://i.pravatar.cc/150?u=11" class="w-12 h-12 rounded-full border-2 border-[#1D5948] bg-white/10" alt="Soporte">
              <img src="https://i.pravatar.cc/150?u=12" class="w-12 h-12 rounded-full border-2 border-[#1D5948] bg-white/10" alt="Soporte">
              <img src="https://i.pravatar.cc/150?u=13" class="w-12 h-12 rounded-full border-2 border-[#1D5948] bg-white/10" alt="Soporte">
            </div>
            <p class="font-sans text-white/80 text-sm md:text-base">
              <span class="font-black uppercase tracking-tighter text-white">Equipo Experienzzia</span> responde en <span class="text-[#F2C46D] font-bold">segundos</span>.
            </p>
          </div>
        </div>

        <div :class="['w-full lg:w-1/2 transition-all duration-[1.5s] ease-out',
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90']">
          <div class="relative">
            
            <div class="absolute inset-0 bg-[#F2C46D] translate-x-4 translate-y-4 rounded-[4rem] rounded-tr-none z-0 opacity-80"></div>
            
            <div class="relative z-10 aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-[4rem] rounded-tr-none border-2 border-white/20 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800"
                alt="Ambiente Gourmet"
                class="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              
              <div class="absolute bottom-6 left-6 right-6 bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-4">
                <div class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <div>
                  <p class="font-sans text-[9px] uppercase font-black text-gray-400 tracking-widest leading-none mb-1">Disponibilidad</p>
                  <p class="font-sans text-xs md:text-sm font-bold text-[#1D5948]">Abiertos hoy · 7:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <div class="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl z-20 border-8 border-[#1D5948] transform rotate-12">
               <span class="text-[#1D5948] font-amatic text-4xl font-bold">100%</span>
            </div>
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

/* Evitar scroll lateral indeseado */
section {
  contain: paint;
}
</style>