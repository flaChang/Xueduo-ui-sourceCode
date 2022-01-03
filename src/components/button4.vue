<demo>
支持 disabled
</demo>
<template>
<Button disabled>确定</Button>
<Button theme="link" disabled>确定</Button>
<Button theme="text" disabled>确定</Button>
</template>

<script lang="ts">
import Button from "../lib/button.vue";
export default {
  components: {
    Button
  }
}
</script>