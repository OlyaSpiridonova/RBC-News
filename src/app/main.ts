import '@/app/styles/index.scss'
import { createPinia } from 'pinia'
import { create } from './createApp'
import { router } from './providers/router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles' // Стандартные стили Vuetify
import '@mdi/font/css/materialdesignicons.css' // Импорт стилей Material Design Icons

export const app = create()
app.use(createPinia())
app.use(router)
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})
app.use(vuetify)

app.mount('#app')
