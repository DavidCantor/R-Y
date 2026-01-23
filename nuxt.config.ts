export default defineNuxtConfig({
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
        { name: 'google-site-verification', content: 'zuceSRodwbpYnw20AniZKfXDdmCwEe7or0kI1yK7PZw' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Experienzzia Gourmet ofrece onces, desayunos y brunch en Suba, Bogotá. Atención en local y a domicilio. Organización de eventos. Escríbenos por WhatsApp.' },
        
        // --- ESTOS CAMBIOS QUITARÁN EL NOMBRE "VERCEL" ---
        { name: 'apple-mobile-web-app-title', content: 'Experienzzia Gourmet' },
        { property: 'og:site_name', content: 'Experienzzia Gourmet' },
        { property: 'og:type', content: 'website' },
        // -----------------------------------------------

        { property: 'og:title', content: 'Experienzzia Gourmet | Sabores Artesanales en Suba' },
        // CORRECCIÓN: En Nuxt, la carpeta /public no se escribe en la ruta. 
        // Si tu imagen está en public/images/logo.webp, la ruta debe ser:
        { property: 'og:image', content: '/images/logo experienzzia.webp' },
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

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

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