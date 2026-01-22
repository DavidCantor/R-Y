// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Configuración del sitio base (Requerido para el sitemap)
  site: {
    url: 'https://experienzzia.vercel.app/',
    name: 'Experienzzia Gourmet',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Experienzzia Gourmet | Onces, Desayunos y Brunch en Suba',
      titleTemplate: '%s - Experienzzia Gourmet',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'google-site-verification',
          content: 'AbCdEf123456'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Experienzzia Gourmet ofrece onces, desayunos y brunch en Suba, Bogotá. Atención en local y a domicilio. Organización de eventos. Escríbenos por WhatsApp.' },
        { property: 'og:title', content: 'Experienzzia Gourmet | Sabores Artesanales en Suba' },
        { property: 'og:image', content: '/og-image.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://experienzzia.vercel.app/' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Experienzzia Gourmet",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Suba Centro",
              "addressLocality": "Bogotá",
              "addressCountry": "CO"
            },
            "telephone": "+573000000000",
            "openingHours": "Mo-Su 07:00-19:00"
          })
        }
      ]
    }
  },

  // 2. Módulos (Añadido @nuxtjs/sitemap)
  modules: [
    '@nuxt/ui', 
    '@nuxt/image',
    '@nuxtjs/sitemap' 
  ],
  
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // 3. Hooks y Redirecciones
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'root-redirect',
        path: '/',
        redirect: '/Inicio'
      })
    }
  }
})