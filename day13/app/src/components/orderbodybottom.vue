<template>
  <div data-v-1ec2d114 class="orderbody-bottom">
    <p data-v-1ec2d114 class="loading" style="display: none;">
      <svg data-v-1ec2d114 class="loading-svg">
        <use data-v-1ec2d114 xlink:href="#loading" />
      </svg>
    </p>
    <router-link to="/eatcar/oldorders">
      <p data-v-1ec2d114 class="limited" @click="orders()" style="color:#999">
        查看三个月前的外卖订单
        <svg data-v-1ec2d114 class="limited-svg">
          <use data-v-1ec2d114 xlink:href="#arrow-right">
            <svg viewBox="0 0 547 987" id="arrow-right">
              <path
                fill="#999"
                fill-rule="evenodd"
                d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"
              />
            </svg>
          </use>
        </svg>
      </p>
    </router-link>
    <!---->
  </div>
</template>
<script>
export default {
  methods: {
    orders() {
      this.$store.dispatch("setBody", true);
    }
  }
};
</script>
<style scoped>
svg {
  width: 0.11rem;
  height: 0.08rem;
}
</style>