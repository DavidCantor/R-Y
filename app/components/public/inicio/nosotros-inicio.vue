<script setup>
import { ref, onMounted } from 'vue'

// Referencia para el contenedor principal
const aboutSection = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Si la sección entra en el 20% del visor, se activa la animación
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })
  }, { threshold: 0.2 })

  if (aboutSection.value) {
    observer.observe(aboutSection.value)
  }
})

const benefits = [
  'Ingredientes frescos',
  'Recetas tradicionales',
  'Atención familiar',
  'Hecho con amor'
]
</script>

<template>
  <section 
    ref="aboutSection"
    class="relative py-20 bg-[#1D5948] overflow-hidden border-y-4 border-[#F2C46D]"
  >
    <div class="absolute inset-0 pointer-events-none z-0">
      <svg class="w-full h-full opacity-[0.15] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="aboutGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#aboutGrain)" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16">

        <div 
          :class="[
            'w-full lg:w-1/2 relative transition-all duration-1200 ease-out',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          ]"
        >
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-[#F2C46D] rounded-2xl z-0 opacity-20"></div>
          
          <div class="relative z-10 rounded-3xl overflow-hidden border-4 border-[#F2F2F2]/10 shadow-2xl rotate-1 group">
            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000"
              alt="Ambiente tradicional" class="w-full h-112.5 object-cover group-hover:scale-105 transition-transform duration-700" />
            
            <div class="absolute bottom-6 left-6 bg-[#F2C46D] px-6 py-3 rounded-full shadow-xl">
              <p class="text-xs font-bold text-[#1D5948] uppercase tracking-widest font-sans">Sabor de Hogar</p>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2">
          <span 
            :class="[
              'font-amatic text-[#F2C46D] text-3xl font-bold tracking-wider block mb-2 transition-all duration-700 delay-300',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
          >
            Nuestra Historia
          </span>

          <h2 
            :class="[
              'font-amatic text-6xl md:text-7xl text-[#F2F2F2] leading-none mb-8 transition-all duration-700 delay-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
          >
            Tradición familiar <br />
            <span class="text-[#F2C46D]">en el corazón de Suba.</span>
          </h2>

          <div 
            :class="[
              'space-y-6 text-[#F2F2F2]/80 text-lg font-sans transition-all duration-700 delay-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
          >
            <p>
              En <span class="font-bold text-[#F2C46D]">Experienzzia Gourmet</span>, creemos que los mejores momentos suceden alrededor de una buena mesa.
            </p>
            <p>
              Nuestra misión es brindarte una atención cercana y cálida en nuestro local en <span class="text-[#F2C46D]">Suba</span>.
            </p>
          </div>

          <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div 
              v-for="(item, index) in benefits" 
              :key="item" 
              :class="[
                'flex items-center space-x-3 transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              ]"
              :style="{ transitionDelay: `${900 + (index * 150)}ms` }"
            >
              <div class="bg-[#24735C] p-2 rounded-full text-[#F2C46D] border border-[#F2C46D]/20">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-[#F2F2F2] font-medium font-sans italic">{{ item }}</span>
            </div>
          </div>

          <div 
            :class="[
              'mt-12 flex justify-center lg:justify-start transition-all duration-700 delay-1500',
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            ]"
          >
            <NuxtLink to="/public/contacto" class="px-10 py-4 bg-[#24735C] text-[#F2F2F2] font-sans font-bold uppercase tracking-widest text-xs rounded-full border border-[#F2C46D]/30 hover:bg-[#F2C46D] hover:text-[#1D5948] transition-all shadow-xl">
              Conoce más de nosotros
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Inter:ital,wght@0,400;0,700;1,400&display=swap');

.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }
</style>