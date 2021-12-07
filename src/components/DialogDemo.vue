<template>
  <h2>dialog示例</h2>
  <div class="dialog-page">示例</div>
  <Button  @click="toggle">toggle</Button>
  <Dialog :visible="false"></Dialog>
</template>

<script lang="ts">
import Dialog from "../lib/dialog.vue";
import Button from "../lib/button.vue";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
      const toggle = () => {
      x.value = !x.value
    }
    return {x , toggle}
  },
};
</script>


<style lang="scss">
.dialog-page {
  margin-top: 10px;
  line-height: 35px;
}
</style>