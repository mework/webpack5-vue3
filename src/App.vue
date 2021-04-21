<template>
  <div>{{ test1 }}</div>
  <HelloWorld />
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
  setup() {
    return {
      test1: 22222
    }
  }
}
</script>