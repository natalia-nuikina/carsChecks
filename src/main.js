import './assets/main.css';
import { createApp } from 'vue';
import 'ant-design-vue/dist/reset.css';
import router from './router.js';
import App from './App.vue';

createApp(App)
  .use(router)
  .mount('#app')
