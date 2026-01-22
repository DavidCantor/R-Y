<script setup>
const socialLinks = [
  { name: 'WhatsApp', icon: 'M17.472 14.382c-.297-.149-1.758-.867...', color: 'bg-green-500', link: 'https://wa.me/...' },
  { name: 'Instagram', icon: 'M12 2.163c3.204 0...', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', link: '#' },
  { name: 'Email', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8...', color: 'bg-blue-500', link: 'mailto:...' },
  { name: 'Teléfono', icon: 'M3 5a2 2 0 012-2h3.28...', color: 'bg-[#F2C46D]', link: 'tel:+' }
]
</script>

<template>
  <section class="relative py-20 bg-[#1D5948] overflow-hidden">
    
    <div class="absolute inset-0 opacity-10" 
         style="background-image: radial-gradient(#F2C46D 1.5px, transparent 1.5px); background-size: 20px 20px;"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="font-amatic text-6xl text-white mb-2">Conecta con <span class="text-[#F2C46D]">Nosotros</span></h2>
        <div class="h-1 w-20 bg-[#F2C46D] mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <a href="#" class="group relative bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] flex flex-col items-center transition-all duration-500 hover:-translate-y-4 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <div class="absolute top-4 right-6 text-[10px] font-black uppercase tracking-[0.3em] text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">En Línea</div>
          <div class="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82l.446.265c1.504.895 3.229 1.367 4.999 1.368 5.404 0 9.803-4.398 9.805-9.804.001-2.621-1.021-5.084-2.876-6.94s-4.32-2.877-6.94-2.877c-5.405 0-9.804 4.399-9.806 9.805-.001 1.83.479 3.618 1.39 5.162l.292.492-1.103 4.03 4.127-1.082z"/></svg>
          </div>
          <span class="font-sans font-black text-white uppercase tracking-widest text-sm mb-2">WhatsApp</span>
          <p class="text-[10px] text-gray-400 font-sans tracking-widest text-center">Chat directo en segundos</p>
        </a>

        <a href="#" class="group relative bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] flex flex-col items-center transition-all duration-500 hover:-translate-y-4 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <div class="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </div>
          <span class="font-sans font-black text-white uppercase tracking-widest text-sm mb-2">Instagram</span>
          <p class="text-[10px] text-gray-400 font-sans tracking-widest text-center">Nuestra vida diaria</p>
        </a>

        <a href="#" class="group relative bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] flex flex-col items-center transition-all duration-500 hover:-translate-y-4 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <div class="w-16 h-16 bg-white/10 text-[#F2C46D] rounded-full flex items-center justify-center mb-6 border-2 border-[#F2C46D]/20 group-hover:bg-[#F2C46D] group-hover:text-[#1D5948] transition-all">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <span class="font-sans font-black text-white uppercase tracking-widest text-sm mb-2">Email</span>
          <p class="text-[10px] text-gray-400 font-sans tracking-widest text-center">Cotizaciones formales</p>
        </a>

        <a href="#" class="group relative bg-[#F2C46D] p-10 rounded-[3rem] flex flex-col items-center transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(242,196,109,0.3)]">
          <div class="w-16 h-16 bg-[#1D5948] text-[#F2C46D] rounded-full flex items-center justify-center mb-6 shadow-md">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          </div>
          <span class="font-sans font-black text-[#1D5948] uppercase tracking-widest text-sm mb-2">Llamar Ahora</span>
          <p class="text-[10px] text-[#1D5948]/60 font-sans tracking-widest text-center font-bold">Reserva tu mesa</p>
        </a>

      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@900&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }
</style>