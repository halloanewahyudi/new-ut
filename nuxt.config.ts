import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // baseurl
  runtimeConfig: {
    public: {
      baseUrl: 'https://ut2025.sementara.net/wp-json/'
    }
  },
  
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image',
    '@vite-pwa/nuxt',
    'lenis/nuxt',
    '@nuxt/icon',
   // '@nuxt/fonts',
    '@nuxtjs/google-fonts'
  ],


  image: {

    formats: ['avif', 'webp'],
    provider: 'none'
  },
  css: ['~/assets/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  googleFonts: {
    families: {
      'Plus Jakarta Sans': [200, 300, 400, 500, 600, 700, 800],
    },
    display: 'swap',
    preconnect: true,
  },

})