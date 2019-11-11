<template>
  <div>
    <div data-v-1ec2d114 style="margin-bottom:0.5rem">
      <section data-v-1ec2d114 class="nodatatipWrap NoDataTip-wrapper_1Gwf0tm" style>
        <img
          src="//fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png"
          data-spm-anchor-id="a2ogi.12117193.0.i0"
        />
        <h3>近三个月无外卖订单记录</h3>
        <!---->
        <!---->
      </section>
      <div data-v-1ec2d114 infinite-scroll-distance="20" class="orderbody">
        <!---->
        <router-view></router-view>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
// import Footer from "./footer.vue";
export default {
  components: {
    // Footer
  }
};
</script>
<style lang="scss" scoped>
.nodatatipWrap {
  text-align: center;
  margin-top: 0.96rem;
  color: #333;
  font-size: 0;
  img {
    width: 1.92rem;
    height: 1.38rem;
  }
  h3 {
    height: 0.19rem;
    margin: 0.12rem 0 0.096rem;
    font-size: 0.16rem;
  }
}
.orderbody-bottom {
  padding: 0.072rem 0;
  font-size: 0.12rem;
  color: #999;
  text-align: center;
}
svg {
  width: 0.11rem;
  height: 0.08rem;
}
</style>