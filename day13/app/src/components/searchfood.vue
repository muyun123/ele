<template>
  <div style="background:#fff">
    <section class="app-3rytA_1">
      <van-nav-bar title left-arrow @click-left="onClickLeft" />
      <form class="app-iYo7n_1">
        <van-icon name="search" class="app-2kCc4_1" size="0.18rem" />
        <input
          type="search"
          v-model="value"
          placeholder="输入商家、商品名称"
          class="app-11zxJ_1"
          data-spm-anchor-id="a2ogi.12117567.0.i1"
        />
        <button type="submit" class="app-3q7ve_1" @click="btn()">
          <router-link :to="link" style="color:#666">搜索</router-link>
        </button>
      </form>
    </section>
    <!-- <router-view></router-view> -->
    <div v-if="tell">
      <searchHot />
    </div>
    <div v-else>
      <searchRes />
    </div>
  </div>
</template>
<script>
import searchHot from "./searchHot.vue";
import searchRes from "./searchRes.vue";
import Vue from "vue";
import { Icon } from "vant";
import { NavBar } from "vant";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.use(NavBar);
Vue.use(Icon);
export default {
  data() {
    return {
      value: "",
      link: "",
      tell: 1,
      url:this.$router
    };
  },
  components: {
    searchHot,
    searchRes
  },
  watch: {
    value() {
      this.tell = 1;
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    btn() {
      // window.console.log(this.value);
      if (this.value == "") {
        this.link = "";
      } else {
        this.axios
          .get(`http://localhost:3000/sear?val=${this.value}`)
          .then(response => {
            // window.console.log(response.data);
            this.$store.dispatch("setVal", response.data);
          });
        this.tell = 0;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.app-3rytA_1 {
  background: #fff;
  position: relative;
  z-index: 52;
}
.app-iYo7n_1 {
  -webkit-flex-grow: 1;
  flex-grow: 1;
  padding: 0.098rem 0.098rem 0.098rem 0;
  margin-left: 0.098rem;
  background-color: #fff;
  z-index: 101;
  display: flex;
}
.app-11zxJ_1 {
  -webkit-flex-grow: 1;
  flex-grow: 1;
  -webkit-appearance: none;
  background-color: #f8f8f8;
  padding: 0.062rem 0.14rem 0.06rem 0.31rem;
  font-size: 0.115rem;
  color: #666;
  border: 0;
}
.app-3q7ve_1 {
  outline: none;
  color: #333;
  font-size: 0.15rem;
  background: #fff;
  font-weight: 700;
  margin-left: 0.1rem;
  border: 0;
}
.app-2kCc4_1::before {
  width: 0.1rem;
  height: 0.1rem;
  position: absolute;
  top: 0.05rem;
  left: 0.1rem;
}
[class*="van-hairline"]::after {
  border: 0;
}
.van-nav-bar__arrow {
  font-size: 0.2rem;
  color: #333;
}
</style>