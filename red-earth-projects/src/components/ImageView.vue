<template>
    <div>
      <div>
        <div class="slideshow-container">
          <template v-for="(img, index) in newImgSrc">
            <div class="mySlides" :key="index">
              <img :src="img" class="img-carousal">
            </div>
          </template>
          <a class="prev" @click="plusSlides(-1)">&#10094;</a>
          <a class="next" @click="plusSlides(1)">&#10095;</a>
        </div>
        <br>
      </div>
      <div>
        <!-- <p>
          This area is reserved for displaying information
        </p> -->
        <div class="description">
          <div class="font-weight-bold">{{this.description.name}}</div>
          <div>
            <span class="font-weight-bold">Client:&nbsp;</span>
            <span>{{this.description.client}}</span>
          </div>
          <div v-if="this.description.area">
            <span class="font-weight-bold">Built-up Area:&nbsp;</span>
            <span>{{this.description.area}} sq. ft</span>
          </div>
          <div>
            <span class="font-weight-bold">Site Location:&nbsp;</span>
            <span>{{this.description.location}}</span>
          </div>
        </div>
        <div style="overflow:auto;white-space:nowrap;">
          <template v-for="(item, index) in newImgSrc">
              <img :src="item" :key="index" class="inline-images" :id="index"
               @click="updateImage(index)">
          </template>
        </div>
      </div>
    </div>
</template>
<script>
import imgSrc from '../others/image-src';

export default {
  name: 'ImageView',
  props: {
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
    src: {
      type: [String],
    },
  },
  data() {
    return {
      slideIndex: 1,
      imgSrc,
      newImgSrc: [],
      description: {},
    };
  },
  created() {
    const imgId = Number(this.id);
    for (let i = 0; i < this.imgSrc[0][this.src].length; i += 1) {
      if (this.imgSrc[0][this.src][i].id === imgId) {
        this.newImgSrc = this.imgSrc[0][this.src][i].children;
        this.description = this.imgSrc[0][this.src][i].description;
        break;
      }
    }
  },
  mounted() {
    this.showSlides(this.slideIndex);
    this.updateImageOpacity(0);
  },
  methods: {
    plusSlides(n) {
      if (this.slideIndex === this.newImgSrc.length) {
        this.updateImageOpacity(0);
      } else {
        this.updateImageOpacity(this.slideIndex);
      }
      this.showSlides(this.slideIndex += n);
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    },
    showSlides(n) {
      let i;
      const slides = document.getElementsByClassName('mySlides');
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i += 1) {
        slides[i].style.display = 'none';
      }
      slides[this.slideIndex - 1].style.display = 'block';
    },
    updateImage(index) {
      this.slideIndex = index;
      this.updateImageOpacity(this.slideIndex);
      const slides = document.getElementsByClassName('mySlides');
      for (let i = 0; i < slides.length; i += 1) {
        slides[i].style.display = 'none';
      }
      slides[index].style.display = 'block';
    },
    updateImageOpacity(index) {
      const inlineImages = document.getElementsByClassName('inline-images');
      for (let i = 0; i < inlineImages.length; i += 1) {
        inlineImages[i].style.opacity = '0.5';
      }
      const image = document.getElementById(index);
      image.style.opacity = '1';
    },
  },
};
</script>
<style lang="scss" scoped>
.mySlides {
  display: none;
  text-align: center;
}

/* Slideshow container */
.slideshow-container {
  position: relative;
  height: auto;
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
  background-color: rgba(0,0,0,.12);
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  color: white;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
.footer-section {
  height: 180px;
}
.img-carousal {
  max-width: 100%;
  height: 472px;
}
.description {
  padding:10px;
  float: left;
}
@media only screen and (max-width: 600px) {
  .inline-images {
    height: 236px;
    opacity:0.5;
    width: inherit;
  }
  .img-carousal {
    max-width: 100%;
    height: 272px;
    object-fit: scale-down;
  }
  .description {
    float: none;
  }
}
.inline-images {
  height:100px;
  opacity:0.5;
  margin: 1px;
  cursor: pointer;
}
</style>
