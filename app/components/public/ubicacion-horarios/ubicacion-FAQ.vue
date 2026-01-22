<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const sectionRef = ref(null)

const faqs = ref([
  { q: "¿Tienen parqueadero?", a: "¡Claro que sí! Contamos con espacio vigilado y gratuito justo frente a nuestro local para que disfrutes sin preocupaciones.", open: true },
  { q: "¿Son Pet-Friendly?", a: "¡Totalmente! Amamos a los peluditos. Tus mascotas son bienvenidas en nuestra zona de terraza, donde siempre tendremos agua fresca para ellos.", open: false },
  { q: "¿Tienen opciones vegetarianas?", a: "Sí, contamos con bowls de frutas frescas, opciones de huevos al gusto y alternativas sin gluten. Pregunta por nuestro menú saludable del día.", open: false },
  { q: "¿Aceptan reservas para eventos?", a: "¡Nos encanta celebrar contigo! Puedes reservar mesas para grupos o incluso el local completo. Escríbenos al WhatsApp con 2 días de antelación.", open: false },
  { q: "¿Tienen Wi-Fi para trabajar?", a: "¡Sí! Tenemos conexión de alta velocidad y un ambiente tranquilo, ideal para tus reuniones o hacer 'coworking'.", open: false }
])

// Funciones para la animación ultra fluida
const beforeEnter = (el) => { el.style.height = '0' }
const enter = (el) => { el.style.height = el.scrollHeight + 'px' }
const beforeLeave = (el) => { el.style.height = el.scrollHeight + 'px' }
const leave = (el) => { el.style.height = '0' }

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) isVisible.value = true
  }, { threshold: 0.1 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="relative py-24 bg-[#1D5948] overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-overlay">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="faqGrain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#faqGrain)" />
      </svg>
    </div>

    <div class="max-w-3xl mx-auto px-6 relative z-10">
      
      <div :class="['text-center mb-16 transition-all duration-1000', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
        <h3 class="font-amatic text-7xl md:text-8xl text-[#F2C46D] leading-none mb-4">Preguntas <span class="text-white italic">Frecuentes</span></h3>
      </div>

      <div class="space-y-4">
        <div v-for="(faq, i) in faqs" :key="i" 
          :class="['overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition-all duration-700', 
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <button 
            @click="faq.open = !faq.open" 
            class="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
          >
            <span :class="['font-sans font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-colors duration-500', 
              faq.open ? 'text-[#F2C46D]' : 'text-white']">
              {{ faq.q }}
            </span>
            
            <div :class="['w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0', 
              faq.open ? 'bg-[#F2C46D] border-[#F2C46D] rotate-180' : 'bg-transparent border-white/20']">
              <svg class="w-4 h-4 transition-colors" :class="faq.open ? 'text-[#1D5948]' : 'text-white'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" :d="faq.open ? 'M20 12H4' : 'M12 4v16m8-8H4'" />
              </svg>
            </div>
          </button>

          <transition 
            @before-enter="beforeEnter" 
            @enter="enter" 
            @before-leave="beforeLeave" 
            @leave="leave"
          >
            <div v-if="faq.open" class="faq-content overflow-hidden transition-[height] duration-200 ease-in-out">
              <div class="px-8 pb-8 pt-0">
                <p class="font-sans text-gray-300 text-sm md:text-base leading-relaxed italic border-l-2 border-[#F2C46D] pl-6">
                  {{ faq.a }}
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@400;700;900&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }

/* Esta clase es la clave para la suavidad */
.faq-content {
  will-change: height;
}

/* Reset de estilos para evitar saltos de scroll */
button {
  -webkit-tap-highlight-color: transparent;
}
</style>