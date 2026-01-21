<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    q: "¿Tienen parqueadero?",
    a: "Sí, contamos con parqueadero propio y gratuito frente al local para la comodidad de nuestros clientes.",
    open: true
  },
  {
    q: "¿Reciben mascotas?",
    a: "¡Sí! Somos Pet-Friendly. Tus mascotas son bienvenidas en nuestra zona exterior.",
    open: false
  },
  {
    q: "¿Cómo puedo pedir domicilios?",
    a: "Puedes escribirnos directamente a nuestro WhatsApp o llamarnos. Atendemos pedidos en todo el sector de Suba.",
    open: false
  }
])
</script>

<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-2xl mx-auto px-4">
      <h3 class="text-2xl font-bold text-center mb-8 text-gray-900">Preguntas Frecuentes</h3>

      <div class="space-y-3">
        <div v-for="(faq, i) in faqs" :key="i" class="bg-white border border-gray-200 rounded-lg">
          <button 
            @click="faq.open = !faq.open" 
            class="w-full flex items-center justify-between p-4 text-left font-bold text-gray-800"
          >
            <span>{{ faq.q }}</span>
            <span class="text-green-600 text-xl">{{ faq.open ? '−' : '+' }}</span>
          </button>

          <div v-if="faq.open" class="px-4 pb-4 text-gray-600 text-sm border-t border-gray-50 pt-3">
            {{ faq.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>