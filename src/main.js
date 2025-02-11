import App from './App.vue';
import { createApp } from 'vue';
import router from "./router"; // 추가
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App)
app.use(router)
app.mount('#app')
