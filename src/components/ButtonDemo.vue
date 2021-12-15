<template>
  <h2>button示例</h2>
  <div class="button-page">示例1 基本样式</div>
  <div>
    <Button theme="button">确定</Button>
    <Button theme="link">确定</Button>
    <Button theme="text">确定</Button>
  </div>
  <div class="button-page">示例2 不同大小</div>
  <div>
    <Button size="big">确定</Button>
    <Button>确定</Button>
    <Button size="small">确定</Button>
  </div>
  <div>
    <Button theme="link" size="big">确定</Button>
    <Button theme="link">确定</Button>
    <Button theme="link" size="small">确定</Button>
  </div>
  <div>
    <Button size="big" theme="text">确定</Button>
    <Button theme="text">确定</Button>
    <Button theme="text" size="small">确定</Button>
  </div>
  <div class="button-page">示例3 优先级</div>
  <div>
    <Button level="main">提醒</Button>
    <Button>正常</Button>
    <Button level="danger">危险</Button>
  </div>
  <div>
    <Button theme="link" level="main">提醒</Button>
    <Button theme="link">正常</Button>
    <Button theme="link" level="danger">危险</Button>
  </div>
  <div>
    <Button theme="text" level="main">提醒</Button>
    <Button theme="text">正常</Button>
    <Button theme="text" level="danger">危险</Button>
  </div>
  <div class="button-page">示例4 disabled</div>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <div class="button-page">示例5 加载按钮</div>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/button.vue";
export default {
  components: { Button },
};
</script>

<style lang="scss">
.button-page {
  margin-top: 10px;
  line-height: 35px;
}
</style>
