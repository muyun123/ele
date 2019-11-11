<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Footer from "./components/footer.vue";

export default {
  components: {
    // Footer
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
*,
:after,
:before {
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
}
img {
  max-width: 100%;
}
html,
body {
  font-size: 100px;
  height: 100%;
  background: #f5f5f5;
}
</style>
