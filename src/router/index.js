import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/home.vue';
import AboutPage from '../components/about.vue';
import RestaurantPage from '../components/Restaurants.vue';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import ItemDialog from '../components/ItemDialog.vue';
import CartPage from '../components/CartPage.vue';
import ContactPage from '../components/ContactPage.vue';
import ServicePage from '../components/ServicePage.vue';


Vue.use(Router);
// const isLoggedIn = true; 

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { requiresAuth: true },
   

  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
    meta: { requiresAuth: true },

  },
  {
    path: '/RestaurantPage',
    name: 'RestaurantPage',
    component: RestaurantPage,
    meta: { requiresAuth: true },
    
  },
  {
    path: '/CartPage',
    name: 'CartPage',
    component: CartPage
  },
  {
    path: '/ServicePage',
    name: 'ServicePage',
    component: ServicePage,
    meta: { requiresAuth: true },
  },
  {
    path: '/ContactPage',
    name: 'ContactPage',
    component: ContactPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
   

  },{ 
      path: '/ItemDialog',
      name:'ItemDialog',
      component: ItemDialog,
  
},

];

const router = new Router({
  mode: 'history',
  routes
});


  router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
      next('/login');
    } else {
      console.log({localStorage});
      console.log({isAuthenticated});
      next();
    }
  });




export default router;
