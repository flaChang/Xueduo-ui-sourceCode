<template>
  <button class="gulu-switch" 
          @click="toggle" 
          :class="classes">
    <span></span>
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    value: Boolean,
    theme: {
      type: String,
      default: "normal"
    },
  },
  setup(props, context) {
    const { theme } = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-checked`]: props.value===true
      };
    });
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { classes, toggle };
  }
};
</script>

<style lang="scss">
$h: 26px;
$h1: 22px;
$h2: $h + 20px;
$light-dark: #a2a5b9;
$light-grey: rgb(130, 128, 127);
$primary:#41b983;
$success:#05d69e;
$info:#0398e2;
$warning:#faad42;
$danger:#e62864;
.gulu-switch {
  display: inline-block;
  height: $h;
  width: $h2;
  border: 2px solid hsl(0, 0%, 86%);
  background: #fff;
  border-radius: $h2/2;
  position: relative;
  transform: translate3d(18px, 2px, 0);
  > span {
    position: absolute;
    left: 0;
    top: -2.8px;
    margin-top: 1px;
    height: $h1;
    width: $h1;
    background: #fff;
    border-radius: $h1 / 2;
    transform: translate3d(2px, 2px, 0);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 2px rgb(0 0 0 / 24%);
  }
  &.gulu-checked {
    background: $light-dark;
    border: 2px solid $light-dark;
    > span {
      background: rgb(255, 255, 255);
      left: calc(100% - #{$h1} - 3px);
    }
    &.gulu-theme-primary{
      background-color: $primary;
      border: 2px solid $primary;
    }
    &.gulu-theme-success{
      background-color: $success;
      border: 2px solid $success;
    }
    &.gulu-theme-info{
      background-color: $info;
      border: 2px solid $info;
    }
    &.gulu-theme-warning{
      background-color: $warning;
      border: 2px solid $warning;
    }
    &.gulu-theme-danger{
      background-color: $danger;
      border: 2px solid $danger;
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h1 + 4px;
    }
  }
  &.gulu-checked:active {
    > span {
      width: $h1 + 4px;
      margin-left: -4px;
    }
  }
}
button[disabled] {
  cursor: not-allowed;
  background-color: $light-grey;
  > span {
    height: 20px;
    width: 20px;
    margin-top: 1.2px;
  }
}
</style>
