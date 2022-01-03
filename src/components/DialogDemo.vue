<template>
  <h2>dialog示例</h2>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './dialog1.vue';
import Dialog2Demo from './dialog2.vue';

export default {
  components: {
     Demo
  },
  setup() {
    
    return { Dialog1Demo,
      Dialog2Demo };
  },
};
</script>

<style lang="scss">
.dialog-page {
  margin-top: 10px;
  line-height: 35px;
}
</style>
