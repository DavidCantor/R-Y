<template>
  <footer class="relative bg-[#1D5948] text-[#F2F2F2]/70 pt-20 pb-10 border-t-4 border-[#F2C46D] overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.15]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="footerGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#footerGrain)" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        <div class="space-y-6">
          <div class="flex flex-col items-start">
            <img 
              src="/images/logo experienzzia.webp" 
              alt="Logo Experienzzia Gourmet" 
              class="w-32 h-auto mb-4 drop-shadow-md"
            />
            <p class="font-sans text-sm leading-relaxed max-w-xs italic">
              "Sabor tradicional y ambiente familiar en el corazón de Suba. Desayunos, onces y meriendas hechos con amor."
            </p>
          </div>
        </div>

        <div>
          <h4 class="font-amatic text-[#F2C46D] text-3xl font-bold mb-6 tracking-wide">Explorar</h4>
          <ul class="space-y-3 font-sans text-sm font-medium">
            <li><NuxtLink to="/" class="hover:text-[#F2C46D] transition-colors flex items-center gap-2"><span>›</span> Inicio</NuxtLink></li>
            <li><NuxtLink to="/public/menu" class="hover:text-[#F2C46D] transition-colors flex items-center gap-2"><span>›</span> Menú Digital</NuxtLink></li>
            <li><NuxtLink to="/public/ubicacion" class="hover:text-[#F2C46D] transition-colors flex items-center gap-2"><span>›</span> Cómo llegar</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-amatic text-[#F2C46D] text-3xl font-bold mb-6 tracking-wide">Horarios</h4>
          <ul class="space-y-3 font-sans text-sm">
            <li class="flex justify-between border-b border-[#F2F2F2]/10 pb-2">
              <span class="font-bold text-[#F2F2F2]">Lunes a Sábado</span>
              <span class="text-[#F2C46D]">7:00 - 19:00</span>
            </li>
            <li class="flex justify-between border-b border-[#F2F2F2]/10 pb-2">
              <span class="font-bold text-[#F2F2F2]">Domingos</span>
              <span class="text-[#F2C46D]">8:00 - 14:00</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-amatic text-[#F2C46D] text-3xl font-bold mb-6 tracking-wide">Domicilios</h4>
          <p class="font-sans text-[10px] uppercase tracking-[0.2em] mb-4 text-[#F2F2F2]/50">WhatsApp Directo:</p>
          <a 
            href="https://wa.me/57XXXXXXXXXX" 
            target="_blank"
            class="inline-flex items-center space-x-3 bg-[#24735C] hover:bg-[#F2C46D] text-[#F2F2F2] hover:text-[#1D5948] font-bold py-4 px-6 rounded-2xl transition-all w-full justify-center shadow-2xl border border-[#F2C46D]/20 group"
          >
            <span class="text-xl group-hover:scale-110 transition-transform">📱</span>
            <span class="font-sans text-sm uppercase tracking-widest">Pide Ahora</span>
          </a>
          <p class="mt-6 text-xs flex items-center gap-2 text-[#F2F2F2]/60 font-sans">
            <span class="text-[#F2C46D]">📍</span> Suba, Bogotá D.C.
          </p>
        </div>
      </div>

      <div class="pt-8 border-t border-[#F2F2F2]/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-[#F2F2F2]/40 font-sans space-y-4 md:space-y-0 text-center">
        <p>&copy; 2026 Experienzzia Gourmet. Tradición familiar desde siempre.</p>
        <div class="flex space-x-8">
          <a href="#" class="hover:text-[#F2C46D] transition-colors">Instagram</a>
          <a href="#" class="hover:text-[#F2C46D] transition-colors">Facebook</a>
          <a href="#" class="hover:text-[#F2C46D] transition-colors">Maps</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@400;500;700&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }
</style>