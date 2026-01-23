<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <section class="relative w-full pt-32 pb-16 px-6 md:pt-48 md:pb-24 bg-[#1D5948] overflow-hidden border-b-4 border-[#F2C46D]">
    


    <div class="absolute top-1/2 left-0 w-150 h-150 bg-[#F2C46D]/10 rounded-full blur-[120px] -translate-y-1/2 -ml-64 pointer-events-none z-0"></div>

    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
      
      <div class="lg:w-1/2 text-center lg:text-left">
        <div :class="['transition-all duration-1000 transform', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
          <span class="font-sans text-[#F2C46D] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Tradición y sabor en Suba, Bogotá
          </span>
          <div class="h-0.5 w-16 bg-[#F2C46D] mb-8 mx-auto lg:mx-0"></div>
        </div>

        <h1 :class="['font-amatic text-6xl md:text-8xl text-[#F2F2F2] leading-[0.9] mb-6 transition-all duration-1000 delay-200 transform', 
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
          Sabor que abraza <br />
          <span class="text-[#F2C46D]">a la familia.</span>
        </h1>

        <p :class="['font-sans text-lg md:text-xl text-[#F2F2F2]/90 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-1000 delay-300 transform',
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
          En <span class="font-bold border-b-2 border-[#F2C46D]">Experienzzia Gourmet</span>, convertimos tus onces, meriendas y brunch en momentos llenos de calidez y tradición.
        </p>

        <div :class="['flex flex-col sm:flex-row gap-5 justify-center lg:justify-start transition-all duration-1000 delay-400 transform',
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
          
          <NuxtLink to="/public/menu" 
            class="px-10 py-4 bg-[#F2C46D] text-[#1D5948] font-sans font-extrabold uppercase tracking-widest text-xs rounded-full hover:bg-[#F2F2F2] transition-all shadow-xl">
            Ver el Menú
          </NuxtLink>
          
          <a href="https://wa.me/57XXXXXXXXXX" target="_blank"
            class="px-10 py-4 border-2 border-[#F2C46D] text-[#F2C46D] font-sans font-extrabold uppercase tracking-widest text-xs rounded-full hover:bg-[#F2C46D] hover:text-[#1D5948] transition-all flex items-center justify-center gap-2">
            Pide tu Domicilio
          </a>
        </div>
      </div>

      <div :class="['lg:w-1/2 w-full relative transition-all duration-1500 delay-600 transform', 
        isLoaded ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95']">
        
        <div class="relative z-10 bg-[#F2F2F2] rounded-3xl p-4 shadow-[0_40px_80px_rgba(0,0,0,0.5)] rotate-3">
          <div class="aspect-4/5 overflow-hidden rounded-2xl bg-[#24735C] flex items-center justify-center relative">
             <div class="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%"><filter id="innerGrain"><feTurbulence baseFrequency="0.9" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#innerGrain)"/></svg>
            </div>
            <div class="text-center p-8 z-10">
              <span class="text-8xl block mb-6">☕</span>
              <p class="font-amatic text-[#F2C46D] text-4xl">¡Delicias recién preparadas!</p>
            </div>
          </div>
        </div>
        <div class="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#F2C46D]/30 z-0 rounded-3xl"></div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Inter:wght@400;700&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }
</style>