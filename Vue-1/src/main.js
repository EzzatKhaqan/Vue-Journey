import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Layout from "./components/Layout.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const app = createApp(App);
app.component("Layout", Layout);
app.use(router);
app.mount("#app");
