import {createApp} from 'vue'
import App from '@/App.vue'
import {setupRouter} from '@/router'
import {setupStore} from '@/store'
import {setupGlobCom} from "@/components";


const setupAll = () => {
    const app = createApp(App)


    setupRouter(app)
    setupStore(app)
    setupGlobCom(app)

    app.mount('#app')
}
export default setupAll
