<template>
    <div>
        <NavigationBar />
        <router-view />
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
