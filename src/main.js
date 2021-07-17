import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./reset.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import './main.css';

createApp(App).use(store).use(router).mount("#app");
