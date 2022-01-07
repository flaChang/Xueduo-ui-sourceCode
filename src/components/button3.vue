<demo>
不同大小
</demo>
<template>
<div>
  <div>
    <Button size="big">确定</Button>
    <Button>确定</Button>
    <Button size="small">确定</Button>
  </div>
  <div>
    <Button theme="link" size="big">确定</Button>
    <Button theme="link">确定</Button>
    <Button size="small" theme="link">确定</Button>
  </div>
  <div>
    <Button size="big" theme="text">确定</Button>
    <Button theme="text">确定</Button>
    <Button size="small" theme="text">确定</Button>
  </div>
</div>
</template>

<script lang="ts">
import {Button} from "../lib/index";
export default {
  components: {
    Button
  }
}
</script>