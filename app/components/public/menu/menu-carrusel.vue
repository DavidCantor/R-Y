<script setup>
import { ref } from 'vue'

const carousel = ref(null)
const isDown = ref(false)
const startX = ref(0)
const scrollLeftState = ref(0)

const dishes = [
  { name: 'Corte Wagyu A5', category: 'Especial', price: '45.00', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800' },
  { name: 'Pasta al Nero di Seppia', category: 'Mariscos', price: '22.00', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800' },
  { name: 'Tuna Tartare Tower', category: 'Entradas', price: '18.50', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800' },
  { name: 'Pato a la Naranja', category: 'Aves', price: '29.00', image: 'https://images.unsplash.com/photo-1516685018646-527ad952f8d4?q=80&w=800' },
  { name: 'Esfera de Frambuesa', category: 'Postres', price: '12.00', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800' },
  { name: 'Trufa Blanca Risotto', category: 'Gourmet', price: '34.00', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800' }
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
  <section class="py-24 bg-stone-950 overflow-hidden select-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 class="text-4xl md:text-5xl font-serif font-bold text-white">
            Selección <span class="text-green-500 italic font-light">del Chef</span>
          </h2>
          <p class="text-stone-500 mt-2 text-sm uppercase tracking-widest">Arrastra para explorar la carta</p>
        </div>

        <div class="flex gap-4">
          <button @click="scrollBtn('left')"
            class="w-12 h-12 flex items-center justify-center border-2 border-white/10 rounded-full text-white hover:bg-green-600 hover:border-green-600 transition-all duration-300 active:scale-90">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="scrollBtn('right')"
            class="w-12 h-12 flex items-center justify-center border-2 border-white/10 rounded-full text-white hover:bg-green-600 hover:border-green-600 transition-all duration-300 active:scale-90">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div ref="carousel" @mousedown="handleMouseDown" @mouseleave="handleMouseUpOrLeave"
        @mouseup="handleMouseUpOrLeave" @mousemove="handleMouseMove"
        class="flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-10">
        <div v-for="dish in dishes" :key="dish.name" class="carousel-item flex-none w-[80%] md:w-105">
          <div class="relative aspect-3/4 overflow-hidden rounded-[2.5rem] group border border-white/5">
            <img :src="dish.image"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 pointer-events-none"
              draggable="false" />

            <div
              class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
              <span class="text-green-400 font-bold text-xs uppercase tracking-[0.2em] mb-2">{{ dish.category }}</span>
              <h3 class="text-3xl font-serif font-bold text-white mb-6">{{ dish.name }}</h3>

              <div
                class="flex justify-between items-center translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span class="text-2xl font-black text-white">${{ dish.price }}</span>
                <span
                  class="px-5 py-2 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase font-bold rounded-full border border-white/20 tracking-widest">
                  Ver Detalles
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

/* Soporte para inercia en móviles */
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