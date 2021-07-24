<template>
  <div class="nav grid" :style="`grid-template: 1fr /repeat(${list.length},1fr);`">
    <div v-for="(item, inx) in list" :key="item" :class="['title', cur == item ? 'select' : '']" @click="switchNav(item, inx)">{{ item }}</div>
    <div ref="line" class="line" :style="`width:calc(100%/${list.length})`"></div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "cur",
    event: "change",
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    cur: {
      type: String,
    },
  },
  methods: {
    switchNav(item, inx) {
      this.moveTo(inx);
      this.$emit("change", item);
    },
    moveTo(inx) {
      const line = this.$refs["line"].style;
      line.left = `${(100 / this.list.length) * inx}%`;
      //   console.log(line);
    },
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  align-items: center;
  position: relative;
}
.title {
  color: #bdc3c7;
  font-size: 24px;
  height: 100%;
  /* width: 100%; */
  text-align: center;
  line-height: 2em;
  cursor: pointer;
  user-select: none;
}
.title:hover {
  color: #66b1ff;
}
.select {
  color: #3a8ee6;
  /* border-bottom: 2px solid #3a8ee6; */
  /* box-sizing: border-box; */
}
.line {
  /* width: 100%; */
  height: 2px;
  background: #3a8ee6;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: left 0.2s ease-in-out 0s;
}
</style>
