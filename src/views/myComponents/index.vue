<template>
  <div class="box ">
    <!-- grid -->
    <!-- <menu-list v-model="curName" :list="menuList" /> -->
    <div class="row">
      <div class="title">button按钮</div>
      <div class="btn">
        <dw-button type="default">default</dw-button>
        <dw-button type="primary">primary</dw-button>
        <dw-button type="success">success</dw-button>
        <dw-button type="info">info</dw-button>
        <dw-button type="warning" waiting>warning waiting</dw-button>
        <dw-button type="danger" loading>danger loading</dw-button>
        <dw-button type="text">text</dw-button>
      </div>
    </div>
  </div>
</template>

<script>
import menuList from "./components/menu";

export default {
  components: {
    menuList,
  },
  data() {
    return {
      curName: "button",
      menuList: ["button", "button2", "button3"],
    };
  },
};
</script>

<style scoped>
.box {
  width: 80%;
}
.grid {
  grid-template: 1fr/ 300px auto;
}
.row {
  /* width: 80%; */
  margin: 20px 0;
}
.title {
  margin-bottom: 20px;
  font-size: 20px;
}
.btn > button {
  margin-right: 20px;
}
</style>
