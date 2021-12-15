<template>
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法以及支持不同主题</h2>
      <div class="demo-component">
        <div class="demo-wrap">
          <component :is="Switch1" />
        </div>
        <div class="demo-wrap">
          <Switch v-model:value="normal1" theme="primary" />
        </div>
        <div class="demo-wrap">
          <Switch v-model:value="normal2" theme="success" />
        </div>
        <div class="demo-wrap">
          <Switch v-model:value="normal3" theme="info" />
        </div>
        <div class="demo-wrap">
          <Switch v-model:value="normal4" theme="warning" />
        </div>
        <div class="demo-wrap">
          <Switch v-model:value="normal5" theme="danger" />
        </div>
      </div>
      <div class="demo-actions">
        <Button @click="codeVisiblefirst = !codeVisiblefirst">查看代码</Button>
      </div>
      <div class="demo-code" v-if="codeVisiblefirst">
        <pre
          class="language-html"
          v-html="Prism.highlight(Switch1.__sourceCode, Prism.languages.html, 'html')"
        />
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled</h2>
      <div class="demo-component" >
        <component :is="Switch2" />
      </div>
      <div class="demo-actions">
        <Button @click="codeVisiblesecond = !codeVisiblesecond">查看代码</Button>
      </div>
      <div class="demo-code" v-if="codeVisiblesecond">
        <pre
          class="language-html"
          v-html="Prism.highlight(Switch2.__sourceCode, Prism.languages.html, 'html')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from "../lib/switch.vue";
import Switch1 from "./switch1.vue";
import Switch2 from "./switch2.vue";
import Button from "../lib/button.vue";
import "prismjs";
import "prismjs/themes/prism.css";
import { ref } from "vue";
const Prism = (window as any).Prism;

export default {
  components: {
    Switch,
    Button,
  },
  props: {
    component: Object,
  },
  setup(props) {
    const codeVisiblefirst = ref(false);
    const codeVisiblesecond = ref(false);
    const normal1 = ref(true);
    const normal2 = ref(true);
    const normal3 = ref(true);
    const normal4 = ref(true);
    const normal5 = ref(true);
    return {
      Prism,
      codeVisiblefirst,
      codeVisiblesecond,
      normal1,
      normal2,
      normal3,
      normal4,
      normal5,
      Switch1,
      Switch2,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo-wrap {
  margin-right: 10px;
   @media(max-width:500px){
      margin-left: -1px;
    }
}
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    display: flex;
    justify-content: start;
    padding: 16px;
   
   
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
