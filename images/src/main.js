import Vue from 'vue';
import App from './App';
import store from './store';

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
