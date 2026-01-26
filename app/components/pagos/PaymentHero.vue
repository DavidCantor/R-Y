

<script setup>
import { ref, onMounted } from 'vue'
const isLoaded = ref(false)
onMounted(() => {
  // Pequeño retardo para asegurar que el navegador esté listo
  setTimeout(() => { isLoaded.value = true }, 100)
})
</script>

<template>
  <section class="relative w-full pt-40 pb-10 px-6 bg-[#1D5948] overflow-hidden">
    <div class="absolute top-1/2 left-0 w-150 h-150 bg-[#F2C46D]/10 rounded-full blur-[120px] -translate-y-1/2 -ml-64 pointer-events-none z-0"></div>

    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
      <div class="lg:w-1/2 text-center lg:text-left">
        <div :class="['transition-all duration-1000 transform', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
          <span class="font-sans text-[#F2C46D] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Tradición en Suba</span>
          <div class="h-0.5 w-16 bg-[#F2C46D] mb-8 mx-auto lg:mx-0"></div>
        </div>

        <h1 :class="['font-amatic text-7xl md:text-9xl text-[#F2F2F2] leading-[0.8] mb-6 transition-all duration-1000 delay-200 transform', 
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
          Sabor que <br /> <span class="text-[#F2C46D]">abraza.</span>
        </h1>

        <p :class="['font-sans text-lg text-[#F2F2F2]/90 mb-10 max-w-xl mx-auto lg:mx-0 transition-all duration-1000 delay-400 transform', 
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
          En <strong>Experienzzia Gourmet</strong>, cada bocado es un viaje a lo hecho en casa, con amor y los mejores ingredientes.
        </p>

        <div :class="['flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 transform', 
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
          <NuxtLink to="/public/menu" class="px-10 py-4 bg-[#F2C46D] text-[#1D5948] font-sans font-black uppercase tracking-widest text-xs rounded-full shadow-xl hover:bg-white transition-colors">Ver Menú</NuxtLink>
        </div>
      </div>

      <div :class="['lg:w-1/2 w-full relative transition-all duration-1200 delay-800 transform', 
        isLoaded ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95']">
        <div class="relative z-10 bg-[#F2F2F2] rounded-[3rem] p-4 shadow-2xl rotate-3">
          <div class="h-112.5 md:h-137.5 overflow-hidden rounded-[2.5rem] bg-[#24735C]">
            <NuxtImg src="/images/brunch/brunch-familiar.webp" class="w-full h-full object-cover" @error="(e) => e.target.src = 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1000'" />
          </div>
        </div>
        <div class="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#F2C46D]/30 z-0 rounded-[3rem]"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@400;700;900&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }
</style>