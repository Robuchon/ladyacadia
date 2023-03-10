import { createApp } from 'vue'
import App from './App.vue'

// TailwindCSS
import "./style.css";

// router-vue
import router from "@router/index.js";

const app = createApp(App).use(router);

app.mount("#app");