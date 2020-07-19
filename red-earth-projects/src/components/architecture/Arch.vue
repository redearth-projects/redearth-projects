<template>
    <div>
        <ImageLayout :imgSrc=imgSrc src="architecture" />
    </div>
</template>

<script>
import imgSrc from '../../others/image-src';
import ImageLayout from '../ImageLayout.vue';

export default {
  name: 'Architecture',
  components: {
    ImageLayout,
  },
  data() {
    return {
      imgSrc: imgSrc[0].architecture,
    };
  },
  // methods: {
  //   reOrderImages(category) {
  //     console.log(category);
  //   },
  // },
};
</script>
<style lang="scss" scoped>

</style>
