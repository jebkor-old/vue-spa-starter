// import dependencies
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Notify from "vue-notifyjs/dist/vue-notifyjs";
import VueProgressBar from "vue-progressbar";
import VeeValidate from "vee-validate";

// create instance of vue "plugins"
Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Notify, {
  type: "primary",
  timeout: 5000,
  horizontalAlign: "right",
  verticalAlign: "bottom"
});
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
});
Vue.use(VeeValidate);

// import files
import App from  "../vue/App.vue";
import routes from "../vue/router/Routes";
import "../vue/components/MyComponent.vue";
import "../vue/components/BlizzardLoader.vue";


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