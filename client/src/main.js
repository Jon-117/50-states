import { createApp } from 'vue'
import App from './App.vue'

// make the state api available to the app. Import here, assign with globalProperties below.
import StateAPIService from '@/services/stateService'

import router from '@/router'

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

app.use(router)
app.mount('#app')
