<script setup>
import { ref } from 'vue'

const faqs = ref([
  { 
    q: "¿Tienen parqueadero privado?", 
    a: "Sí, contamos con un amplio parqueadero privado y vigilado totalmente gratuito para nuestros clientes.",
    open: true 
  },
  { 
    q: "¿Son Pet-Friendly?", 
    a: "¡Claro que sí! Tus mascotas son bienvenidas en nuestra zona de terraza campestre.",
    open: false 
  },
  { 
    q: "¿Necesito reserva previa?", 
    a: "Los fines de semana recomendamos reservar con 24h de antelación debido a la alta demanda.",
    open: false 
  }
])
</script>

<template>
  <section class="py-20 bg-stone-50">
    <div class="max-w-3xl mx-auto px-4">
      <h3 class="text-3xl font-serif font-bold text-center mb-12">Detalles de tu visita</h3>
      
      <div class="space-y-4">
        <div 
          v-for="(faq, i) in faqs" 
          :key="i" 
          class="bg-white rounded-3xl border border-stone-200 overflow-hidden transition-all duration-300"
        >
          <button 
            @click="faq.open = !faq.open"
            class="w-full flex items-center justify-between p-6 text-left"
          >
            <span class="font-bold text-gray-900">{{ faq.q }}</span>
            <svg 
              class="w-5 h-5 text-green-600 transition-transform duration-300" 
              :class="faq.open ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          
          <div 
            v-show="faq.open" 
            class="px-6 pb-6 text-gray-500 text-sm leading-relaxed animate-fade-in"
          >
            {{ faq.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fade-in 0.3s ease-out; }
</style>