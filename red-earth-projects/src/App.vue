<template>
  <div>
    <div id="app">
      <RedEarthBase />
    </div>
    <SocialMedia />
  </div>
</template>

<script>
import RedEarthBase from './components/RedEarthBase.vue';
import SocialMedia from './components/SocialMedia.vue';

export default {
  name: 'App',
  components: {
    RedEarthBase,
    SocialMedia,
  },
};
</script>

<style>
</style>
