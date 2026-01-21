<script setup>
// Coordenadas aproximadas de Cota, Cundinamarca
const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15904.571408356!2d-74.116667!3d4.816667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f837373f7f7f7%3A0x7f7f7f7f7f7f7f7f!2sCota%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1710000000000!5m2!1ses!2sco"
</script>

<template>
  <section class="relative w-full min-h-150 bg-stone-950 flex items-center overflow-hidden">
    
    <div class="absolute inset-0 w-full h-full grayscale-[0.8] opacity-40 hover:grayscale-0 transition-all duration-1000">
      <iframe 
        :src="mapUrl"
        class="w-full h-full border-0"
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="absolute inset-0 bg-linear-to-r from-stone-950 via-stone-950/40 to-transparent pointer-events-none"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
      <div class="max-w-xl">
        <span class="text-green-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Encuéntranos</span>
        <h2 class="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
          El sabor de <br/> 
          <span class="text-stone-400 italic font-light">Cota te espera</span>
        </h2>

        <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
          <div class="space-y-8">
            
            <div class="flex items-start gap-5">
              <div class="w-12 h-12 rounded-2xl bg-green-600/20 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h4 class="text-white font-bold text-lg mb-1">Nuestra Ubicación</h4>
                <p class="text-stone-400 text-sm leading-relaxed">Variante Cota-Chía, Km 2.<br/> Cota, Cundinamarca, Colombia.</p>
              </div>
            </div>

            <div class="flex items-start gap-5">
              <div class="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4 class="text-white font-bold text-lg mb-1">Horario de Atención</h4>
                <div class="grid grid-cols-2 gap-x-4 text-stone-400 text-sm">
                  <span>Lun - Vie:</span> <span class="text-white">12:00 - 21:00</span>
                  <span>Sáb - Dom:</span> <span class="text-white">11:00 - 22:00</span>
                </div>
              </div>
            </div>

            <div class="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://maps.app.goo.gl/..." 
                target="_blank"
                class="flex-1 text-center px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Cómo llegar
              </a>
              <a 
                href="tel:+5730000000"
                class="flex-1 text-center px-8 py-4 border-2 border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all"
              >
                Llamar ahora
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 right-0 w-1/3 h-1/2 bg-green-600/10 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>
  </section>
</template>

<style scoped>
/* Transición suave para el mapa */
iframe {
  filter: contrast(1.1) brightness(0.8) saturate(0);
  transition: all 0.8s ease-in-out;
}

section:hover iframe {
  filter: contrast(1) brightness(1) saturate(1);
}

/* Animación de entrada para la tarjeta */
.backdrop-blur-xl {
  animation: slideIn 1s ease-out forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>