<template>
  <div class="list-box">
    <div :class="['list', list.length ? '' : 'none']">
      <div class="item" v-for="(item, inx) in list">
        <div :class="['item-text', item.status == 100 ? 'finish' : '']" :title="item.value">{{ item.value }}</div>
        <button class="btn primary" @click="updateRow(item, inx, 1)" v-if="item.status == 0">去执行</button>
        <button class="btn warning" @click="updateRow(item, inx, 0)" v-if="item.status == 1">执行中</button>
        <button class="btn success" @click="updateRow(item, inx, 100)" v-if="item.status != 100">完成</button>
        <button class="btn danger" @click="deleteRow(inx)">删除</button>
      </div>
    </div>
    <div>
      <button :class="['info pack-btn', list.length <= 3 ? 'disabled' : '']" @click="packUp()">{{ isShowAll ? "收起" : "展开" }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      isShowAll: true,
    };
  },
  methods: {
    updateRow(row, inx, status) {
      this.isShowAll = false;
      this.$emit("update-row", row, inx, status);
    },
    deleteRow(inx) {
      this.$emit("delete-row", inx);
    },
    packUp() {
      if (this.list.length <= 3) return;
      this.isShowAll = !this.isShowAll;
    },
  },
};
</script>

<style>
.list-box {
  margin-top: 50px;
  width: 100%;
}
.list {
  width: 100%;
}
.none {
  border-top: 1px solid #d9d9d9;
  min-height: 50px !important;
}
.item {
  height: 50px;
  display: grid;
  grid-template: 1fr/58% 16% 13% 13%;
  border-top: 1px solid #d9d9d9;
  padding: 0 10px;
  align-items: center;
}
.item-text {
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.finish {
  text-decoration: line-through;
}
.btn {
  justify-self: center;
}
.pack-btn {
  width: 100%;
  border-radius: 0 0 4px 4px;
}
.disabled {
  cursor: no-drop;
  background: #ccc;
  border-color: #ccc;
}
</style>
