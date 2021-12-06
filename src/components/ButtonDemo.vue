<template>
  <h2>button示例</h2>
  <div class="button-page">示例1</div>
  <div>
    <Button>按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
    <Button theme="button">按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/button.vue";
export default {
  components: { Button },
 
};
</script>

<style lang="scss">
  .button-page{
  line-height: 35px;
  }
</style>
