import Vue from 'vue';

import {
  NavbarPlugin,
  ButtonPlugin,
  ProgressPlugin,
  LayoutPlugin,
  ImagePlugin,
  ModalPlugin,
  FormPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormTextareaPlugin,
  ButtonGroupPlugin,
} from 'bootstrap-vue';
import VueCarousel from 'vue-carousel';

import VueGallery from 'vue-gallery';

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
Vue.use(ImagePlugin);
Vue.use(ModalPlugin);
Vue.use(FormPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormTextareaPlugin);
Vue.use(ButtonGroupPlugin);

Vue.use(VueGallery);

Vue.use(VueCarousel);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
