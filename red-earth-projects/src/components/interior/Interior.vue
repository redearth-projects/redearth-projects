<template>
    <div>
        <ImageLayout :imgSrc=imgSrc src="interior"/>
    </div>
</template>

<script>
import imgSrc from '../../others/image-src';
import ImageLayout from '../ImageLayout.vue';

export default {
  name: 'Interior',
  components: {
    ImageLayout,
  },
  data() {
    return {
      imgSrc: imgSrc[0].interior,
    };
  },
};
</script>
<style lang="scss" scoped>

</style>
