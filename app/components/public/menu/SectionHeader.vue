<template>
  <section class="relative bg-stone-50 overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
    <div
      class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-green-100/50 rounded-full blur-3xl">
    </div>
    <div
      class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-72 h-72 bg-orange-100/50 rounded-full blur-3xl">
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12">

        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <div
            class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold uppercase tracking-widest mb-6">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Experiencia Gastronómica</span>
          </div>

          <h1 class="text-5xl md:text-7xl font-serif font-black text-gray-900 leading-tight mb-6">
            Nuestra <span class="text-green-600 italic font-light">Carta</span> <br />
            Temporada 2026
          </h1>

          <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Una cuidadosa selección de sabores locales fusionados con técnicas contemporáneas. Cada plato cuenta una
            historia de frescura y pasión.
          </p>

          <div class="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#entradas"
              class="px-6 py-3 bg-gray-900 text-white font-bold rounded-2xl hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200">
              Ver Entradas
            </a>
            <a href="#especialidades"
              class="px-6 py-3 bg-white text-gray-900 border border-gray-200 font-bold rounded-2xl hover:border-green-600 transition-all shadow-sm">
              Especialidades
            </a>
          </div>
        </div>

        <div class="w-full lg:w-1/2 relative">
          <div
            class="relative z-10 rounded-4xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
              alt="Plato Saludable" class="w-full h-100 md:h-125 object-cover" />
          </div>

          <div
            class="absolute -bottom-6 -left-6 md:-left-12 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce-slow">
            <div class="flex items-center space-x-4">
              <div class="bg-orange-100 p-3 rounded-xl text-orange-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-bold text-gray-900">100% Orgánico</p>
                <p class="text-xs text-gray-500">Ingredientes de origen local</p>
              </div>
            </div>
          </div>

          <div class="absolute -top-10 -right-10 w-32 h-32 border-8 border-green-200/50 rounded-full -z-10"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes bounce-slow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}

h1 {
  letter-spacing: -0.04em;
}
</style>