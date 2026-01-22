<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const sectionRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) isVisible.value = true
  }, { threshold: 0.1 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})

const guides = [
  {
    title: 'Punto de Referencia',
    desc: 'A solo 200m de la Plaza Fundacional de Suba. Un oasis rústico en el corazón del sector.',
    icon: '📍',
    color: 'bg-white'
  },
  {
    title: 'Transporte Público',
    desc: 'Rutas SITP hacia Suba Centro. Caminata de 5 min desde la estación de policía o la plaza.',
    icon: '🚌',
    color: 'bg-[#1D5948]/10'
  },
  {
    title: 'Parqueadero',
    desc: 'Espacio seguro y vigilado para tu vehículo justo frente a nuestro local. ¡Ven sin preocupaciones!',
    icon: '🚗',
    color: 'bg-white'
  }
]
</script>

<template>
  <section ref="sectionRef" class="relative py-24 bg-[#F2C46D] overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.2] mix-blend-overlay">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="grainYellow"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#grainYellow)" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div :class="['mb-16 transition-all duration-1000', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
        <h3 class="font-amatic text-6xl md:text-8xl text-[#1D5948] leading-none mb-2">Ubica el <span class="italic">Sabor</span></h3>
        <div class="w-24 h-1.5 bg-[#1D5948]"></div>
        <p class="font-sans text-[#1D5948]/80 mt-6 max-w-lg font-medium italic">
          Estamos en el corazón de Suba, donde la tradición se encuentra con la comodidad.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div :class="['lg:col-span-7 transition-all duration-[1.2s] delay-300', isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20']">
          <div class="relative group">
            <div class="absolute inset-0 bg-[#1D5948] translate-x-4 translate-y-4 rounded-[3rem]"></div>
            
            <div class="relative h-100 md:h-125 w-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2!2d-74.0!3d4.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDInMDAuMCJOIDc0wrAwMCcwMC4wIlc!5e0!3m2!1ses!2sco!4v123456789" 
                class="w-full h-full border-0 grayscale-[0.2] contrast-[1.1]" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
              
              <div class="absolute bottom-6 left-6 bg-white text-[#1D5948] px-6 py-3 rounded-2xl shadow-xl font-sans text-[10px] font-black tracking-[0.2em] uppercase">
                📍 Experienzzia Gourmet
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-4">
          <div v-for="(item, idx) in guides" :key="idx"
            :class="['group flex items-start gap-5 p-6 rounded-[2.5rem] transition-all duration-700 hover:scale-[1.02]', 
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20']"
            :style="{ transitionDelay: `${(idx + 1) * 200}ms`, backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(10px)' }"
          >
            <div :class="['w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-transform group-hover:rotate-6', item.color]">
              {{ item.icon }}
            </div>
            
            <div>
              <h4 class="font-sans font-black text-[#1D5948] uppercase text-xs tracking-widest mb-1">{{ item.title }}</h4>
              <p class="font-sans text-[#1D5948]/70 text-sm leading-relaxed">
                {{ item.desc }}
              </p>
            </div>
          </div>

          <div :class="['pt-6 transition-all duration-1000 delay-1000', isVisible ? 'opacity-100' : 'opacity-0']">
            <a href="https://maps.app.goo.gl/..." target="_blank" class="flex items-center justify-center gap-3 w-full py-5 bg-[#1D5948] text-[#F2C46D] rounded-full font-sans font-black uppercase text-xs tracking-[0.2em] hover:bg-[#24735C] transition-all shadow-2xl hover:shadow-[#1D5948]/40">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
              ¿Cómo llegar ahora?
            </a>
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

/* Suavizado de entrada del mapa */
iframe {
  transition: filter 0.5s ease;
}
.group:hover iframe {
  filter: grayscale(0);
}
</style>