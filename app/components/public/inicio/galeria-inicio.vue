<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const gallerySection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) isVisible.value = true
    })
  }, { threshold: 0.1 })
  if (gallerySection.value) observer.observe(gallerySection.value)
})

const galleryItems = [
  { title: 'Desayunos Completos', size: 'col-span-2 row-span-2', img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1000', delay: '100' },
  { title: 'Meriendas', size: 'col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600', delay: '200' },
  { title: 'Brunch Especial', size: 'col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1593308123721-26756816579c?q=80&w=600', delay: '300' },
  { title: 'Panadería', size: 'col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600', delay: '400' },
  { title: 'Bebidas Calientes', size: 'col-span-1 row-span-2', img: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=600', delay: '500' },
  { title: 'Postres de la Casa', size: 'col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800', delay: '600' },
  { title: 'Jugos Naturales', size: 'col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600', delay: '700' },
  { title: 'Jugos Naturales', size: 'col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600', delay: '700' }
]
</script>

<template>
  <section ref="gallerySection" class="relative py-20 bg-[#F2F2F2] overflow-hidden">
    <div class="absolute inset-0 pointer-events-none opacity-[0.05]">
      <svg width="100%" height="100%"><filter id="galleryGrain"><feTurbulence baseFrequency="0.8" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#galleryGrain)"/></svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div :class="['mb-12 text-center transition-all duration-1000', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
        <span class="font-sans text-[#24735C] font-bold uppercase tracking-[0.3em] text-xs mb-3 block">Nuestra Vitrina</span>
        <h2 class="font-amatic text-6xl md:text-7xl text-[#1D5948] leading-none mb-4 text-shadow-sm">Sabor Real en cada plato</h2>
        <div class="h-1 w-20 bg-[#F2C46D] mx-auto mb-6"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto md:h-212.5">
        
        <div v-for="(item, index) in galleryItems" :key="index"
          :class="[
            item.size,
            'relative rounded-3xl overflow-hidden bg-white border-4 border-white shadow-md transition-all duration-1000 group cursor-pointer',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          ]"
          :style="{ transitionDelay: `${item.delay}ms` }"
        >
          <img :src="item.img" :alt="item.title" 
            class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" />
          
          <div class="absolute inset-0 bg-linear-to-t from-[#1D5948]/90 via-[#1D5948]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out flex items-end p-6">
            <span class="text-[#F2C46D] font-amatic text-3xl md:text-4xl leading-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              {{ item.title }}
            </span>
          </div>

          <div class="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full group-hover:opacity-0 transition-opacity duration-300">
            <span class="text-[10px] font-bold text-[#1D5948] uppercase tracking-tighter">{{ item.title }}</span>
          </div>
        </div>

      </div>

      <div :class="['mt-16 text-center transition-all duration-1000 delay-900', isVisible ? 'opacity-100' : 'opacity-0']">
        <NuxtLink to="/public/menu" 
          class="inline-block px-12 py-5 bg-[#1D5948] text-[#F2C46D] rounded-full font-sans font-extrabold text-xs uppercase tracking-widest hover:bg-[#F2C46D] hover:text-[#1D5948] transition-all shadow-xl hover:-translate-y-1">
          Ver Menú Completo
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@400;700&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }
</style>