<template>
  <button class="gulu-button" :class="{ [`gulu-theme-${theme}`]: theme }">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style lang="scss">
$h: 44px;
$h2: 190px;
$color: #333;
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
  background: rgb(204, 204, 204);
  color: $color;
  border: none;
  &  {
    margin-left: 8px;
    margin-top: 8px;
    @media (max-width: 500px) {
      margin-left: 0px; 
    }
  }
 
  &:hover,
  &:focus {
    border: 2.5px solid rgb(124, 124, 124);
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
