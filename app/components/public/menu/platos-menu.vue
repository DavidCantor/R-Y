<script setup>
import { ref, computed } from 'vue'

const categories = ['Todos', 'Entradas', 'Fuertes', 'Postres', 'Bebidas']
const activeCategory = ref('Todos')

const dishes = [
  // --- ENTRADAS ---
  {
    id: 1,
    name: 'Burrata de la Casa',
    description: 'Corazón de mozzarella cremosa sobre una cama de rúcula selvática, tomates cherry confitados en balsámico y perlas de pesto de albahaca.',
    price: '16.00',
    category: 'Entradas',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9ebc4a5?q=80&w=600',
    tags: ['Vegetariano', 'Fresco']
  },
  {
    id: 2,
    name: 'Tostas de Aguacate & Huevo',
    description: 'Pan artesanal de masa madre tostado a la leña, láminas de aguacate Hass, huevo pochado en su punto y una lluvia de semillas de sésamo negro.',
    price: '12.50',
    category: 'Entradas',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600',
    tags: ['Healthy', 'Desayuno']
  },
  {
    id: 3,
    name: 'Carpaccio de Res',
    description: 'Finas láminas de solomillo premium marinadas en limón, con lascas de queso Grana Padano, alcaparras baby y aceite de oliva extra virgen.',
    price: '18.00',
    category: 'Entradas',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600',
    tags: ['Gourmet', 'Proteína']
  },

  // --- FUERTES ---
  {
    id: 4,
    name: 'Salmón a las Brasas',
    description: 'Corte de salmón salvaje sellado a la parrilla, acompañado de un puré aterciopelado de guisantes mentolados y espárragos trigueros al grill.',
    price: '24.50',
    category: 'Fuertes',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600',
    tags: ['Gluten Free', 'Recomendado']
  },
  {
    id: 5,
    name: 'Risotto de Hongos Silvestres',
    description: 'Arroz arborio cocinado lentamente en caldo de hortalizas, mezcla de setas shiitake y champiñones, finalizado con aceite de trufa blanca.',
    price: '19.50',
    category: 'Fuertes',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=600',
    tags: ['Vegetariano', 'Especial']
  },
  {
    id: 6,
    name: 'Pasta Carbonara Original',
    description: 'Espaguetis al dente con auténtico guanciale crujiente, crema de yemas de huevo orgánico y queso Pecorino Romano recién rallado.',
    price: '17.00',
    category: 'Fuertes',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600',
    tags: ['Tradicional', 'Pasta']
  },
  {
    id: 7,
    name: 'Lomo en Salsa Pimienta',
    description: 'Medallón de lomo fino (250g) bañado en reducción de pimienta negra de Madagascar, servido con papas rústicas al romero.',
    price: '28.00',
    category: 'Fuertes',
    image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?q=80&w=600',
    tags: ['Premium', 'Res']
  },

  // --- POSTRES ---
  {
    id: 8,
    name: 'Volcán de Chocolate',
    description: 'Bizcocho fundente de chocolate amargo 70%, corazón líquido caliente, servido con helado de vainilla de Papantla y frutos rojos.',
    price: '9.50',
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=600',
    tags: ['Favorito', 'Dulce']
  },
  {
    id: 9,
    name: 'Cheesecake de Maracuyá',
    description: 'Base de galleta artesanal, crema de queso suave y un coulis de fruta de la pasión que aporta un toque ácido y refrescante.',
    price: '8.50',
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600',
    tags: ['Tropical', 'Postre']
  },

  // --- BEBIDAS ---
  {
    id: 10,
    name: 'Limonada de Coco',
    description: 'Refrescante mezcla de limones recién exprimidos, crema de coco orgánica y hielo frappé, decorada con menta fresca.',
    price: '6.00',
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1541658016709-827b58629d77?q=80&w=600',
    tags: ['Sin Alcohol', 'Refrescante']
  },
  {
    id: 11,
    name: 'Gin Tonic Botánico',
    description: 'Ginebra premium infusionada con bayas de enebro, pepino, bayas rojas y agua tónica de alta gama. El equilibrio perfecto.',
    price: '14.00',
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=600',
    tags: ['Cóctel', 'Premium']
  },
  {
    id: 12,
    name: 'Vino Tinto Reserva',
    description: 'Copa de vino tinto con cuerpo, notas de roble y frutos negros, ideal para acompañar nuestras carnes a las brasas.',
    price: '11.00',
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600',
    tags: ['Bodega', 'Vino']
  }
]

const filteredDishes = computed(() => {
  if (activeCategory.value === 'Todos') return dishes
  return dishes.filter(dish => dish.category === activeCategory.value)
})
</script>

<template>
  <section class="py-20 bg-stone-50" id="menu-grid">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="flex flex-wrap justify-center gap-3 mb-16">
        <button v-for="cat in categories" :key="cat" @click="activeCategory = cat" :class="[
          'px-8 py-3 rounded-2xl font-bold transition-all duration-300 border-2 uppercase text-xs tracking-widest',
          activeCategory === cat
            ? 'bg-green-600 border-green-600 text-white shadow-xl shadow-green-200 -translate-y-1'
            : 'bg-white border-transparent text-gray-400 hover:text-green-600 hover:bg-green-50'
        ]">
          {{ cat }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <transition-group name="list">
          <div v-for="dish in filteredDishes" :key="dish.id"
            class="group bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
            <div class="relative h-72 overflow-hidden">
              <img :src="dish.image" :alt="dish.name"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>

              <div
                class="absolute bottom-4 left-6 bg-white px-4 py-2 rounded-xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500">
                <span class="text-green-600 font-black text-xl">${{ dish.price }}</span>
              </div>
            </div>

            <div class="p-8">
              <div class="flex gap-2 mb-4">
                <span v-for="tag in dish.tags" :key="tag"
                  class="text-[9px] uppercase font-bold tracking-tighter px-2 py-1 bg-green-50 text-green-700 rounded-md">
                  {{ tag }}
                </span>
              </div>

              <h3 class="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {{ dish.name }}
              </h3>

              <p class="text-gray-500 text-sm leading-relaxed mb-6 h-12 overflow-hidden line-clamp-2">
                {{ dish.description }}
              </p>

              <div class="flex items-center justify-between pt-6 border-t border-gray-100">
                <div class="flex items-center text-orange-500">
                  <svg v-for="i in 5" :key="i" class="w-3 h-3 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
                <button
                  class="flex items-center space-x-2 text-sm font-bold text-gray-900 hover:text-green-600 transition-colors">
                  <span>Pedir ahora</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* Para que la descripción no rompa el diseño (max 2 líneas) */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>