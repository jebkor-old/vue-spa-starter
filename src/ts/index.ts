// import dependencies
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

// import files
const App = () => import( "../vue/App.vue");
const Routes = () => import("../vue/router/Routes");
import "../vue/components/MyComponent";

// create instance of vue "plugins"
Vue.use(Vuetify);
Vue.use(VueRouter);

// add the routes to the application
const router = new VueRouter({
    routes: Routes
});

// create SPA instance
const app = new Vue({
    router,
    render: h => h(App)
}).$mount("#app");