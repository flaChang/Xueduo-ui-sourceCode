<template>
  <div>
    <button class="gulu-switch" @click="toggle" :class="{ 'gulu-checked': value }">
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 24px;
$h2: $h - 8px;
.gulu-switch {
  height: $h;
  width: $h * 2.5;
  border: 2px solid black;
  background: rgb(255, 255, 255);
  border-radius: $h/2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: rgb(51, 51, 51);
    border-radius: $h2 / 2;
    transition: left 250ms;
  }
  &.gulu-checked {
    background: rgb(76, 74, 72);
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  
}
</style>
