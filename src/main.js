import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://cors-anywhere.herokuapp.com/https://testproject-d00c7.firebaseio.com/";

Vue.http.interceptors.push((request, next) => {
  next(response => {
    response.json = () => response.body
  });
})

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});