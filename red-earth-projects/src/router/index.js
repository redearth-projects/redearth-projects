import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/home/Home.vue';
import AboutUs from '../components/aboutus/AboutUs.vue';
import Arch from '../components/architecture/Arch.vue';
import Interior from '../components/interior/Interior.vue';
import ImageView from '../components/ImageView.vue';
import Services from '../components/Services.vue';

Vue.use(Router);

const router = new Router({
  // mode: 'history', // check the deployment stage for more info
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/interior',
    name: 'Interior',
    component: Interior,
  },
  {
    path: '/architecture',
    name: 'Architecture',
    component: Arch,
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
  }, {
    path: '/image-view/:src/:id',
    name: 'ImageView',
    component: ImageView,
    props: true,
  }, {
    path: '/services',
    name: 'Services',
    component: Services,
    props: true,
  }],
});

router.beforeEach((to, from, next) => {
  if (to.name === 'Home') {
    document.getElementById('re-body').classList.add('detail');
  } else {
    document.getElementById('re-body').classList.remove('detail');
  }
  if (to.name === 'Services') {
    document.getElementById('re-body').classList.add('services-bg');
  } else {
    document.getElementById('re-body').classList.remove('services-bg');
  }

  if (to.name !== 'Architecture') {
    const ele = document.getElementById('contentContainer');
    if (ele) {
      document.getElementById('contentContainer').classList.remove('re-arch-container');
      document.getElementById('contentContainer').classList.add('re-container');
    }
  }
  next();
});

export default router;
