<script setup>
import { ref } from 'vue'

const carousel = ref(null)
const isDown = ref(false)
const startX = ref(0)
const scrollLeftState = ref(0)

// Productos "Estrella" de Experienzzia Gourmet
const dishes = [
  { name: 'Chocolate Santafereño', category: 'Clásico', price: '12.000', image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800' },
  { name: 'Cesta de Amasijos', category: 'Para Compartir', price: '10.500', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800' },
  { name: 'Calentado de la Casa', category: 'Desayuno Top', price: '18.900', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800' },
  { name: 'Brunch Experienzzia', category: 'Especial', price: '22.000', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800' },
  { name: 'Tamal Tolimense', category: 'Tradición', price: '15.000', image: 'https://images.unsplash.com/photo-1593308123721-26756816579c?q=80&w=800' },
]

const handleMouseDown = (e) => {
  isDown.value = true
  carousel.value.classList.add('active')
  startX.value = e.pageX - carousel.value.offsetLeft
  scrollLeftState.value = carousel.value.scrollLeft
  carousel.value.style.scrollBehavior = 'auto'
}

const handleMouseUpOrLeave = () => {
  isDown.value = false
  carousel.value.classList.remove('active')
  carousel.value.style.scrollBehavior = 'smooth'
}

const handleMouseMove = (e) => {
  if (!isDown.value) return
  e.preventDefault()
  const x = e.pageX - carousel.value.offsetLeft
  const walk = (x - startX.value) * 2
  carousel.value.scrollLeft = scrollLeftState.value - walk
}

const scrollBtn = (direction) => {
  const container = carousel.value
  const cardWidth = container.querySelector('.carousel-item').offsetWidth + 24
  container.style.scrollBehavior = 'smooth'
  container.scrollLeft += direction === 'left' ? -cardWidth : cardWidth
}
</script>

<template>
  <section class="py-20 bg-gray-900 overflow-hidden select-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            Los Favoritos <span class="text-yellow-400 italic font-light">de Suba</span>
          </h2>
          <p class="text-gray-400 mt-2 text-xs uppercase tracking-widest">Desliza para ver nuestras especialidades</p>
        </div>

        <div class="flex gap-3">
          <button @click="scrollBtn('left')"
            class="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-green-600 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="scrollBtn('right')"
            class="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-green-600 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div ref="carousel" @mousedown="handleMouseDown" @mouseleave="handleMouseUpOrLeave"
        @mouseup="handleMouseUpOrLeave" @mousemove="handleMouseMove"
        class="flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-6">
        <div v-for="dish in dishes" :key="dish.name" class="carousel-item flex-none w-[75%] md:w-80">
          <div class="relative aspect-[4/5] overflow-hidden rounded-3xl group">
            <img :src="dish.image"
              class="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable="false" />

            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <span class="text-yellow-400 font-bold text-[10px] uppercase tracking-widest mb-1">{{ dish.category }}</span>
              <h3 class="text-2xl font-bold text-white mb-4">{{ dish.name }}</h3>

              <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-white">${{ dish.price }}</span>
                <span class="px-4 py-1.5 bg-green-600 text-white text-[10px] uppercase font-bold rounded-lg tracking-wider shadow-lg">
                  Pedir ya
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
@media (max-width: 768px) {
  .no-scrollbar {
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
  }
  .carousel-item {
    scroll-snap-align: center;
  }
}
</style>