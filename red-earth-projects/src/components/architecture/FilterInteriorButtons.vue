<template>
    <div class="button-area">
        <b-button :class="{'active-button': residential}" @click="orderImages('residential')"
            class="left-btn re-btn">
            Residential
        </b-button>
        <b-button :class="{'active-button': corporate}" @click="orderImages('corporate')"
            class="re-btn right-btn">
            Corporate
        </b-button>
    </div>
</template>
<script>
export default {
  name: 'FilterButtons',
  data() {
    return {
      residential: true,
      corporate: false,
    };
  },
  methods: {
    orderImages(category) {
      if (category === 'residential') {
        if (this.residential) { return; }
        this.residential = !this.residential;
        this.corporate = false;
      } else if (category === 'corporate') {
        if (this.corporate) { return; }
        this.corporate = !this.corporate;
        this.residential = false;
      }
      this.$emit('reorder-images', category);
    },
  },
};
</script>
<style lang="scss" scoped>
.left-btn {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}
.right-btn {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
.button-area {
    text-align: center;
    margin-bottom: 10px;
}
.re-btn {
    background-color: #ffffff;
    color: #000000;
}
button {
    background-color: #ffffff !important;
    color: #000000;
    border-radius: 0px;
}
button:hover {
    color: #000000;
}
button:active {
    color: #000000 !important;
}
button:focus {
    border-color: #000000;
    box-shadow: none;
}
.active-button {
    color: red;
    font-weight: 500;
}
.active-button:hover {
    color:red;
}
</style>
