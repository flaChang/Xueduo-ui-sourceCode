<demo>
常规用法
</demo>

<template>
  <Switch v-model:value="normal" theme="normal"/>   
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
