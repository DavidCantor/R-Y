<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Nuestro Menú', path: '/public/menu' },
  { name: 'Visítanos', path: '/public/ubicacion-horarios' },
  { name: 'Contacto', path: '/public/contacto' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav :class="[
    'fixed w-full top-0 z-100 transition-all duration-500',
    isScrolled
      ? 'bg-[#1D5948] shadow-2xl py-1'
      : 'bg-transparent py-4 md:py-6'
  ]">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex justify-between items-center h-20 md:h-24">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center group">
            <div :class="[
              'transition-all duration-500 flex items-center justify-center',
              isScrolled ? 'w-16 h-16 md:w-20 md:h-20' : 'w-20 h-20 md:w-32 md:h-32'
            ]">
              <NuxtImg src="/images/logo-experienzzia.webp" alt="Logo Experienzzia Gourmet"
                class="w-full h-full object-contain drop-shadow-md" />
            </div>

            <div class="ml-2 flex flex-col justify-center">
              <span :class="[
                'font-amatic font-bold leading-none tracking-wide transition-all duration-500',
                isScrolled ? 'text-3xl md:text-5xl text-[#F2C46D]' : 'text-4xl md:text-5xl text-[#F2C46D]'
              ]">Experienzzia</span>
              <span :class="[
                'font-sans font-bold leading-none tracking-wide transition-all duration-500',
                isScrolled ? 'text-[10px] md:text-xl text-[#F2F2F2]' : 'text-xs md:text-2xl text-[#F2F2F2]'
              ]">GOURMET</span>
            </div>
          </NuxtLink>
        </div>

        <div class="hidden md:flex items-center space-x-6 lg:space-x-10">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" :class="[
            'font-sans text-sm font-semibold transition-all relative group text-[#F2F2F2]',
            'hover:text-[#F2C46D]'
          ]" active-class="!text-[#F2C46D]">
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F2C46D] transition-all group-hover:w-full"></span>
          </NuxtLink>

          <a href="https://wa.me/57XXXXXXXXXX" target="_blank"
            class="bg-[#24735C] hover:bg-[#F2C46D] text-[#F2F2F2] hover:text-[#1D5948] px-6 lg:px-8 py-3 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full shadow-lg border border-[#F2C46D]/30">
            Pide a Domicilio
          </a>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-[#F2C46D] transition-colors duration-500 relative z-110"
            aria-label="Menu">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 8h16M4 16h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <Transition name="slide">
      <div v-if="isMenuOpen" class="fixed inset-0 z-105 bg-[#1D5948] flex flex-col justify-center items-center">
        <NuxtImg src="/images/logo-experienzzia.webp" class="w-32 h-32 md:w-48 md:h-48 mb-6 drop-shadow-2xl" alt="Logo" />

        <div class="px-6 space-y-4 text-center relative z-10">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" @click="closeMenu"
            class="block text-4xl md:text-6xl font-amatic font-bold text-[#F2F2F2] hover:text-[#F2C46D] transition-colors">
            {{ link.name }}
          </NuxtLink>

          <div class="pt-8">
            <a href="https://wa.me/57XXXXXXXXXX"
              class="inline-block px-10 py-4 bg-[#F2C46D] text-[#1D5948] font-bold uppercase tracking-widest text-xs rounded-full shadow-2xl">
              WhatsApp Directo
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Inter:wght@400;600;700&display=swap');

.font-amatic {
  font-family: 'Amatic SC', cursive;
}

.font-sans {
  font-family: 'Inter', sans-serif;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>