<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const menuSection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) isVisible.value = true
    })
  }, { threshold: 0.1 })
  if (menuSection.value) observer.observe(menuSection.value)
})

const categories = ['Desayunos', 'Brunch', 'Onces', 'Bebidas', 'Postres']

const menuItems = [
  { name: 'Huevos al Gusto', price: '$12k', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=300', delay: '100' },
  { name: 'Chocolate Santafereño', price: '$8k', img: 'https://images.unsplash.com/photo-1544787210-2211d44b505b?q=80&w=300', delay: '200' },
  { name: 'Tamal Tolimense', price: '$15k', img: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=300', delay: '300' },
  { name: 'Calentado Casero', price: '$18k', img: 'https://images.unsplash.com/photo-1593308123721-26756816579c?q=80&w=300', delay: '400' },
  { name: 'Arepa con Queso', price: '$7k', img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=300', delay: '500' },
  { name: 'Café de la Casa', price: '$5k', img: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=300', delay: '600' },
]
</script>

<template>
  <section ref="menuSection" class="relative py-32 bg-[#1D5948] overflow-hidden">
    

    <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
      
      <div :class="['mb-16 transition-all duration-1000', isVisible ? 'opacity-100' : 'opacity-0 translate-y-10']">
        <h2 class="font-amatic text-[#F2C46D] text-4xl font-bold mb-2">Del Horno a tu Mesa</h2>
        <h3 class="font-amatic text-7xl md:text-8xl text-white leading-none">Explora Nuestro Menú</h3>
        <div class="flex justify-center gap-4 mt-8 overflow-x-auto pb-4 no-scrollbar">
          <button v-for="cat in categories" :key="cat" 
            class="px-6 py-2 rounded-full border border-[#F2C46D]/30 text-[#F2F2F2] font-sans text-xs uppercase tracking-widest hover:bg-[#F2C46D] hover:text-[#1D5948] transition-all whitespace-nowrap">
            {{ cat }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        
        <div v-for="(item, index) in menuItems" :key="index"
          :class="['group relative flex flex-col items-center transition-all duration-1000', 
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
          :style="{ transitionDelay: `${item.delay}ms` }"
        >
          <div class="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#F2C46D] p-1 group-hover:rotate-6 transition-transform duration-500 shadow-2xl">
            <div class="w-full h-full rounded-full overflow-hidden border-4 border-[#1D5948]">
              <img :src="item.img" :alt="item.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div class="absolute -top-2 -right-2 bg-[#F2C46D] text-[#1D5948] font-sans font-black text-[10px] px-2 py-1 rounded-md shadow-lg">
              {{ item.price }}
            </div>
          </div>

          <h4 class="mt-6 font-amatic text-2xl text-white font-bold group-hover:text-[#F2C46D] transition-colors">
            {{ item.name }}
          </h4>
        </div>

      </div>

      <div :class="['mt-20 transition-all duration-1000 delay-700', isVisible ? 'opacity-100' : 'opacity-0']">
        <p class="font-sans text-[#F2C46D]/60 text-xs uppercase tracking-[0.4em] mb-6 italic">CLL 10000 - Tradición Pura</p>
        <button class="px-12 py-4 bg-[#F2C46D] text-[#1D5948] font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform shadow-2xl">
          Descargar Menú PDF
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@400;900&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }

/* Esconde la barra de scroll en los botones de categoría */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>