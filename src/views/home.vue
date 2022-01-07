<template>
  <div>
    <div class="topnavAndBanner">
      <div class="above">
        <Topnav />
      </div>
      <div class="banner">
        <h1>Xueduo-UI</h1>
        <h2>一个基于vue 3的自制框架</h2>
        <p class="actions">
          <a href="https://github.com/flaChang/Xueduo-UI-website">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 Typescript</h3>
          <p>使用了加强版的 JavaScript</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-sass"></use>
          </svg>
          <h3>基于 Sass</h3>
          <p>使用了最强大的 CSS扩展语言</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
$green: #41b983;
$border-radius: 20px;
.topnavAndBanner {
  background-color: #e7eaf3;
  clip-path: ellipse(67% 60% at 50% 40%);
  width: 100%;
  > .above{
    @media(max-width:500px){
      display: none;
    }
  }
}
.features {
  margin: 50px auto;
  width: 100%;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 399px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
