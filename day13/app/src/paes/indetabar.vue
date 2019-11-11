<template>
  <div style="background:#fff">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";

export default {
  components: {
    Footer
  }
};
</script>

<style>
</style>
