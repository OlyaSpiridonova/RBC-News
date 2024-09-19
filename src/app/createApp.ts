import { createApp } from 'vue'

import App from './App.vue'

export const create = () => {
  const app = createApp(App)

  return app
}
