<template>
  <section class="py-20 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <div class="w-full lg:w-1/2 relative">
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-2xl z-0"></div>

          <div
            class="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000"
              alt="Nuestro equipo de cocina" class="w-full h-100 md:h-125 object-cover" />
            <div class="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-green-600">
              <p class="text-3xl font-bold text-gray-900">15+</p>
              <p class="text-sm text-gray-600 font-medium">Años de Tradición</p>
            </div>
          </div>

          <div
            class="hidden md:block absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-8 border-white shadow-xl z-20">
            <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=400"
              alt="Plato detalle" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="w-full lg:w-1/2">
          <h2 class="text-green-600 font-bold uppercase tracking-widest text-sm mb-3">Nuestra Historia</h2>
          <h3 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Pasión por la cocina <br />
            <span class="text-gray-500 font-light italic">desde nuestra fundación.</span>
          </h3>

          <div class="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Todo comenzó con un pequeño sueño familiar en el corazón de la ciudad. Nuestra misión siempre ha sido
              simple: transformar ingredientes frescos en recuerdos inolvidables.
            </p>
            <p>
              En <span class="font-semibold text-gray-900">MiNegocio</span>, creemos que la comida es más que solo
              nutrición; es una forma de arte y una excusa para reunir a las personas que más queremos.
            </p>
          </div>

          <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="flex items-start space-x-3">
              <div class="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900">Ingredientes Orgánicos</h4>
                <p class="text-sm text-gray-500">Del campo directo a tu mesa.</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900">Chef Profesional</h4>
                <p class="text-sm text-gray-500">Expertos en técnicas culinarias.</p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <NuxtLink to="/contacto"
              class="inline-block px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
              Conoce más
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>