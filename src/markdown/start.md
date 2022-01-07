# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中用以下方式引入该组件库。

```
import {Button, Switch, Dialog, openDialog, Tab, Tabs} from "xueduo-ui"
```

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Switch, Dialog, openDialog, Tab, Tabs} from "xueduo-ui"
export default {
  components: {Button}
}
</script>
```