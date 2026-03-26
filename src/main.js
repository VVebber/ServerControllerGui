import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { router } from './router'

// import { createPinia } from 'pinia'

import App from './App.vue'
import messages from './locales'


const app = createApp(App)
const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
})
// app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
