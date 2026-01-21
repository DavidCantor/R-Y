<template>
  <section class="relative bg-stone-50 pt-20 pb-32 overflow-hidden">
    <div
      class="absolute top-0 left-0 w-96 h-96 bg-green-100/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2">
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16">

        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <nav
            class="flex justify-center lg:justify-start space-x-2 text-sm font-bold uppercase tracking-widest text-green-600 mb-6">
            <span class="text-stone-400">Contacto</span>
          </nav>

          <h1 class="text-5xl md:text-7xl font-serif font-black text-gray-900 leading-[1.1] mb-8">
            Estamos a un <br />
            <span class="text-green-600 italic font-light">mensaje</span> de distancia
          </h1>

          <p class="text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Ya sea para reservar la mejor mesa de la terraza o para organizar un evento inolvidable en Cota, queremos
            ser parte de tu historia.
          </p>

          <div class="mt-10 flex items-center justify-center lg:justify-start gap-4">
            <div class="flex -space-x-3">
              <img src="https://i.pravatar.cc/150?u=1" class="w-10 h-10 rounded-full border-2 border-white"
                alt="Team 1">
              <img src="https://i.pravatar.cc/150?u=2" class="w-10 h-10 rounded-full border-2 border-white"
                alt="Team 2">
              <img src="https://i.pravatar.cc/150?u=3" class="w-10 h-10 rounded-full border-2 border-white"
                alt="Team 3">
            </div>
            <p class="text-sm text-gray-600">
              <span class="font-bold text-gray-900">Nuestro equipo</span> suele responder en <span
                class="text-green-600 font-bold">15 minutos</span>.
            </p>
          </div>
        </div>

        <div class="w-full lg:w-1/2 relative">
          <div
            class="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 aspect-square md:aspect-video lg:aspect-square">
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000"
              alt="Ambiente Restaurante Yaneth"
              class="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000" />
            <div
              class="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20">
              <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-[10px] uppercase tracking-tighter text-gray-400 font-bold">Disponibilidad</p>
                <p class="text-sm font-bold text-gray-900">Abierto hoy hasta las 10 PM</p>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-10 -left-10 w-40 h-40 border-16 border-orange-100 rounded-full -z-10"></div>
          <div class="absolute -top-6 -right-6 w-24 h-24 bg-green-100 rounded-4xl rotate-12 -z-10"></div>
        </div>

      </div>
    </div>
  </section>
</template>