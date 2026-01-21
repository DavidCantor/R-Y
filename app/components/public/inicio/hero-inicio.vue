<template>
  <section class="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070" 
        alt="Comida de restaurante" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50 lg:bg-black/40"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left w-full">
      <div class="lg:w-2/3">
        <span class="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-green-400 uppercase bg-green-400/10 border border-green-400/20 rounded-full">
          Sabor Auténtico en cada bocado
        </span>
        
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Experiencias que <br />
          <span class="text-green-500">enamoran al paladar.</span>
        </h1>
        
        <p class="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto lg:mx-0">
          Descubre nuestra selección de platos preparados con ingredientes locales y la pasión de nuestra cocina tradicional. El lugar perfecto para momentos inolvidables.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <NuxtLink 
            to="/menu" 
            class="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl text-center"
          >
            Ver la Carta
          </NuxtLink>
          
          <NuxtLink 
            to="/contacto" 
            class="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/30 transition-all duration-300 text-center"
          >
            Reservar Mesa
          </NuxtLink>
        </div>
        
        <div class="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-white/80">
          <div class="flex items-center space-x-2">
            <span class="text-green-500 font-bold">★ 4.9</span>
            <span class="text-sm">Opiniones Reales</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-green-500 font-bold">30+</span>
            <span class="text-sm">Platos Únicos</span>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
      <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>