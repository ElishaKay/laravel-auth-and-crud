let Vue = require('vue'); 
let VueRouter = require('vue-router').default;
let Home = require('../components/Home')
let Login = require('../components/Login')
let Register = require('../components/Register')
let Profile = require('../components/Profile')
let List = require('../components/List')

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


