<template>
  <router-link to="/">Home页面</router-link>
  <router-link to="/About">About页面</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
export default {
  setup() {
    return {
      test1: 22222,
    };
  },
};
</script>
