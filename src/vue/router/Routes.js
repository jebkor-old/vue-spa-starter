import Router from 'vue-router';
import NProgress from "nprogress";

// Import the .vue files, the router views.
import Frontpage from '../views/Frontpage.vue';
import About from '../views/About.vue';
import Cards from '../views/Cards.vue';

// Initialize and setup the routes
const Routes = new Router({
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Frontpage,
      iconType: 'material',
      icon: 'home'
    },
    {
      path: '/about',
      name: 'About Page',
      component: About,
      iconType: 'material',
      icon: 'person'
    },
    {
      path: '/cards',
      name: 'Cards Page',
      component: Cards,
      iconType: 'fa',
      icon: 'file'
    }
  ]
});


// Add the nprogress loader to route change
Routes.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

Routes.afterEach((to, from) => {
  NProgress.done();
});


// Export the router for consumption in index.ts file
export default Routes;
