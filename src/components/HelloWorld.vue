<template>
  <div class="c-helloworld">Hello World！{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent, DefineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      name: 'Zebulon Jerry',
    };
  },
}) as DefineComponent;
</script>

<style style="postcss">
.c-helloworld {
  font-size: 40px;
  color: red;
  text-align: center;
}
</style>
