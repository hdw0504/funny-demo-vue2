<template>
  <div class="box">
    <div class="title">TODO LIST</div>
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
    updateRow(row, inx, status) {
      this.$set(row, "status", status);
      // 如果是点击执行或者完成
      if (status == 1 || status == 100) {
        const cur = this.list.splice(inx, 1)[0];
        if (status == 1) {
          // 如果当前已经有正在执行的项目
          if (this.list.length && this.list[0].status == 1) this.list[0].status = 0;
          // 添加在头部
          this.list.unshift(cur);
        } else if (status == 100) {
          // 添加在尾部
        }
      }
    },
    // 删除
    deleteRow(inx) {
      this.list.splice(inx, 1);
    },
  },
};
</script>

<style scoped>
.box {
  width: 600px;
  /* border: 1px solid #000; */
  /* margin-top: 20vh; */
  height: 50vh;
  color: #666;
}
.title {
  font-size: 40px;
  font-weight: 600;
  color: #666;
  text-align: center;
  height: 20vh;
  line-height: 20vh;
}
</style>
