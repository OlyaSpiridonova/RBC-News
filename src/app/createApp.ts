import { createApp } from 'vue'
import App from './App.vue'
import { Navbar } from '@/widgets'

export const create = () => {
  const app = createApp(App)

  app.component('Navbar', Navbar)

  return app
}
