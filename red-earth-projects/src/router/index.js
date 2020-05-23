import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/home/Home.vue';
import Alert from '../components/Alert.vue';
import AboutUs from '../components/aboutus/AboutUs.vue';

Vue.use(Router);

const router = new Router({
  // mode: 'history', // check the deployment stage for more info
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/architecture',
    name: 'Architecture',
    component: Alert,
  }, {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
  }],
});

router.beforeEach((to, from, next) => {
  if (to.name === 'Home') {
    document.getElementById('re-body').classList.add('detail');
  } else {
    document.getElementById('re-body').classList.remove('detail');
  }
  next();
});

export default router;
