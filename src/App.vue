<template>
  <div>导航栏 | 
  <router-link to="/">主页</router-link> |
  <router-link to="/doc">文档</router-link>
  </div>
  <hr>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
}
</script>
