<template>
  <section class="relative bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-10">

        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
            <span class="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Tradición en Suba
          </div>

          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Nuestro <span class="text-green-600">Menú</span> <br />
            <span class="text-yellow-500 italic font-medium text-3xl md:text-5xl">Para compartir</span>
          </h1>

          <p class="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Descubre nuestras opciones preparadas al instante. Desde un <strong>desayuno completo</strong> 
            hasta unas <strong>onces tradicionales</strong> para calentar el corazón.
          </p>

          <div class="flex flex-wrap justify-center lg:justify-start gap-3">
            <a href="#desayunos" class="px-5 py-2.5 bg-green-600 text-white font-bold rounded-xl text-sm">
              Desayunos & Brunch
            </a>
            <a href="#onces" class="px-5 py-2.5 bg-yellow-400 text-black font-bold rounded-xl text-sm">
              Onces & Meriendas
            </a>
          </div>
        </div>

        <div class="w-full lg:w-1/2 relative">
          <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img src="https://images.unsplash.com/photo-1593308123721-26756816579c?auto=format&fit=crop&q=80&w=800"
              alt="Plato del Menú" class="w-full h-80 md:h-100 object-cover" />
          </div>

          <div class="absolute -bottom-4 -right-4 md:-left-4 md:right-auto bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div class="flex items-center space-x-3">
              <span class="text-2xl text-yellow-500 font-bold">🍳</span>
              <div>
                <p class="text-sm font-bold text-gray-900">Productos Reales</p>
                <p class="text-xs text-gray-500">Hechos con amor</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>