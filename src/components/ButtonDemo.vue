<template>
  <div>button示例</div>
  <h1>示例 1</h1>
  <div>
    <Button>我是按钮</Button>
    <Button theme="link">我是按钮</Button>
    <Button theme="text">我是按钮</Button>
    <Button theme="button">我是按钮</Button>
    
  </div>
</template>

<script lang="ts">
import Button from "../lib/button.vue";
export default {
  components: { Button },
  setup() {},
};
</script>
