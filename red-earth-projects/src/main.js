import Vue from 'vue';

import {
  NavbarPlugin, ButtonPlugin, ProgressPlugin, LayoutPlugin,
} from 'bootstrap-vue';
import VueCarousel from 'vue-carousel';
import App from './App.vue';
import './css/custom.scss';

import router from './router';

Vue.config.productionTip = false;

// Install BootstrapVue, imports all the plugins
// Vue.use(BootstrapVue);

Vue.use(NavbarPlugin);
Vue.use(ButtonPlugin);
Vue.use(ProgressPlugin);
Vue.use(LayoutPlugin);

Vue.use(VueCarousel);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
