<template>
  <button class="gulu-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="gulu-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
        [`gulu-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$white: #fff;
$gray: hsl(0, 0%, 86%);
$h: 38px;
$h1: 4px;
$priGreen: rgb(65, 185, 131);
$warnYellow: rgb(250, 173, 66);
$softBlue: rgb(0, 120, 215);
$softWhite: rgb(225, 225, 225);
$color: #363636;
$alert: rgb(230, 40, 100);
.gulu-button {
  box-sizing: border-box;
  height: $h;
  border-radius: $h1;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  padding: 8px 22px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  line-height: 1.1;
  background: $priGreen;
  color: #fff;
  transition: all 0.3s;
  &:focus {
    border-color: rgba(232, 232, 232, 0.925);
    box-shadow: none !important;
    outline: none !important;
    border-color: hsl(0, 0%, 91%);
  }
  & {
    margin-left: 20px;
    margin-top: 8px;
    margin-right: 6px;
    @media (max-width: 500px) {
      margin-left: 0px;
    }
  }
  &.gulu-theme-link {
    background-color: $white;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(219, 219, 219);
    color: $color;
    text-align: center;
    &:hover {
      border-color: rgb(181, 181, 181);
    }
  }
  &.gulu-theme-text {
    background-color: $white;
    color: $color;
    border: 1px solid transparent;
  }
  &.gulu-theme-button,
  &.gulu-theme-text,
  &.gulu-theme-link {
    &.gulu-size-big {
      font-size: 20px;
      height: 55px;
      line-height: 1.3;
    }
    &.gulu-size-small {
      font-size: 12px;
      height: 35px;
      padding: 10px;
    }
  }
  &.gulu-theme-button {
    &.gulu-level-main {
      background-color: $warnYellow;
    }
    &.gulu-level-danger {
      background-color: $alert;
      color: #fff;
    }
    &[disabled] {
      opacity: 0.5;
      background-color: $priGreen;
      border: 1px solid transparent;
    }
  }
  &.gulu-theme-text,
  &.gulu-theme-link {
    &.gulu-level-main {
      color: $warnYellow;
    }
    &.gulu-level-danger {
      color: $alert;
    }
  }
  &.gulu-theme-text[disabled]{
     opacity:0.5;
  }
  &.gulu-theme-link[disabled]{
 opacity: 0.5;
      color: $color;
      border-color: rgb(218, 218, 218);
  }
  > .gulu-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $gray $gray $gray transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
@keyframes gulu-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
