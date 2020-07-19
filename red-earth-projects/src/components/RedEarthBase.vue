<template>
    <div>
        <div class="re-container">
          <NavigationBar />
        </div>
        <div class="re-container" id="contentContainer">
          <router-view />
        </div>
    </div>
</template>
<script>
import NavigationBar from './NavigationBar.vue';

export default {
  name: 'RedEarthBase',
  components: {
    NavigationBar,
  },
};
</script>

<style lang="scss">
</style>
