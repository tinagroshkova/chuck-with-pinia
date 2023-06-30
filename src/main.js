import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from "@/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {fetchCategories} from "@/utils/utilities";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
fetchCategories();
app.mount('#app');
