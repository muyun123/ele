<template>
  <div>
    <!-- <router-view></router-view> -->
    <Search />
    <grid />
    <cardnav />
    <card />
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import grid from "../components/grid.vue";
import cardnav from "../components/cardnav.vue";
import card from "../components/card.vue";
export default {
  created() {
    // window.console.log(this);
  },
  components: {
    Search,
    grid,
    cardnav,
    card
  }
};
</script>