<demo>
支持disabled
</demo>

<template>
  <Switch v-model:value="normal" disabled/>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const normal = ref(false);
    return { normal };
  },
};
</script>
