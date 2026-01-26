<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const contactSection = ref(null)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.1 })

  if (contactSection.value) observer.observe(contactSection.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const infoCards = [
  {
    title: 'Encuéntranos',
    desc: 'Suba, Bogotá <br /> Calle Falsa 123',
    linkText: 'Ver en Google Maps',
    link: '#',
    iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    color: '#24735C' // Cambiado para mejor contraste sobre blanco
  },
  {
    title: 'Horario',
    desc: '<strong>Lun a Sáb:</strong> 7:00 - 19:00 <br /> <strong>Dom:</strong> 8:00 - 14:00',
    linkText: "Consultar",
    link: 'https://wa.me/573004855722',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    color: '#1D5948'
  },
  {
    title: 'WhatsApp',
    desc: 'Te atenderemos personalmente para tus pedidos.',
    linkText: 'Pedir Domicilio',
    link: 'https://wa.me/573004855722',
    iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    color: '#24735C',
    isCTA: true
  },
  {
    title: 'Pagos',
    desc: 'Efectivo, Nequi, Daviplata <br /> y tarjetas de crédito.',
    linkText: 'Ver métodos',
    link: '/public/pagos',
    iconPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    color: '#1D5948'
  }
]
</script>

<template>
  <section ref="contactSection" class="relative py-20 bg-[#F2C46D] overflow-hidden">
    <div class="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply">
      <svg width="100%" height="100%"><filter id="whiteGrain"><feTurbulence baseFrequency="0.8" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#whiteGrain)"/></svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

        <article v-for="(card, index) in infoCards" :key="index"
          :class="[
            'group bg-white p-8 md:p-10 rounded-[2.5rem] border-b-4 border-black/5 flex flex-col items-center text-center transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          ]"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
               :style="{ backgroundColor: card.color + '15', color: card.color }">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="card.iconPath" />
            </svg>
          </div>

          <h3 class="font-amatic text-4xl font-bold text-[#1D5948] mb-3">{{ card.title }}</h3>
          
          <div class="grow">
            <p class="text-gray-600 font-sans text-sm leading-relaxed mb-6" v-html="card.desc"></p>
          </div>
          
          <footer v-if="card.linkText" class="w-full mt-auto">
            <NuxtLink :to="card.link" 
               :class="[
                 'inline-block font-sans font-black text-[10px] uppercase tracking-[0.2em] transition-all w-full py-3 rounded-xl',
                 card.isCTA 
                   ? 'bg-[#24735C] text-white hover:bg-[#1D5948] shadow-lg hover:shadow-[#24735C]/20 active:scale-95 animate-subtle-pulse' 
                   : 'bg-[#24735C] text-white hover:bg-[#1D5948] shadow-lg hover:shadow-[#24735C]/20 active:scale-95 animate-subtle-pulse'
               ]" >
              {{ card.linkText }}
            </NuxtLink>
          </footer>
        </article>

      </div>
    </div>
  </section>
</template>

<style scoped>
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }

@keyframes subtle-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
}

.animate-subtle-pulse {
  animation: subtle-pulse 3s infinite ease-in-out;
}

/* Evitar scroll horizontal por animaciones */
section {
  contain: paint;
}
</style>