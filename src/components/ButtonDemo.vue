<template>
  <h2>button示例</h2>
  <Demo :component="Button1Demo" />
  <Demo :component="Button2Demo" />
  <Demo :component="Button3Demo" />
  <Demo :component="Button4Demo" />
  <Demo :component="Button5Demo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./button1.vue";
import Button2Demo from "./button2.vue";
import Button3Demo from "./button3.vue";
import Button4Demo from "./button4.vue";
import Button5Demo from "./button5.vue";
export default {
  components: { Demo },
setup() {
  return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo
    };
}
}
</script>

<style lang="scss">
.button-page {
  margin-top: 10px;
  line-height: 35px;
}
</style>
