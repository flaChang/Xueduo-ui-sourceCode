<demo>
不同优先级
</demo>
<template>
<div>
  <div>
    <Button level="main">提醒</Button>
    <Button>正常</Button>
    <Button level="danger">危险</Button>
  </div>
  <div>
    <Button theme="link" level="main">提醒</Button>
    <Button theme="link">正常</Button>
    <Button theme="link" level="danger">危险</Button>
  </div>
  <div>
    <Button theme="text" level="main">提醒</Button>
    <Button theme="text">正常</Button>
    <Button theme="text" level="danger">危险</Button>
  </div>
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