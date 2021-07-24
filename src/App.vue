<template>
  <div id="app">
    <nav-menu id="menu" v-model="curName" :list="componentsList"></nav-menu>
    <component :is="curName"></component>
  </div>
</template>

<script>
import navMenu from "./components/navMenu/index";
import myComponents from "./views/myComponents/index";
import todoList from "./views/todoList/index";

export default {
  name: "App",
  components: {
    navMenu,
    todoList,
    myComponents,
  },
  data() {
    return {
      curName: "myComponents",
      componentsList: ["myComponents", "todoList"],
    };
  },
};
</script>

<style>
@import "./styles/index.css";
#app {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#menu {
  margin-top: 5vh;
  width: 80%;
}
</style>
