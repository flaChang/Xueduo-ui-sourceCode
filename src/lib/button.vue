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
$h: 44px;
$h2: 190px;
$grayWhite: rgb(204, 204, 204);
$gray: rgb(129, 129, 129);
$softBlue: rgb(0, 120, 215);
$softWhite: rgb(225, 225, 225);
$color: #333;
$alert: rgb(254, 189, 56);
.gulu-button {
  box-sizing: border-box;
  height: $h;
  width: $h2;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: $grayWhite;
  color: $color;
  border: none;
  & {
    margin-left: 20px;
    margin-top: 8px;
    @media (max-width: 500px) {
      margin-left: 0px;
    }
  }
  &.gulu-theme-link {
    background-color: #fff;
    color: $gray;
    &:hover,
    &:focus {
      color: lighten($gray, 20%);
      border: none;
    }
  }
  &.gulu-theme-text {
    background-color: #fff;
    color: $color;
    &:hover,
    &:focus {
      border: none;
    }
  }
  &.gulu-theme-button,
  &.gulu-theme-text,
  &.gulu-theme-link {
    &.gulu-size-big {
      font-size: 20px;
      height: 55px;
      padding: 0 16px;
    }
    &.gulu-size-small {
      font-size: 12px;
      height: 35px;
      padding: 10px;
    }
  }
  &.gulu-theme-button {
    &.gulu-level-main {
      border: 2.5px solid $softBlue;
      background-color: $softWhite;
      &:hover,
      &:focus {
        background-color: rgb(229, 241, 251);
        border: 2px solid rgb(22, 145, 238);
      }
    }
    &.gulu-level-danger {
      background-color: $alert;
      color: $gray;
    }
    &[disabled] {
      border: 1px solid rgb(191, 191, 191);
      cursor: not-allowed;
      color: rgb(131, 131, 131);
    }
  }
  &.gulu-theme-text,
  &.gulu-theme-link {
    &.gulu-level-main {
      color: rgb(33, 137, 219);
    }
    &.gulu-level-danger {
      color: $alert;
      &:hover,
      &:focus {
        color: $gray;
      }
    }
    &[disabled] {
      cursor: not-allowed;
      color: $grayWhite;
    }
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
  &:hover,
  &:focus {
    border: 2.5px solid $gray;
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
