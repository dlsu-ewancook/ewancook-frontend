import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/scss/main.scss'
    ],
    script: [
      {
        src: '/bootstrap.bundle.min.js',
      }
    ],
    image: {
      dir: 'assets/images'
    }
})