<template>
    <div>
        <ProjectTestimony />
        <Achievements />
    </div>
</template>
<script>
import Achievements from './Achievements.vue';
import ProjectTestimony from './ProjectTestimony.vue';

export default {
  name: 'Home',
  components: {
    Achievements,
    ProjectTestimony,
  },
};
</script>
<style lang="scss">
.detail {
  background-image: url('../../assets/building-trimmed.png');
  background-size: cover;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 600px) {
  .detail {
    background-image:none;
    background-size: inherit;
    background-repeat: no-repeat;
  }
}
.services-bg {
    background-image: url('../../assets/services-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: -10px;
}
</style>
