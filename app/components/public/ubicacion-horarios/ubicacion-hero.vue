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
  <section ref="sectionRef" class="relative min-h-screen lg:min-h-[90vh] flex items-center bg-[#1D5948] overflow-hidden pt-38 pb-20 md:pt-40 md:pb-24">
    
    <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-overlay">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="heroNoise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#heroNoise)" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        <div :class="['flex-1 text-center lg:text-left order-2 lg:order-1 transition-all duration-1000 ease-out', 
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']">
          
          <span class="inline-block font-sans text-[#F2C46D] text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-6 border-b-2 border-[#F2C46D]/30 pb-2">
            Te esperamos en Suba
          </span>
          
          <h2 class="font-amatic text-6xl md:text-9xl text-[#F2F2F2] leading-[0.8] mb-8">
            Ven a <span class="text-[#F2C46D] italic font-normal">Vivir</span> <br>
            <span class="text-white">La Experienzzia</span>
          </h2>
          
          <div class="space-y-8 mb-12">
            <div :class="['flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 transition-all duration-1000 delay-300', 
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']">
              <div class="w-12 h-12 rounded-full bg-[#F2C46D]/20 flex items-center justify-center text-[#F2C46D] shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <p class="font-sans text-gray-300 text-base md:text-lg max-w-sm">Calle Falsa 123, Sector Suba Centro, Bogotá</p>
            </div>

            <div :class="['flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 transition-all duration-1000 delay-500', 
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']">
              <div class="w-12 h-12 rounded-full bg-[#F2C46D]/20 flex items-center justify-center text-[#F2C46D] shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div class="font-sans text-gray-300 text-sm md:text-base">
                <p class="font-bold text-white mb-1">Lunes a Sábado: <span class="text-[#F2C46D]">7:00 AM - 7:00 PM</span></p>
                <p>Domingos y Festivos: <span class="text-[#F2C46D]">8:00 AM - 4:00 PM</span></p>
              </div>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#" class="bg-[#F2C46D] text-[#1D5948] px-10 py-5 rounded-full font-sans font-black uppercase text-[10px] tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl">
              ¿Cómo llegar?
            </a>
            <a href="https://wa.me/TUNUMERO" class="border-2 border-[#F2C46D] text-[#F2C46D] px-10 py-5 rounded-full font-sans font-black uppercase text-[10px] tracking-widest hover:bg-[#F2C46D] hover:text-[#1D5948] transition-all">
               Reserva tu mesa
            </a>
          </div>
        </div>

        <div class="flex-1 w-full order-1 lg:order-2">
          <div :class="['relative transition-all duration-[1.5s] ease-out mx-auto max-w-[450px] lg:max-w-none', 
                isVisible ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-10']">
            
            <div class="absolute inset-0 bg-[#F2C46D] -translate-x-4 -translate-y-4 rounded-br-[4rem] rounded-tl-[4rem] z-0 opacity-40"></div>
            
            <div class="relative z-10 overflow-hidden rounded-br-[4rem] rounded-tl-[4rem] aspect-square shadow-2xl border-2 border-white/20">
              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800" 
                   alt="Local Experienzzia Gourmet" 
                   class="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700">
              
              <div class="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full font-sans font-black text-[9px] tracking-widest shadow-lg animate-pulse">
                ABIERTO AHORA
              </div>
            </div>

            <div :class="['absolute -bottom-4 -right-2 md:-right-6 bg-white p-5 rounded-2xl shadow-2xl z-20 max-w-[180px] hidden sm:block transition-all duration-1000 delay-700', 
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
              <p class="font-sans font-black text-[#1D5948] text-[10px] mb-1 uppercase">Estamos cerca</p>
              <p class="font-sans text-gray-500 text-[10px] leading-tight italic">"A pasos de la Plaza Central de Suba."</p>
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

/* Evitar scroll horizontal por animaciones */
section {
  overflow-x: hidden;
}
</style>