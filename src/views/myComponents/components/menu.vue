<template>
  <div class="box">
    <div :class="['row', cur == item ? 'select' : '']" v-for="(item, index) in list" :key="item" @click="switchMenu(item, index)">{{ item }}</div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "cur",
    event: "change",
  },
  props: {
    cur: {
      type: String,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    switchMenu(item, inx) {
      //   this.moveTo(inx);
      this.$emit("change", item);
    },
    moveTo(inx) {
      const bg = this.$refs["bg"].style;
      bg.top = `${inx * 51}px`;
      bg.height = "51px";
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  /* height: 50vh; */
  color: #3a8ee6;
  position: relative;
  /* border-right: 1px solid #bdc3c7; */
}
.row {
  padding: 15px 20px;
  cursor: pointer;
}
.row:hover {
  color: #66b1ff;
}
.select {
  background-color: #3a8ee6;
  color: #fff !important;
  border-radius: 4px;
}
</style>
