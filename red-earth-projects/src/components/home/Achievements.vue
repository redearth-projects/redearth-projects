<template>
    <div class="achievements font-size">
        <b-row class="centre-row">
            <b-col class="padding">
              <ProjectStatus :counter=0 :maxValue=13 projectMsg="Completed Projects" />
            </b-col>
            <b-col class="padding">
              <ProjectStatus :counter=0 :maxValue=10 projectMsg="Active Projects" />
            </b-col>
            <b-col class="padding">
              <ProjectStatus :counter=0 :maxValue=11 projectMsg="Satisfied Clients" />
            </b-col>
        </b-row>
    </div>
</template>
<script>
import ProjectStatus from './ProjectStatus.vue';

export default {
  name: 'Achievements',
  components: {
    ProjectStatus,
  },
};
</script>
<style lang="scss" scoped>
.achievements {
  font-family: montserrat;
  display: inline-block;
  margin-top: 10px;
}
.font-size {
  font-size: 12px;
}
.padding {
  padding-left: 0px;
  padding-right: 0px;
}
@media only screen and (max-width: 600px) {
  .achievements {
    font-family: montserrat;
    display: inline-block;
    // margin-left:inherit;
  }
  .centre-row {
    margin: auto 0px;
  }
  .padding {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
