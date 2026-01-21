<template>
  <footer class="bg-gray-950 text-gray-400 pt-16 pb-8 border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

        <div class="space-y-4">
          <div class="flex items-center space-x-3 text-white">
            <div class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-yellow-400">
              <span class="font-bold text-xl">E</span>
            </div>
            <span class="text-xl font-bold tracking-tight">Experienzzia <span class="text-green-500">Gourmet</span></span>
          </div>
          <p class="text-sm leading-relaxed">
            Sabor tradicional y ambiente familiar en el corazón de Suba. Desayunos, onces y meriendas con amor.
          </p>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 uppercase text-xs tracking-widest">Explorar</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/" class="hover:text-yellow-400 transition-colors">Inicio</NuxtLink></li>
            <li><NuxtLink to="/menu" class="hover:text-yellow-400 transition-colors">Ver Menú Digital</NuxtLink></li>
            <li><NuxtLink to="/ubicacion" class="hover:text-yellow-400 transition-colors">Ubicación en Suba</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 uppercase text-xs tracking-widest">Horarios</h4>
          <ul class="space-y-2 text-sm">
            <li class="flex justify-between">
              <span>Lunes a Sábado</span>
              <span class="text-white text-right">[7:00 am - 7:00 pm]</span>
            </li>
            <li class="flex justify-between font-bold text-green-500">
              <span>Domingos</span>
              <span class="text-right">[8:00 am - 2:00 pm]</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 uppercase text-xs tracking-widest">Domicilios</h4>
          <p class="text-xs mb-4 text-gray-500 italic">Escríbenos, te atenderemos personalmente:</p>
          <a 
            href="https://wa.me/TUNUMERO" 
            class="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all w-full justify-center shadow-lg"
          >
            <span>📱 [Tu Celular Aquí]</span>
          </a>
          <p class="mt-4 text-xs text-center md:text-left">📍 Suba, Bogotá D.C.</p>
        </div>
      </div>

      <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-600 space-y-4 md:space-y-0">
        <p>&copy; 2026 Experienzzia Gourmet. Tradición familiar.</p>
        <div class="flex space-x-6">
          <a href="#" class="hover:text-gray-300">Instagram</a>
          <a href="#" class="hover:text-gray-300">Facebook</a>
          <a href="#" class="hover:text-gray-300">Google Maps</a>
        </div>
      </div>
    </div>
  </footer>
</template>