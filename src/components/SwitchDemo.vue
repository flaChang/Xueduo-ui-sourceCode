<template>
  <div>
    <h2>switch示例</h2>
    <div class="demo">
      <h2>常规用法以及支持不同主题</h2>
      <div class="markdown-body">
        以下样式对应的参数<code>theme</code>的值分别为
        <code>normal</code
        >、<code>primary</code>、<code>success</code>、<code>info</code>、
        <code>warning</code
        >、<code>danger</code>。<br />还可以设置<code>setup(){}</code>中的<code
          >const normal=ref(true)</code
        >来使得<code>switch</code>的初始状态为选择状态。
      </div>
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
        <Button theme="link" @click="codeVisiblefirst = !codeVisiblefirst"
          v-if="codeVisiblefirst">隐藏代码</Button
        >
        <Button theme="link" @click="codeVisiblefirst = !codeVisiblefirst"
          v-else>查看代码</Button
        >
        
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
      <div class="demo-component">
        <component :is="Switch2" />
      </div>
      <div class="demo-actions">
        <Button theme="link" @click="codeVisiblesecond = !codeVisiblesecond"
          v-if="codeVisiblesecond">隐藏代码</Button
        >
        <Button theme="link" @click="codeVisiblesecond = !codeVisiblesecond"
          v-else>查看代码</Button
        >
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
  @media (max-width: 500px) {
    margin-left: -1px;
  }
}
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    display: flex;
    justify-content: start;
    padding: 16px;
    flex-wrap: wrap;
    width: 100%;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    width: 100%;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    width: 100%;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  > .markdown-body{
    border-bottom: 1px dashed $border-color;
    padding: 8px 16px;
    line-height: 1.8 !important;
    
  }
}
</style>
