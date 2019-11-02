/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// let router = require('./router');
// let VueRouter = require('vue-router');
let App = require('./App.vue');
require('./bootstrap');

// Vue.use(VueRouter);


// window.Vue = require('vue');
let Vue = require('vue'); 
let VueRouter = require('vue-router').default;
let Home = require('./components/Home')
let Login = require('./components/Login')
let Register = require('./components/Register')
let Profile = require('./components/Profile')
let List = require('./components/List')

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ];

const router = new VueRouter
({
    mode: 'history',
    routes
})


Vue.use(VueRouter)



// *
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
 

// Vue.component('navbar', require('./components/Navbar.vue'));
// Vue.component('articles', require('./components/Articles.vue'));
// Vue.component('home', require('./components/Home.vue'));
// Vue.component('list', require('./components/List.vue'));
// Vue.component('login', require('./components/Login.vue'));
// Vue.component('profile', require('./components/Profile.vue'));
// Vue.component('register', require('./components/Register.vue'));


// const app = new Vue({
//   el: '#app',
//   router
// });

// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// // require('../node_modules/bootstrap/dist/css/bootstrap.css')



Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
