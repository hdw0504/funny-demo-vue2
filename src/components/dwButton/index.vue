<template>
  <button :class="[type, loading ? 'loading' : '', waiting ? 'waiting' : '']">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "dwButton",
  props: {
    // primary success info warning danger
    type: {
      type: String,
      default: "default",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    waiting: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
@import "./assets/index.css";
@import "./assets/status.css";
</style>
