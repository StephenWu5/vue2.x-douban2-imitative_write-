import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import  movie_index from '../components/movie_index'
import movie_more from '../components/movie_more'
import movie_search from '../components/movie_search'
import movie_details from '../components/movie_details'

const routes =[
  { path: '/movies', component: movie_index},
  { path: '/more', component: movie_more},
  { path: '/search', component: movie_search},
  { path: '/details', component: movie_details},
  { path: '/', redirect: '/movies' }
]

const router = new VueRouter({
  // ES6缩写语法，相当于routes:routes
  routes
});

export default router;
