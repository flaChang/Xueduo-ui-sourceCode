<template>
  <div>导航栏 | 
  <router-link to="/">Dora</router-link> |
  <router-link to="/xxx">Dora2</router-link>
  </div>
  <hr>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
}
</script>
