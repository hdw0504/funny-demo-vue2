<template>
  <div id="app">
    <input-btn @add="addNew"></input-btn>
    <todo-list :list="list" @update-row="updateRow" @delete-row="deleteRow"></todo-list>
  </div>
</template>

<script>
import inputBtn from "./components/inputBtn";
import todoList from "./components/todoList";

export default {
  name: "App",
  data() {
    return {
      list: [],
    };
  },
  components: {
    inputBtn,
    todoList,
  },
  methods: {
    addNew(value) {
      this.list.push({
        value,
        status: 0,
      });
    },
    // 更新
    updateRow(row, status) {
      this.$set(row, "status", status);
    },
    // 删除
    deleteRow(inx) {
      this.list.splice(inx, 1);
    },
  },
};
</script>

<style>
@import "./styles/index.css";
#app {
  width: 600px;
  margin: 0 auto;
  /* border: 1px solid #000; */
  margin-top: 20vh;
  height: 50vh;
  color: #666;
}
</style>
