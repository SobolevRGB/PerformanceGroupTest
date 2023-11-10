export default {
  head: {
    titleTemplate: '%s',
    title: 'Тестовое задание',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
   '~/assets/css/main.scss'
  ],

  plugins: [
    '~/api/index.ts'
  ],

  components: true,
  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxtjs/axios'
  ],
  
  build: {
  }
}
