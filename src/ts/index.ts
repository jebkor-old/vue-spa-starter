// import dependencies
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vuex from "vuex";

// create instance of vue "plugins"
Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueRouter);

// import files
import App from  "../vue/App.vue";
import routes from "../vue/router/Routes";
import "../vue/components/MyComponent";


let store = new Vuex.Store({
  state: {
    count: 0
  }
});


// add the routes to the application
const router = new VueRouter({
    routes
});

// create SPA instance
const VueApp = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");