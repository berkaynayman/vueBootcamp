import { createApp } from "vue";
import App from "./App.vue";
//import "@/assets/style.css" ;
import appHeader from "@/components/appHeader"; // burada import ettiğimiz için global registiring

const app = createApp(App);
app.component("app-header", appHeader);
app.mount('#app');
