<template>
  <button class="gulu-switch" 
         @click="toggle" 
         :class="{ 'gulu-checked': value }">
    <span></span>
  </button>
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
$h: 22px;
$h2: $h - 10px;
$light-dark: rgb(76, 74, 72);
$light-grey: rgb(130, 128, 127);
.gulu-switch {
  height: $h;
  width: $h * 2.5;
  border: 2px solid black;
  background: rgb(255, 255, 255);
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 3px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: rgb(51, 51, 51);
    border-radius: $h2 / 2;
    transition: left 300ms;
  }
  &.gulu-checked {
    background: $light-dark;
    border: 2px solid $light-dark;
    > span {
      background: rgb(255, 255, 255);
      left: calc(100% - #{$h2} - 2px);
    }
    &:hover {
      background: $light-grey;
      border: 2px solid $light-grey;
      @media (max-width: 500px) {
        background: $light-dark;
        border: 2px solid $light-dark;
      }
    }
  }
  &:focus {
    outline: none;
  }
}
button[disabled] {
  cursor: not-allowed;
  background-color: $light-grey;
}
</style>
