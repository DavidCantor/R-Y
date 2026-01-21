<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-green-600 font-bold uppercase tracking-widest text-sm mb-3">Galería Visual</h2>
        <h3 class="text-3xl md:text-4xl font-extrabold text-gray-900">Nuestras Creaciones</h3>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Un vistazo a la frescura de nuestros ingredientes y el ambiente acogedor que te espera.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 h-150 md:h-200">

        <div class="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000"
            alt="Plato estrella"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div
            class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
            <span
              class="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">Especialidad
              de la Casa</span>
          </div>
        </div>

        <div class="col-span-1 row-span-2 relative group overflow-hidden rounded-2xl">
          <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600"
            alt="Cócteles" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div
            class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <span
              class="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mixología</span>
          </div>
        </div>

        <div class="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
          <img src="https://images.unsplash.com/photo-1550966842-28a2a2b9ed31?auto=format&fit=crop&q=80&w=600"
            alt="Interior restaurante"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>

        <div class="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
          <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=600"
            alt="Postres" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>

      </div>

      <div class="mt-12 text-center">
        <a href="https://instagram.com/tu_usuario" target="_blank"
          class="inline-flex items-center space-x-2 text-gray-900 font-bold hover:text-green-600 transition-colors">
          <span>Ver más en Instagram</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>