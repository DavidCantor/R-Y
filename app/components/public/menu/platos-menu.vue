<script setup>
import { ref, computed, onMounted } from 'vue'

const isVisible = ref(false)
const sectionRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) isVisible.value = true
  }, { threshold: 0.1 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})

const categories = ['Todos', 'Desayunos', 'Brunch', 'Onces', 'Bebidas']
const activeCategory = ref('Todos')

const dishes = [
  { id: 1, name: 'Desayuno Tradicional', description: 'Huevos al gusto, arepa con queso, fruta fresca y pan artesanal.', price: '14.500', category: 'Desayunos', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=600', tags: ['Más Pedido'] },
  { id: 2, name: 'Calentado Gourmet', description: 'Arroz, frijol, carne desmechada, huevo frito y maduro. Un clásico.', price: '18.900', category: 'Desayunos', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600', tags: ['Tradicional'] },
  { id: 3, name: 'Tostadas Aguacate', description: 'Pan artesanal, crema de aguacate fresco y huevo pochado.', price: '16.000', category: 'Brunch', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600', tags: ['Saludable'] },
  { id: 4, name: 'Chocolate con Queso', description: 'Chocolate espumoso, queso campesino y pan de bono caliente.', price: '12.000', category: 'Onces', image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=600', tags: ['Clásico'] },
  { id: 5, name: 'Cesta de Amasijos', description: 'Almojábanas, pan de yuca y buñuelos recién horneados.', price: '10.500', category: 'Onces', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600', tags: ['Familiar'] },
  { id: 6, name: 'Jugos Naturales', description: 'Fruta real: Lulo, Mora o Maracuyá. Agua o leche.', price: '7.500', category: 'Bebidas', image: 'https://images.unsplash.com/photo-1541658016709-827b58629d77?q=80&w=600', tags: ['Fresco'] }
]

const filteredDishes = computed(() => {
  if (activeCategory.value === 'Todos') return dishes
  return dishes.filter(dish => dish.category === activeCategory.value)
})
</script>

<template>
  <section ref="sectionRef" class="relative py-24 bg-[#1D5948] overflow-hidden min-h-screen">
    
    <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-overlay">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="menuNoise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#menuNoise)" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="text-center mb-16">
        <h2 class="font-amatic text-[#F2C46D] text-4xl font-bold mb-4 tracking-widest">Nuestra Carta</h2>
        <div class="flex flex-wrap justify-center gap-3">
          <button v-for="cat in categories" :key="cat" @click="activeCategory = cat"
            :class="[
              'px-8 py-2 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border-2',
              activeCategory === cat 
              ? 'bg-[#F2C46D] border-[#F2C46D] text-[#1D5948] font-black shadow-[0_0_20px_rgba(242,196,109,0.3)]' 
              : 'border-[#F2C46D]/30 text-[#F2F2F2] hover:border-[#F2C46D]'
            ]">
            {{ cat }}
          </button>
        </div>
      </div>

      <div class="relative min-h-[600px]">
        <transition-group 
          name="list" 
          tag="div" 
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <div v-for="dish in filteredDishes" :key="dish.id"
            class="group relative bg-[#F2F2F2] rounded-br-[4rem] rounded-tl-[4rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
            
            <div class="relative h-64 overflow-hidden">
              <img :src="dish.image" :alt="dish.name"
                class="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#1D5948]/60 to-transparent"></div>
              
              <div class="absolute bottom-4 right-6 bg-[#F2C46D] text-[#1D5948] w-20 h-20 rounded-full flex items-center justify-center flex-col shadow-xl border-4 border-[#1D5948]">
                <span class="text-[10px] font-bold leading-none">SOLO</span>
                <span class="text-lg font-black leading-none">${{ dish.price.split('.')[0] }}k</span>
              </div>
            </div>

            <div class="p-8">
              <div class="flex gap-2 mb-4">
                <span v-for="tag in dish.tags" :key="tag"
                  class="text-[9px] font-sans font-bold px-2 py-1 bg-[#1D5948] text-[#F2C46D] rounded-md tracking-tighter">
                  {{ tag }}
                </span>
              </div>

              <h3 class="font-amatic text-4xl text-[#1D5948] mb-3 leading-none">
                {{ dish.name }}
              </h3>

              <p class="font-sans text-gray-600 text-sm leading-relaxed mb-8 h-12 italic">
                "{{ dish.description }}"
              </p>

              <div class="flex items-center justify-between pt-4 border-t border-[#1D5948]/10">
                <span class="font-amatic text-xl text-[#24735C]">Experienzzia Gourmet</span>
                <a href="https://wa.me/TUNUMERO" class="bg-[#1D5948] text-[#F2C46D] p-3 rounded-full hover:bg-[#F2C46D] hover:text-[#1D5948] transition-colors shadow-lg">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Inter:wght@400;700;900&display=swap');
.font-amatic { font-family: 'Amatic SC', cursive; }
.font-sans { font-family: 'Inter', sans-serif; }

/* --- Animación de filtrado optimizada --- */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(30px);
}

/* Evita que los elementos "salten" al ser eliminados del flujo */
.list-leave-active {
  position: absolute;
  width: 100%;
}

/* Ajuste del ancho de salida según el responsive para mantener el grid */
@media (min-width: 768px) {
  .list-leave-active { width: calc(50% - 20px); }
}
@media (min-width: 1024px) {
  .list-leave-active { width: calc(33.33% - 27px); }
}
</style>