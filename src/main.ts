import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Dora from './components/dora.vue'
import Dora2 from './components/dora2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Dora },
        {path: "/xxx", component: Dora2}
        
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
