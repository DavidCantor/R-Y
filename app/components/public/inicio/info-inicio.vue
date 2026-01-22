<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const contactSection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) isVisible.value = true
    })
  }, { threshold: 0.1 })

  if (contactSection.value) observer.observe(contactSection.value)
})

const infoCards = [
  {
    title: 'Encuéntranos',
    desc: 'Suba, Bogotá <br /> Calle Falsa 123',
    linkText: 'Ver en Google Maps',
    link: '#',
    iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    color: '#F2C46D'
  },
  {
    title: 'Horario',
    desc: '<strong>Lun a Sáb:</strong> 7:00 - 19:00 <br /> <strong>Dom:</strong> 8:00 - 14:00',
    linkText: null,
    link: null,
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    color: '#24735C'
  },
  {
    title: 'WhatsApp',
    desc: 'Te atenderemos personalmente para tus pedidos.',
    linkText: 'Pedir Domicilio',
    link: 'https://wa.me/57XXXXXXXXXX',
    iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    color: '#F2C46D'
  }
]
</script>

<template>
  <section ref="contactSection" class="relative py-16 bg-[#F2C46D] overflow-hidden">
    <div class="absolute inset-0 pointer-events-none opacity-[0.05]">
      <svg width="100%" height="100%"><filter id="whiteGrain"><feTurbulence baseFrequency="0.8" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#whiteGrain)"/></svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div v-for="(card, index) in infoCards" :key="index"
          :class="[
            'bg-white p-10 rounded-3xl border border-[#1D5948]/10 flex flex-col items-center text-center shadow-sm transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          :style="{ transitionDelay: `${index * 200}ms` }"
        >
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
               :style="{ backgroundColor: card.color + '20', color: card.color }">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="card.iconPath" />
            </svg>
          </div>

          <h3 class="font-amatic text-4xl font-bold text-[#1D5948] mb-3">{{ card.title }}</h3>
          
          <p class="text-gray-600 font-sans text-sm leading-relaxed mb-6" v-html="card.desc"></p>
          
          <template v-if="card.linkText">
            <a :href="card.link" 
               :class="[
                 'font-sans font-bold text-xs uppercase tracking-widest transition-all',
                 card.title === 'WhatsApp' 
                   ? 'bg-[#24735C] text-white px-8 py-3 rounded-full hover:bg-[#F2C46D] hover:text-[#1D5948] shadow-md' 
                   : 'text-[#24735C] hover:text-[#F2C46D] underline underline-offset-4'
               ]">
              {{ card.linkText }}
            </a>
          </template>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@400;700&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }
</style>