<template>
  <section class="py-16 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-10">

        <div class="w-full lg:w-1/2 relative">
          <div class="absolute -top-3 -left-3 w-16 h-16 bg-yellow-400 rounded-lg z-0"></div>
          
          <div class="relative z-10 rounded-xl overflow-hidden border border-gray-100 shadow-lg">
            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000"
              alt="Ambiente tradicional" class="w-full h-80 md:h-100 object-cover" />
            
            <div class="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow border-l-4 border-green-600">
              <p class="text-sm font-bold text-gray-900 uppercase">Sabor de Hogar</p>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2">
          <h2 class="text-green-600 font-bold uppercase tracking-widest text-xs mb-2">Sobre Nosotros</h2>
          <h3 class="text-3xl font-bold text-gray-900 mb-6">
            Tradición familiar <br />
            <span class="text-yellow-500">en el corazón de Suba.</span>
          </h3>

          <div class="space-y-4 text-gray-600 text-base leading-relaxed">
            <p>
              En <span class="font-bold text-gray-900">Experienzzia Gourmet</span>, creemos que los mejores momentos suceden alrededor de una buena mesa. Somos un lugar sencillo y familiar dedicado a rescatar los sabores tradicionales.
            </p>
            <p>
              Nuestra misión es brindarte una atención cercana, ya sea que nos visites en nuestro local o disfrutes de nuestros productos en la comodidad de tu casa.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex items-center space-x-3">
              <div class="bg-green-100 p-1.5 rounded-full text-green-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700 font-medium">Ingredientes frescos</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="bg-green-100 p-1.5 rounded-full text-green-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700 font-medium">Recetas tradicionales</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="bg-green-100 p-1.5 rounded-full text-green-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700 font-medium">Atención familiar</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="bg-green-100 p-1.5 rounded-full text-green-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700 font-medium">Hecho con amor</span>
            </div>
          </div>

          <div class="mt-10">
            <button class="px-8 py-3 bg-gray-900 text-white font-bold rounded hover:bg-black transition">
              Nuestra Historia
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>