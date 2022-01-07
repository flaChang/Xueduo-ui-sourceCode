<template>
<template v-if="visible">
  <Teleport to='body'>
    <div class="gulu-dialog-overlay" @click="onClickOverlay"></div>
    <div class="gulu-dialog-wrapper">
      <div class="gulu-dialog">
        <header>
        <slot name="title" />
        </header>
        <main>
          <slot name="content" />
        </main>
        <footer>
          <Button level="main" @click="ok">保存</Button>
          <Button @click="cancel">取消</Button>
        </footer>
      </div>
    </div>
  </Teleport>
</template>
</template>

<script lang="ts">
import Button from './button.vue'
export default {
  props : {
    visible: {
      type:Boolean, 
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  components: {
    Button
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        close()
      }
    }
    const cancel = () => {
      props.cancel && props.cancel()
      close()
    }
    return {
      close,
      onClickOverlay,
      ok,
      cancel
    }
  }
};

</script>

<style lang="scss">
$border: rgb(76, 74, 72);
$border-color: #d9d9d9;
.gulu-dialog {
  background: white;
  border: 1px solid $border;
  min-width: 15em;
  max-width: 100%;
  line-height: 40px;
&-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: center;
  }
  
}

</style>