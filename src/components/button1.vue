<demo>
基本样式
</demo>
<template>
<div>
  <Button>确定</Button>
  <Button theme="link">确定</Button>
  <Button theme="text">确定</Button>
</div>
</template>

<script lang="ts">
import Button from "../lib/button.vue";
export default {
  components: {
    Button
  }
}
</script>