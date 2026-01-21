<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div
          class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
          <div class="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Visítanos</h3>
          <p class="text-gray-600 leading-relaxed">
            Calle Principal #123, <br />
            Colonia Gastronómica, Ciudad.
          </p>
          <NuxtLink to="/ubicacion" class="mt-4 text-green-600 font-semibold hover:underline">
            Ver en Google Maps
          </NuxtLink>
        </div>

        <div
          class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
          <div class="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Horarios</h3>
          <div class="text-gray-600 space-y-1">
            <p><span class="font-medium">Lun - Vie:</span> 12:00 - 22:00</p>
            <p><span class="font-medium">Sáb - Dom:</span> 09:00 - 23:00</p>
          </div>
          <span
            class="mt-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Abierto ahora
          </span>
        </div>

        <div
          class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
          <div class="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Contacto</h3>
          <p class="text-gray-600">¿Tienes dudas o quieres reservar?</p>
          <a href="tel:+123456789" class="mt-2 text-lg font-bold text-gray-900 hover:text-green-600">
            +54 9 11 1234-5678
          </a>
          <p class="text-sm text-gray-500">hola@minegocio.com</p>
        </div>

      </div>
    </div>
  </section>
</template>