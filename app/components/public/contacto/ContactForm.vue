<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-16 items-start">

        <div class="w-full lg:w-1/3">
          <h2 class="text-4xl font-serif font-bold text-gray-900 mb-6">Escríbenos</h2>
          <p class="text-gray-500 leading-relaxed mb-8">
            ¿Tienes alguna duda sobre nuestro menú, alergias alimentarias o quieres planear una cena especial? Nuestro
            equipo te responderá en menos de 2 horas.
          </p>
          <div class="p-6 bg-stone-50 rounded-3xl border border-stone-100">
            <h4 class="font-bold text-gray-900 mb-2 italic">Dato curioso</h4>
            <p class="text-sm text-gray-600">En Restaurante Yaneth, todos nuestros postres son artesanales y rotan cada
              semana.</p>
          </div>
        </div>

        <div class="w-full lg:w-2/3 bg-white p-2 md:p-10 rounded-[2.5rem] border border-stone-100 shadow-sm">
          <form @submit.prevent class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col gap-2">
              <label class="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Nombre Completo</label>
              <input type="text" placeholder="Ej: Juan Pérez"
                class="w-full px-6 py-4 bg-stone-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Correo Electrónico</label>
              <input type="email" placeholder="juan@correo.com"
                class="w-full px-6 py-4 bg-stone-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none" />
            </div>
            <div class="flex flex-col gap-2 md:col-span-2">
              <label class="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Asunto</label>
              <select
                class="w-full px-6 py-4 bg-stone-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none appearance-none">
                <option>Reserva General</option>
                <option>Evento Empresarial / Cumpleaños</option>
                <option>Sugerencia o Comentario</option>
                <option>Otros</option>
              </select>
            </div>
            <div class="flex flex-col gap-2 md:col-span-2">
              <label class="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Tu mensaje</label>
              <textarea rows="5" placeholder="Cuéntanos más..."
                class="w-full px-6 py-4 bg-stone-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none resize-none"></textarea>
            </div>
            <div class="md:col-span-2 pt-4">
              <button
                class="w-full md:w-auto px-12 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-green-600 transition-all duration-300 shadow-xl shadow-gray-200">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>