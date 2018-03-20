import Vue from 'vue';
import App from './App';

import axios from 'axios'
Vue.prototype.$http = axios

import router from './router/router'

import './assets/list.scss'
import './assets/style.scss'
new Vue({
  router,
  render: h => h(App)}
).$mount("#app")
