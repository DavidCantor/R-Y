<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const sectionRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) isVisible.value = true
  }, { threshold: 0.1 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="relative py-28 bg-[#1D5948] overflow-hidden border-y-4 border-[#F2C46D]">
    
    <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.25] mix-blend-overlay">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="heavyGrain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="5" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#heavyGrain)" />
      </svg>
    </div>



    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,0,0,0.4)_100%)] z-0"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-20 items-center">

        <div :class="['w-full lg:w-1/2 transition-all duration-1000', isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12']">
          <div class="inline-block border-2 border-[#F2C46D] text-[#F2C46D] px-6 py-2 rounded-full font-sans font-black text-[10px] uppercase tracking-[0.4em] mb-8">
            Zona de Contacto
          </div>
          
          <h2 class="font-amatic text-8xl md:text-[10rem] text-white leading-[0.75] mb-8">
            Dinos qué <br><span class="text-[#F2C46D]">Necesitas</span>
          </h2>
          
          <div class="flex items-start gap-4 mb-8">
            <div class="w-1 h-20 bg-[#F2C46D]"></div>
            <p class="font-sans text-gray-200 text-xl max-w-md italic leading-tight">
              "Desde una mesa para dos hasta un banquete para toda la empresa."
            </p>
          </div>

          <div class="flex gap-10">
            <div>
              <p class="text-[#F2C46D] font-black text-xs uppercase tracking-widest mb-2">WhatsApp</p>
              <p class="text-white font-sans text-lg font-bold">+57 300 000 0000</p>
            </div>
            <div>
              <p class="text-[#F2C46D] font-black text-xs uppercase tracking-widest mb-2">Ubicación</p>
              <p class="text-white font-sans text-lg font-bold">Suba Centro, Bogotá</p>
            </div>
          </div>
        </div>

        <div :class="['w-full lg:w-1/2 transition-all duration-1000 delay-300', isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95']">
          <div class="relative group">
            <div class="absolute inset-0 bg-black/40 translate-x-6 translate-y-6 rounded-[3rem] blur-xl"></div>
            
            <form @submit.prevent class="relative bg-[#FDFCF9] p-8 md:p-14 rounded-[3rem] border-b-[12px] border-[#E5E2D9]">
              
              <div class="grid grid-cols-1 gap-8">
                <div v-for="(label, placeholder, idx) in { 'nombre': 'Tu nombre completo', 'correo': 'tu@email.com' }" :key="idx" class="relative">
                  <input type="text" :placeholder="label" 
                    class="w-full bg-transparent border-b-4 border-gray-100 focus:border-[#F2C46D] py-4 outline-none transition-all font-sans text-[#1D5948] font-bold placeholder:text-gray-300 placeholder:font-normal uppercase text-xs tracking-widest" />
                </div>

                <div class="relative">
                  <select class="w-full bg-transparent border-b-4 border-gray-100 focus:border-[#F2C46D] py-4 outline-none transition-all font-sans text-[#1D5948] font-bold uppercase text-xs tracking-widest appearance-none cursor-pointer">
                    <option>Reserva de Mesa</option>
                    <option>Evento Social</option>
                    <option>Sugerencias</option>
                  </select>
                </div>

                <div class="relative">
                  <textarea rows="3" placeholder="Tu mensaje..."
                    class="w-full bg-transparent border-b-4 border-gray-100 focus:border-[#F2C46D] py-4 outline-none transition-all font-sans text-[#1D5948] font-bold placeholder:text-gray-300 placeholder:font-normal uppercase text-xs tracking-widest resize-none"></textarea>
                </div>

                <button class="w-full py-6 bg-[#1D5948] text-[#F2C46D] font-sans font-black uppercase text-[10px] tracking-[0.4em] rounded-2xl hover:bg-[#F2C46D] hover:text-[#1D5948] transition-all transform hover:-translate-y-1 shadow-2xl">
                  Enviar Mensaje Ahora
                </button>
              </div>

              <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#E5E2D9] rounded-full flex items-center justify-center border-b-4 border-black/5 text-[10px] font-black text-gray-400">
                INFO
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@400;700;900&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }

/* Para que la textura de arpillera se vea nítida */
section {
  image-rendering: pixelated;
}
</style>