<template>
  <div class="inp-box">
    <input class="input" type="text" v-model="value" placeholder="请输入待办事件" @keyup.enter="add()" />
    <button class="primary" @click="add()">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },

  methods: {
    add() {
      //   console.log("submit", this.value);
      this.$emit("add", this.value, Date.now());
      this.value = null;
    },
  },
};
</script>

<style>
.inp-box {
  display: flex;
}
.input {
  flex: 1;
  margin-right: 20px;
}
</style>
