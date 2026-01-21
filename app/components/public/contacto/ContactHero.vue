<template>
  <section class="relative bg-white py-16 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12">

        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <nav class="flex justify-center lg:justify-start text-sm font-bold uppercase tracking-widest text-green-600 mb-4">
            <span>Contacto</span>
          </nav>

          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Estamos a un <br />
            <span class="text-green-600">mensaje</span> de distancia
          </h1>

          <p class="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            Ya sea para reservar una mesa o para organizar un evento especial en Suba, 
            estamos listos para atenderte y brindarte la mejor experiencia.
          </p>

          <div class="flex items-center justify-center lg:justify-start gap-4">
            <div class="flex -space-x-2">
              <img src="https://i.pravatar.cc/150?u=1" class="w-10 h-10 rounded-full border-2 border-white bg-gray-200" alt="Equipo">
              <img src="https://i.pravatar.cc/150?u=2" class="w-10 h-10 rounded-full border-2 border-white bg-gray-200" alt="Equipo">
              <img src="https://i.pravatar.cc/150?u=3" class="w-10 h-10 rounded-full border-2 border-white bg-gray-200" alt="Equipo">
            </div>
            <p class="text-sm text-gray-600">
              <span class="font-bold text-gray-900">Nuestro equipo</span> responde en <span class="text-green-600 font-bold">minutos</span>.
            </p>
          </div>
        </div>

        <div class="w-full lg:w-1/2">
          <div class="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-video lg:aspect-square">
            <img src="#"
              alt="Ambiente Restaurante"
              class="w-full h-full object-cover" />
            
            <div class="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-md border border-gray-100 flex items-center gap-3">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <p class="text-[10px] uppercase font-bold text-gray-400">Estado</p>
                <p class="text-xs font-bold text-gray-900">Abierto hoy hasta las 7 PM</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>