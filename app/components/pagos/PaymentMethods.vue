<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const sectionRef = ref(null)
const selectedMethod = ref(null)
const copiedField = ref(null)

const paymentMethods = [
  { 
    name: 'Nequi', 
    logo: '/images/pagos/nequi.svg', 
    account: '300 485 5722', 
    breb: 'experienzzia@nequi',
    qr: 'https://placehold.co/400x400/ffffff/1d5948?text=QR+NEQUI' 
  },
  { 
    name: 'Daviplata', 
    logo: '/images/pagos/daviplata.svg', 
    account: '300 485 5722', 
    breb: 'experienzzia@daviplata',
    qr: 'https://placehold.co/400x400/ffffff/1d5948?text=QR+DAVIPLATA' 
  },
  { 
    name: 'Bancolombia', 
    logo: '/images/pagos/bancolombia.svg', 
    account: '000-000000-00', 
    breb: 'experienzzia@bancolombia',
    qr: 'https://placehold.co/400x400/ffffff/1d5948?text=QR+BANCOLOMBIA' 
  }
]

// Abrir Modal
const openModal = (method) => {
  console.log("Abriendo:", method.name); // Para debug en consola
  selectedMethod.value = method;
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
  }
}

// Cerrar Modal
const closeModal = () => {
  selectedMethod.value = null;
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'auto';
  }
  copiedField.value = null;
}

const copyToClipboard = async (text, field) => {
  try {
    await navigator.clipboard.writeText(text);
    copiedField.value = field;
    setTimeout(() => { copiedField.value = null }, 2000);
  } catch (err) {
    console.error('Error al copiar', err);
  }
}

onMounted(() => {
  // Observer para la animación de entrada
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
      observer.disconnect();
    }
  }, { threshold: 0.1 });
  
  if (sectionRef.value) observer.observe(sectionRef.value);

  // Tecla Escape
  const handleEscape = (e) => { if (e.key === 'Escape') closeModal() };
  window.addEventListener('keydown', handleEscape);
  onUnmounted(() => window.removeEventListener('keydown', handleEscape));
})
</script>

<template>
  <div class="relative">
    <section ref="sectionRef" id="pagos" class="w-full py-16 md:py-24 px-6 bg-[#1D5948] overflow-hidden min-h-150">
      <div :class="['max-w-7xl mx-auto text-center transition-all duration-1000 transform', 
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
        
        <h2 class="font-amatic text-6xl md:text-8xl text-[#F2F2F2] mb-16 italic">
          ¿Cómo deseas <span class="text-[#F2C46D]">Pagar?</span>
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
<button 
  v-for="(method, index) in paymentMethods" 
  :key="method.name"
  type="button"
  @click="openModal(method)"
  class="group relative aspect-square w-full max-w-[320px] bg-[#F2F2F2] rounded-[3rem] shadow-2xl transition-all duration-500 hover:-translate-y-4 active:scale-95 flex items-center justify-center p-4 cursor-pointer overflow-hidden"
>
  <NuxtImg 
    :src="method.logo" 
    :alt="method.name"
    class="w-[85%] h-[85%] object-contain transition-all duration-700 z-10 group-hover:scale-110" 
  />
  
  <div class="absolute inset-0 bg-white/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col items-center justify-center">
    <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center gap-2">
      <span class="text-[#1D5948] font-black text-xs tracking-[0.3em] uppercase bg-[#F2C46D] px-4 py-2 rounded-full shadow-lg">
        Pagar con {{ method.name }}
      </span>
    </div>
  </div>

  <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-[#1D5948]/5 rounded-full blur-3xl group-hover:bg-[#F2C46D]/20 transition-colors"></div>
</button>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="selectedMethod" 
          class="fixed inset-0 z-999 flex items-center justify-center p-4 bg-[#1D5948]/95 backdrop-blur-md"
          @click.self="closeModal">
          
          <div class="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-pop relative">
            
            <button @click="closeModal" class="absolute top-6 right-6 text-3xl text-gray-400 hover:text-red-500 transition-colors z-1001">✕</button>

            <div class="p-8 md:p-16">
              <div class="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                
                <div class="w-full lg:w-1/2 flex flex-col items-center">
                  <div class="bg-[#F9F9F9] p-6 rounded-4xl border-2 border-dashed border-[#F2C46D] w-full max-w-70">
                    <NuxtImg :src="selectedMethod.qr" class="w-full aspect-square object-contain rounded-xl" alt="QR" />
                  </div>
                  <p class="font-amatic text-3xl text-[#1D5948] mt-6">Escanea desde {{ selectedMethod.name }}</p>
                </div>

                <div class="w-full lg:w-1/2 flex flex-col space-y-6">
                  <NuxtImg :src="selectedMethod.logo" class="h-10 object-contain self-start" />
                  
                  <div class="space-y-4">
                    <div @click="copyToClipboard(selectedMethod.account, 'acc')" class="cursor-pointer group">
                      <label class="text-[10px] font-black text-gray-400 tracking-widest uppercase block mb-1 ml-2">Cuenta Destino</label>
                      <div class="bg-gray-50 p-4 rounded-2xl flex justify-between items-center group-hover:border-[#F2C46D] border-2 border-transparent transition-all">
                        <span class="text-sm font-black text-[#1D5948]">{{ selectedMethod.account }}</span>
                        <span class="text-[10px] font-bold px-3 py-1 rounded-full" :class="copiedField === 'acc' ? 'bg-green-100 text-green-600' : 'bg-[#F2C46D]/20 text-[#1D5948]'">
                          {{ copiedField === 'acc' ? 'COPIADO' : 'COPIAR' }}
                        </span>
                      </div>
                    </div>

                    <div @click="copyToClipboard(selectedMethod.breb, 'breb')" class="cursor-pointer group">
                      <label class="text-[10px] font-black text-[#24735C] tracking-widest uppercase block mb-1 ml-2">Llave Bre-B</label>
                      <div class="bg-[#24735C]/5 p-4 rounded-2xl flex justify-between items-center group-hover:border-[#24735C] border-2 border-transparent transition-all">
                        <span class="text-sm font-bold text-[#24735C] truncate mr-2">{{ selectedMethod.breb }}</span>
                        <span class="text-[10px] font-bold px-3 py-1 rounded-full shrink-0" :class="copiedField === 'breb' ? 'bg-green-100 text-green-600' : 'bg-[#24735C]/20 text-[#24735C]'">
                          {{ copiedField === 'breb' ? 'COPIADO' : 'COPIAR' }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col sm:flex-row gap-4 pt-4">
                    <button @click="closeModal" class="flex-1 py-4 bg-[#1D5948] text-[#F2C46D] rounded-xl font-bold uppercase text-[10px] tracking-widest active:scale-95 transition-all">
                      Ya pagué
                    </button>
                    <a :href="`https://wa.me/57XXXX?text=Hola! Ya realicé el pago por ${selectedMethod.name}`" target="_blank" class="flex-1 py-4 border-2 border-[#1D5948] text-[#1D5948] rounded-xl font-bold uppercase text-[10px] tracking-widest text-center">
                      Soporte WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.font-amatic { font-family: 'Amatic SC', cursive; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
@keyframes pop {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-pop { animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
</style>