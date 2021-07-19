<template>
  <div class="list-box">
    <div :class="['list', list.length ? '' : 'none']">
      <div class="item" v-for="(item, inx) in list">
        <div class="item-text" :title="item.value">{{ item.value }}</div>
        <div :class="['item-btn', item.status == 100 ? 'single' : 'three']">
          <button class="primary" @click="updateRow(item, 1)" v-if="item.status == 0">去执行</button>
          <button class="waring" @click="updateRow(item, 0)" v-if="item.status == 1">执行中</button>
          <button class="success" @click="updateRow(item, 100)" v-if="item.status != 100">完成</button>
          <button class="danger" @click="deleteRow(inx)">删除</button>
        </div>
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
    updateRow(row, status) {
      this.$emit("update-row", row, status);
    },
    deleteRow(inx) {
      this.$emit("delete-row", inx);
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
}
.none {
  border-top: 1px solid #d9d9d9;
  min-height: 50px !important;
}
.item {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #d9d9d9;
  padding: 0 10px;
}
.item-text {
  width: 60%;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-btn {
  flex: 1;
  display: flex;
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
.single {
  justify-content: flex-end;
}
.three {
  justify-content: space-between;
}
</style>
