<template>
  <h2>button示例</h2>
  <div class="button-page">示例1 基本样式</div>
  <div>
    <Button>确定</Button>
    <Button theme="link">确定</Button>
    <Button theme="text">确定</Button>
    <Button theme="button">确定</Button>
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
