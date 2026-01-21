<script setup>
import { ref, computed } from 'vue'

// Categorías adaptadas al negocio real
const categories = ['Todos', 'Desayunos', 'Brunch', 'Onces', 'Bebidas']
const activeCategory = ref('Todos')

const dishes = [
  // --- DESAYUNOS ---
  {
    id: 1,
    name: 'Desayuno Tradicional',
    description: 'Huevos al gusto acompañados de arepa con queso, porción de fruta fresca y pan artesanal de la casa.',
    price: '14.500',
    category: 'Desayunos',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=600',
    tags: ['Más Pedido', 'Familiar']
  },
  {
    id: 2,
    name: 'Calentado Gourmet',
    description: 'La receta de la abuela con arroz, frijol, carne desmechada, huevo frito y maduro. Un clásico de Suba.',
    price: '18.900',
    category: 'Desayunos',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600',
    tags: ['Tradicional', 'Poderoso']
  },

  // --- BRUNCH ---
  {
    id: 3,
    name: 'Tostadas con Aguacate',
    description: 'Pan artesanal tostado con crema de aguacate fresco, huevo pochado y un toque de especias naturales.',
    price: '16.000',
    category: 'Brunch',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600',
    tags: ['Saludable', 'Recomendado']
  },

  // --- ONCES / MERIENDAS ---
  {
    id: 4,
    name: 'Chocolate con Queso y Pan',
    description: 'Chocolate santafereño espumoso servido con queso campesino fresco y pan de bono recién horneado.',
    price: '12.000',
    category: 'Onces',
    image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=600',
    tags: ['Clásico', 'Tarde']
  },
  {
    id: 5,
    name: 'Cesta de Amasijos',
    description: 'Variedad de almojábanas, pan de yuca y buñuelos calientes, ideales para compartir en familia.',
    price: '10.500',
    category: 'Onces',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600',
    tags: ['Para Compartir']
  },

  // --- BEBIDAS ---
  {
    id: 6,
    name: 'Jugos Naturales',
    description: 'Fruta real seleccionada del día: Lulo, Mora, Guanábana o Maracuyá. Preparados en agua o leche.',
    price: '7.500',
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1541658016709-827b58629d77?q=80&w=600',
    tags: ['Fresco', 'Natural']
  },
  {
    id: 7,
    name: 'Café de la Casa',
    description: 'Café colombiano de origen premium, preparado a tu gusto: Tinto, Pintado o Cappuccino.',
    price: '5.000',
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600',
    tags: ['Esencial']
  }
]

const filteredDishes = computed(() => {
  if (activeCategory.value === 'Todos') return dishes
  return dishes.filter(dish => dish.category === activeCategory.value)
})
</script>

<template>
  <section class="py-16 bg-white" id="menu-grid">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button v-for="cat in categories" :key="cat" @click="activeCategory = cat" :class="[
          'px-6 py-2 rounded-full font-bold transition-all duration-300 text-xs tracking-wide border',
          activeCategory === cat
            ? 'bg-green-600 border-green-600 text-white shadow-md'
            : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-green-300 hover:text-green-600'
        ]">
          {{ cat }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <transition-group name="list">
          <div v-for="dish in filteredDishes" :key="dish.id"
            class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            
            <div class="relative h-56 overflow-hidden bg-gray-100">
              <img :src="dish.image" :alt="dish.name"
                class="w-full h-full object-cover" />
              <div class="absolute top-4 right-4 bg-yellow-400 text-black font-bold px-3 py-1 rounded-lg shadow-sm text-sm">
                ${{ dish.price }}
              </div>
            </div>

            <div class="p-6">
              <div class="flex gap-2 mb-3">
                <span v-for="tag in dish.tags" :key="tag"
                  class="text-[10px] uppercase font-bold px-2 py-0.5 bg-green-50 text-green-700 rounded">
                  {{ tag }}
                </span>
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-2 italic">
                {{ dish.name }}
              </h3>

              <p class="text-gray-600 text-sm leading-snug mb-6 h-10 overflow-hidden line-clamp-2">
                {{ dish.description }}
              </p>

              <div class="pt-4 border-t border-gray-50 flex items-center justify-between">
                <span class="text-xs text-gray-400 font-medium italic">Sabor tradicional</span>
                <a href="https://wa.me/TUNUMERO" class="flex items-center space-x-1 text-green-600 font-bold text-sm hover:underline">
                  <span>Pedir</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list-enter-active, .list-leave-active { transition: all 0.4s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: scale(0.95); }
.line-clamp-2 { display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; }
</style>