<template>
  <h2>dialog示例</h2>
  <div class="dialog-page">示例</div>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" 
          :closeOnClickOverlay="true" 
          :ok="f1" 
          :cancel="f2">
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
  <div class="dialog-page">示例2</div>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from "../lib/dialog.vue";
import Button from "../lib/button.vue";
import { ref, h } from "vue";
import { openDialog } from "../lib/openDialog";

export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok() {
          console.log('ok');
          return false
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>

<style lang="scss">
.dialog-page {
  margin-top: 10px;
  line-height: 35px;
}
</style>
