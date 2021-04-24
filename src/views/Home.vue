<template>
  <div class="v-home">
    这里是Home页面
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style lang="postcss">
.v-home {
  color: blue;
}
</style>
