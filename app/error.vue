<script setup>
defineProps(['error'])

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="relative min-h-screen bg-[#1D5948] flex items-center justify-center overflow-hidden font-sans">
    
    <div class="absolute inset-0 opacity-[0.12] pointer-events-none" 
         style="background-image: linear-gradient(45deg, #F2C46D 1px, transparent 1px), linear-gradient(-45deg, #F2C46D 1px, transparent 1px); background-size: 15px 15px;">
    </div>

    <div class="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="errorGrain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#errorGrain)" />
      </svg>
    </div>

    <div class="relative z-10 text-center px-6">
      <h1 class="font-amatic text-[12rem] md:text-[18rem] text-[#F2C46D] leading-none drop-shadow-2xl animate-pulse">
        {{ error.statusCode }}
      </h1>
      
      <div class="max-w-md mx-auto -mt-10 md:-mt-20">
        <h2 class="font-amatic text-5xl md:text-7xl text-white mb-6 uppercase tracking-tighter">
          ¡Vaya! Esta mesa está <span class="text-[#F2C46D]">reservada</span>
        </h2>
        
        <p class="text-gray-300 text-lg md:text-xl italic mb-10 leading-relaxed">
          "Parece que el plato que buscas no está en el menú hoy o la página se ha movido de lugar."
        </p>

        <button @click="handleError" 
          class="group relative px-12 py-5 bg-[#F2C46D] text-[#1D5948] font-black uppercase text-xs tracking-[0.4em] rounded-full shadow-[0_20px_50px_rgba(242,196,109,0.2)] hover:scale-105 active:scale-95 transition-all">
          <span class="relative z-10">Volver a la Mesa</span>
          <div class="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </button>
      </div>
    </div>

    <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F2C46D] opacity-[0.03] rounded-full blur-3xl"></div>
    <div class="absolute -top-20 -left-20 w-80 h-80 bg-white opacity-[0.03] rounded-full blur-3xl"></div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@400;900&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }

/* Animación de entrada */
h1 {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>