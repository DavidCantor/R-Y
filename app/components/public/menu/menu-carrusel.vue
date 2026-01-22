<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const dishes = [
  { id: '01', name: 'Chocolate Santafereño', category: 'El Clásico de Suba', price: '12.000', image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800' },
  { id: '02', name: 'Cesta de Amasijos', category: 'Receta de la Abuela', price: '10.500', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800' },
  { id: '03', name: 'Calentado de la Casa', category: 'Desayuno de Campeones', price: '18.900', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800' },
  { id: '04', name: 'Brunch Experienzzia', category: 'Nuestra Firma', price: '22.000', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800' },
  { id: '05', name: 'Tamal Gourmet', category: 'Sabor Tolimense', price: '16.500', image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800' },
]

const scrollContainer = ref(null)
const activeIndex = ref(0)
const sectionRef = ref(null)
const isVisible = ref(false)
let autoplayTimer = null

// Mover con flechas
const scroll = (direction) => {
  if (scrollContainer.value) {
    const card = scrollContainer.value.querySelector('.card-item')
    const cardWidth = card.offsetWidth + 32 // Ancho + Gap
    scrollContainer.value.scrollBy({
      left: direction === 'next' ? cardWidth : -cardWidth,
      behavior: 'smooth'
    })
    resetAutoplay()
  }
}

// Autoplay lento
const startAutoplay = () => {
  autoplayTimer = setInterval(() => {
    if (scrollContainer.value) {
      const maxScroll = scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth
      // Si llega al final, vuelve al inicio, si no, avanza
      if (scrollContainer.value.scrollLeft >= maxScroll - 10) {
        scrollContainer.value.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scroll('next')
      }
    }
  }, 5000) // Cada 5 segundos para que sea "lento"
}

const resetAutoplay = () => {
  clearInterval(autoplayTimer)
  startAutoplay()
}

const handleScroll = () => {
  if (scrollContainer.value) {
    const scrollLeft = scrollContainer.value.scrollLeft
    const cardWidth = scrollContainer.value.querySelector('.card-item').offsetWidth + 32
    activeIndex.value = Math.round(scrollLeft / cardWidth)
  }
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true
      startAutoplay()
    }
  }, { threshold: 0.1 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => clearInterval(autoplayTimer))
</script>

<template>
  <section ref="sectionRef" class="relative py-16 md:py-24 bg-[#F2C46D] overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.2] mix-blend-overlay">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="grainYellow"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#grainYellow)" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
      
      <div :class="['flex items-end justify-between mb-8 md:mb-12 transition-all duration-1000', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
        <div>
          <h2 class="font-amatic text-6xl md:text-9xl text-[#1D5948] leading-none">Favoritos</h2>
          <p class="font-sans text-[#1D5948] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] ml-1">Hechos a mano</p>
        </div>

        <div class="hidden md:flex gap-3">
          <button @click="scroll('prev')" class="w-12 h-12 rounded-full border-2 border-[#1D5948] flex items-center justify-center text-[#1D5948] hover:bg-[#1D5948] hover:text-[#F2C46D] transition-all group shadow-sm">
            <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button @click="scroll('next')" class="w-12 h-12 rounded-full bg-[#1D5948] flex items-center justify-center text-[#F2C46D] hover:scale-105 transition-all group shadow-sm">
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div class="relative">
        <button @click="scroll('prev')" class="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-[#1D5948] -ml-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div 
          ref="scrollContainer"
          @scroll="handleScroll"
          @touchstart="clearInterval(autoplayTimer)"
          @touchend="resetAutoplay"
          class="flex overflow-x-auto gap-5 md:gap-8 pb-10 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing px-2"
        >
          <div v-for="(dish, index) in dishes" :key="dish.id" 
            class="card-item flex-none w-[85%] sm:w-[60%] md:w-95 snap-center"
          >
            <div :class="['group bg-white rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-4 shadow-xl border border-white/50 transition-all duration-700', 
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
              :style="{ transitionDelay: `${index * 100}ms` }"
            >
              <div class="relative aspect-square overflow-hidden rounded-4xl md:rounded-[2.5rem] mb-4 md:mb-6 border border-gray-100">
                <img :src="dish.image" :alt="dish.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s] ease-out" />
                
                <div class="absolute top-4 right-4 bg-[#1D5948] text-[#F2C46D] font-sans font-black text-[10px] md:text-xs px-4 py-1.5 rounded-full shadow-md">
                  ${{ dish.price }}
                </div>
              </div>

              <div class="px-2 md:px-4 pb-2 md:pb-4">
                <span class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#1D5948]/40">{{ dish.category }}</span>
                <h3 class="font-amatic text-4xl md:text-5xl text-[#1D5948] mt-1 mb-4 md:mb-6 leading-none">
                  {{ dish.name }}
                </h3>
                
                <div class="flex items-center justify-between">
                  <div class="flex -space-x-2">
                    <div class="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-[#F2C46D] flex items-center justify-center text-[10px]">🔥</div>
                    <div class="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-[#1D5948] flex items-center justify-center text-[10px] text-white">❤️</div>
                  </div>
                  <a href="https://wa.me/TUNUMERO" class="flex items-center gap-1.5 font-sans font-black text-[9px] md:text-[10px] uppercase tracking-tighter text-[#1D5948]">
                    PEDIR <span class="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button @click="scroll('next')" class="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-[#1D5948] -mr-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div class="flex justify-center md:justify-start items-center gap-3 mt-4">
        <div v-for="(n, i) in dishes" :key="i" 
          class="h-1.5 transition-all duration-500 rounded-full"
          :class="activeIndex === i ? 'w-10 md:w-12 bg-[#1D5948]' : 'w-2 md:w-4 bg-[#1D5948]/20'"
        ></div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@400;700;900&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }

/* Ocultar barra de scroll en todos los navegadores */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.snap-x {
  scroll-behavior: smooth;
  /* Optimización para scroll táctil */
  -webkit-overflow-scrolling: touch;
}

/* Evitar que el usuario seleccione texto al arrastrar */
.card-item {
  user-select: none;
}
</style>