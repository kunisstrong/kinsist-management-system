import { createApp } from 'vue'
import App from '@/App.vue'
import { setupRouter } from '@/router'
import { setupGlobCom } from '@/components'
import { setupPinia } from '@/store'

const setupAll = (): void => {
  const app = createApp(App)

  setupRouter(app)
  setupGlobCom(app)
  setupPinia(app)

  app.mount('#app')
}
export default setupAll
