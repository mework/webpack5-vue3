<template>
  <div class="c-helloworld">Hello World！{{ name }}</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props, { emit }) {
    return {
      name: 'Zebulon Jerry',
    };
  },
});
</script>

<style style="postcss">
.c-helloworld {
  font-size: 40px;
  color: red;
  text-align: center;
}
</style>