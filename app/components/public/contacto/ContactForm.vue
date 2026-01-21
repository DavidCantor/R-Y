<template>
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-12 items-start">

        <div class="w-full lg:w-1/3">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Escríbenos</h2>
          <p class="text-gray-600 leading-relaxed mb-8">
            ¿Tienes alguna duda sobre nuestro menú o quieres planear una reunión familiar? 
            Déjanos tus datos y te responderemos lo antes posible.
          </p>
          <div class="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h4 class="font-bold text-gray-900 mb-2">Información importante</h4>
            <p class="text-sm text-gray-600">
              Para pedidos inmediatos o domicilios en Suba, te recomendamos usar el botón de WhatsApp.
            </p>
          </div>
        </div>

        <div class="w-full lg:w-2/3 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <form @submit.prevent class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div class="flex flex-col gap-1">
              <label class="text-xs font-bold uppercase text-gray-500">Nombre</label>
              <input type="text" placeholder="Tu nombre"
                class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none" />
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-xs font-bold uppercase text-gray-500">Correo</label>
              <input type="email" placeholder="correo@ejemplo.com"
                class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none" />
            </div>

            <div class="flex flex-col gap-1 md:col-span-2">
              <label class="text-xs font-bold uppercase text-gray-500">Asunto</label>
              <select class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none">
                <option>Reserva de mesa</option>
                <option>Evento o Celebración</option>
                <option>Sugerencia</option>
                <option>Otros</option>
              </select>
            </div>

            <div class="flex flex-col gap-1 md:col-span-2">
              <label class="text-xs font-bold uppercase text-gray-500">Mensaje</label>
              <textarea rows="4" placeholder="¿En qué podemos ayudarte?"
                class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none resize-none"></textarea>
            </div>

            <div class="md:col-span-2 pt-2">
              <button class="w-full md:w-auto px-10 py-3 bg-gray-900 text-white font-bold rounded-lg">
                Enviar Mensaje
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  </section>
</template>