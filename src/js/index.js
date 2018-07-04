// import scss
import "../scss/all.scss";

// import dependencies
import Vue from "vue";
import VueRouter from "vue-router";

// import files
import App from "../vue/App.vue";
import Routes from "../vue/router/Routes";

// create instance of vue "plugins"
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