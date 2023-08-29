// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  baseURL: "/rising-os/",
  app: {
    buildAssetsDir: "/app/",
    baseURL: "/rising-os/",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://api.iconify.design/ph:terminal-window.svg?color=%23888888",
        },
      ],
    },
  },

  plugins: [
    "@/plugins/vRipple.js"
  ],
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/fonts/Montserrat.css",
    "@/assets/fonts/MajorMonoDisplay.css"
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],

})
