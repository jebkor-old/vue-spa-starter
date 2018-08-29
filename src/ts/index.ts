// Disable the production warning in the console
Vue.config.productionTip = false;



// import dependencies
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Notify from "vue-notifyjs/dist/vue-notifyjs";
import VueProgressBar from "vue-progressbar";
import VeeValidate from "vee-validate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faCog } from "@fortawesome/free-solid-svg-icons";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";



// create instance of vue "plugins"
library.add(faCoffee, faCog, faVuejs);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(Vuetify, {
  theme: { }
});
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



// import files
import App from  "../vue/App.vue";
import routes from "../vue/router/Routes";
import "../vue/components/MyComponent.vue";



// Component registers
Vue.component("font-awesome-icon", FontAwesomeIcon);



// Vuex store register
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