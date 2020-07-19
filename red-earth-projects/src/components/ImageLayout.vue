<template>
<div>
  <div v-if="this.src === 'architecture'">
    <FilterButtons @reorder-images="reOrderImages" />
  </div>
  <div v-if="this.src === 'interior'">
    <FilterInteriorButtons @reorder-images="reOrderImages" />
  </div>
  <div class="slideshow-container" id="container">
    <div class="grid">
      <template v-for="img in modImgSrc">
        <div class="item" :key="img.id">
          <img @click="navigate(img.id)" :src="`${img.src}`">
        </div>
      </template>
    </div>
  </div>
  <a class="prev" @click="slide('left')">&#10094;</a>
    <a class="next" @click="slide('right')">&#10095;</a>
  </div>
</template>
<script>
import FilterButtons from './architecture/FilterButtons.vue';
import FilterInteriorButtons from './architecture/FilterInteriorButtons.vue';

export default {
  name: 'ImageLayout',
  props: {
    imgSrc: {},
    src: String,
  },
  components: {
    FilterButtons,
    FilterInteriorButtons,
  },
  data() {
    return {
      modImgSrc: {},
    };
  },
  created() {
    this.modImgSrc = this.imgSrc;
  },
  mounted() {
    document.getElementById('contentContainer').classList.remove('re-container');
    document.getElementById('contentContainer').classList.add('re-arch-container');
  },
  methods: {
    navigate(id) {
      this.$router.push(`image-view/${this.src}/${id}`);
    },
    sideScroll(element, direction, speed, distance, step) {
      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
        if (direction === 'left') {
          // eslint-disable-next-line no-param-reassign
          element.scrollLeft -= step;
        } else {
          // eslint-disable-next-line no-param-reassign
          element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    },
    slide(direction) {
      const container = document.getElementById('container');
      this.sideScroll(container, direction, 25, 100, 10);
    },
    reOrderImages(category) {
      const tempObj = [];
      for (let i = 0; i < this.modImgSrc.length; i += 1) {
        const item = this.modImgSrc[i];
        if (item.category === category) {
          tempObj.unshift(item);
        } else {
          tempObj.push(item);
        }
      }
      this.modImgSrc = [...tempObj];
    },
  },
};
</script>
<style lang="scss" scoped>
.slideshow-container {
  position: relative;
  height: 768px;
  width: 100%;
  overflow-x:auto;
  overflow-y: hidden;
}
.grid {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 472px); // was 50%
  grid-template-rows: repeat(2, 50%);
  grid-auto-columns: 472px;
  grid-auto-flow: column;
  grid-gap: 10px;
}

.item {
  grid-area: span 1 / span 1;
}

img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: #ffffff;
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
.div-space {
  padding: 5px;
}
@media only screen and (max-width: 600px) {
  .slideshow-container {
    position: relative;
    overflow-x: auto;
    overflow-y: scroll;
    height: 100%;
  }

  .grid {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 10px;
    grid-template-columns: none;
    grid-template-rows: none;
    grid-auto-columns: inherit;
  }
  img {
    height: 400px;
  }
  .prev, .next {
    display: none;
  }
}
</style>
