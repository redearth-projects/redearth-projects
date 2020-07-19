<template>
    <div style="text-align:center;">
        <div class="circ">
          <span class="status">{{dCounter}}</span>
        </div>
        <div class="msg">{{projectMsg}}</div>
    </div>
</template>

<script>
export default {
  name: 'ProjectStatus',
  props: {
    counter: Number,
    maxValue: Number,
    projectMsg: String,
  },
  data() {
    return {
      dCounter: this.counter,
    };
  },
  created() {
    const that = this;
    function updateCounter() {
      that.dCounter += 1;
      if (that.dCounter < that.maxValue) {
        setTimeout(() => updateCounter(), 100);
      }
    }
    updateCounter();
  },
};
</script>
<style lang="scss" scoped>
.round {
    font-size: 20px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: block;
    background-color: #c9cd4c;
    text-align: center;
    color: white;
    font-weight: bold;
    padding: 7px;
    margin: 0 auto;
    box-shadow: inset 0px 0px 0px 3px white;
    border: 2px solid #c9cd4c;
}
.msg {
    font-weight: bold;
    text-align: center;
    width: 75px;
    margin-top: 6px;
}
.circ {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: inline-block;
    /* background-color: gray; */
    border-top: 4px solid transparent;
    border-left: 4px solid #c9cd4c;
    border-right: 4px solid #c9cd4c;
    border-bottom: 4px solid #c9cd4c;
    transform: rotate(45deg);
}
.circ span {
  display: inline-block;
    transform: rotate(-45deg);
    padding: 9px;
}

.status {
  color: #c9cd4c;
  font-size: 18px;
  padding: 9px;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  .msg {
    font-weight: bold;
    text-align: center;
    width: inherit;
  }
}
</style>
