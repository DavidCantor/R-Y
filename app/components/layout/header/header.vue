<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Menú', path: '/public/menu' },
  { name: 'Ubicación y Horarios', path: '/public/ubicacion-horarios' },
  { name: 'Contacto', path: '/public/contacto' },
]

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">

        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <div
              class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
              <span class="text-white font-bold text-xl">L</span>
            </div>
            <span class="text-xl font-bold text-gray-800 tracking-tight">MiNegocio</span>
          </NuxtLink>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
            class="text-gray-600 hover:text-green-600 font-medium transition-colors" active-class="text-green-600">
            {{ link.name }}
          </NuxtLink>

          <a href="https://wa.me/1234567890" target="_blank"
            class="inline-flex items-center px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-md">
            <span class="mr-2">WhatsApp</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 7.454c-2.143 0-4.23-.577-6.07-1.666L3 21l.852-3.111c-1.198-2.028-1.83-4.354-1.83-6.72 0-7.16 5.822-12.982 12.982-12.982 3.478 0 6.749 1.354 9.205 3.81 2.455 2.456 3.81 5.727 3.81 9.205 0 7.161-5.822 12.982-12.982 12.982m0-24.72c-6.474 0-11.738 5.264-11.738 11.738 0 2.07.541 4.09 1.567 5.874L1 23l5.244-1.376c1.711.933 3.642 1.424 5.606 1.424 6.474 0 11.738-5.264 11.738-11.738 0-3.134-1.22-6.082-3.435-8.297-2.215-2.216-5.163-3.435-8.297-3.435" />
            </svg>
          </a>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-600 focus:outline-none p-2">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-gray-100">
      <div class="px-4 pt-4 pb-6 space-y-2">
        <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" @click="closeMenu"
          class="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md">
          {{ link.name }}
        </NuxtLink>
        <div class="pt-4 border-t border-gray-100">
          <a href="https://wa.me/1234567890"
            class="flex items-center justify-center w-full px-5 py-3 bg-green-500 text-white font-bold rounded-lg">
            Chatear por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>