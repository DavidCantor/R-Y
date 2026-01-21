<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-green-600 font-bold uppercase tracking-widest text-xs mb-2">Nuestros Productos</h2>
        <h3 class="text-3xl font-bold text-gray-900">Sabor Real en cada plato</h3>
        <p class="mt-3 text-gray-600 max-w-xl">
          Fotos reales de lo que preparamos diariamente en Suba. Sin filtros, solo tradición y frescura.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">

        <div class="col-span-2 row-span-2 relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
          <img src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=1000"
            alt="Desayuno tradicional" 
            class="w-full h-full object-cover" />
          <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 p-4">
            <span class="text-white font-bold">Desayunos Completos</span>
          </div>
        </div>

        <div class="col-span-1 row-span-1 relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200 h-40 md:h-auto">
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600"
            alt="Onces y meriendas" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 inset-x-0 bg-black/40 p-2">
            <span class="text-white text-xs font-bold uppercase">Meriendas</span>
          </div>
        </div>

        <div class="col-span-1 row-span-1 relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200 h-40 md:h-auto">
          <img src="https://images.unsplash.com/photo-1593308123721-26756816579c?auto=format&fit=crop&q=80&w=600"
            alt="Opciones de Brunch" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 inset-x-0 bg-black/40 p-2">
            <span class="text-white text-xs font-bold uppercase">Brunch</span>
          </div>
        </div>

        <div class="col-span-2 md:col-span-2 row-span-1 relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200 h-48">
          <img src="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800"
            alt="Café tradicional" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 inset-x-0 bg-black/40 p-4">
            <span class="text-white font-bold italic text-sm">"El café perfecto para tus onces"</span>
          </div>
        </div>

      </div>

      <div class="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
        <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition font-medium">
          <span class="text-yellow-500 font-bold">★ ★ ★ ★ ★</span>
          <span class="border-b border-gray-300">Ver opiniones en Google</span>
        </a>
        
        <a href="#" class="px-6 py-2 bg-green-600 text-white rounded-full font-bold text-sm hover:bg-green-700 transition shadow-md">
          Ver Menú Completo
        </a>
      </div>
    </div>
  </section>
</template>