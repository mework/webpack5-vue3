<template>
  <div>{{ test1 }}</div>
</template>

<script lang="ts">
export default {
  setup() {
    return {
      test1: 22222
    }
  }
}
</script>

<style lang="postcss">
body {
  background-color: #000;
  div {
    display: flex;
    color: red;
  }
}
</style>