Vue.config.productionTip = false;

import '../scss/all.scss';
import 'vuetify/dist/vuetify.css';


// import dependencies
import Vue from "vue";
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Notify from 'vue-notifyjs/dist/vue-notifyjs';
import VueProgressBar from 'vue-progressbar';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCog, faFile } from '@fortawesome/free-solid-svg-icons';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';




// create instance of vue "plugins"
library.add(faCoffee, faCog, faVuejs, faFile);

Vue.use(VueRouter);

Vue.use(VeeValidate);

Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    userdefined: "#ff00ff"
  }
});

Vue.use(Notify, {
  type: 'primary',
  timeout: 5000,
  horizontalAlign: 'right',
  verticalAlign: 'bottom'
});

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
});




// import files
import App from '../vue/App.vue';
import router from '../vue/router/Routes';
import store from "../vue/store/Store";
import '../vue/components/MyComponent.vue';




// Component registers
Vue.component('font-awesome-icon', FontAwesomeIcon);




// create SPA instance
const VueApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
