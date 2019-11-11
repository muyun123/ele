<template>
  <div style="font-size:0.14rem;">
    <div class="app-dps8r">
      <div class="index-2guaN">
        <nav
          class="index-2g0nR index-2TCKU index-3dvSM"
          style="background-image: url(&quot;https://cube.elemecdn.com/4/9a/10565a5fe9636396fcc07abda7074png.png?x-oss-process=image/format,webp/resize,w_750&quot;);"
        >
          <a class="index--iRT3" @click="go()"></a>
          <!---->
          <!---->
        </nav>
        <div class="index-ccm5A">
          <div class="index-3X8sl">
            <!---->
            <img class="index-3eDRn" :src="datlist.image_path" />
          </div>
          <!---->
          <div class="index-2uv7r">
            <h2 class="index-3jRsK">
              <span class="index-UYhnL" v-text="datlist.name">米饭起义·自选快餐</span>
              <i class="index-1_VRD"></i>
            </h2>
            <div class="index-24KTi">
              <span class="index-2u0xV">评价{{datlist.rating}}</span>
              <span class="index-2u0xV">月售{{datlist.recent_order_num}}单</span>
              <span class="index-2u0xV">
                蜂鸟快送
                <span>约36分钟</span>
              </span>
            </div>
          </div>
          <!---->
          <div ubt-click="101178" class="index-2Ea3o">
            <div class="index-2Gi26">
              <!---->
              <div class="activity-tags-2y2CC">
                <div class="activity-tags-2bSeL">
                  <div
                    class="activity-tags-3LtvS"
                    style="color: rgb(255, 75, 51); border: 1px solid rgb(255, 201, 193);"
                  >15减3</div>
                  <!---->
                </div>
                <div class="activity-tags-2bSeL">
                  <div
                    class="activity-tags-3LtvS"
                    style="color: rgb(255, 75, 51); border: 1px solid rgb(255, 201, 193);"
                  >30减7</div>
                  <!---->
                </div>
                <div class="activity-tags-2bSeL">
                  <div
                    class="activity-tags-3LtvS"
                    style="color: rgb(255, 75, 51); border: 1px solid rgb(255, 201, 193);"
                  >45减12</div>
                  <!---->
                </div>
                <div class="activity-tags-2bSeL">
                  <div
                    class="activity-tags-3LtvS"
                    style="color: rgb(255, 75, 51); border: 1px solid rgb(255, 201, 193);"
                  >70减22</div>
                  <!---->
                </div>
              </div>
            </div>
            <div class="index-jk0Mt">3个优惠</div>
          </div>
          <p class="index-TmrYy">
            公告：本店所有食材均为当天精选进货的食材，保证新鲜。
            所有餐品为现炒现煮现蒸出品。
            如遇订单问题，可致电我们哦：13600369658
          </p>
        </div>
      </div>
      <!---->
      <!---->
    </div>
    <van-tabs v-model="activeName" color="#2395ff" line-width="0.288rem">
      <van-tab title="点餐" name="ordfood">
        <ordfood />
      </van-tab>
      <van-tab title="评价" name="highly">
        <highly />
      </van-tab>
      <van-tab title="商家" name="business">
        <business />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import ordfood from "./ordfood.vue";
import business from "./business.vue";
import highly from "./highly.vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
export default {
  data() {
    return {
      activeName: "ordfood",
      datlist: ""
    };
  },
  created() {
    this.getdata(this.$route.params.id);
  },
  watch: {
    $route() {
      window.console.log(this.$route.params.id);
      if (this.$route.params.id) {
        this.getdata(this.$route.params.id);
      }
    }
  },
  components: {
    ordfood,
    business,
    highly
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    getdata(id) {
      // window.console.log(this);
      this.axios.get(`http://localhost:3000/detail?id=${id}`).then(response => {
        window.console.log(response.data[0]);
        this.datlist = response.data[0];
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.app-dps8r {
  background: #fff;
  width: 100%;
  height: 2.26rem;
  position: relative;
  .index-2guaN {
    padding-top: 0.96rem;
    height: 1.355rem;
    .index-2g0nR {
      background-position: 50%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 0.96rem;
      padding: 0.0384rem 0.096rem 0;
      box-sizing: border-box;
      background-size: cover;
    }
    .index-3dvSM:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: linear-gradient(
        0deg,
        hsla(0, 0%, 100%, 0),
        rgba(0, 0, 0, 0.5)
      );
    }
    .index--iRT3 {
      margin-top: 0.048rem;
      margin-left: 0.048rem;
      width: 0.1rem;
      height: 0.1rem;
      display: inline-block;
      border-bottom: 0.023rem solid #fff;
      border-left: 0.023rem solid #fff;
      transform: rotate(45deg);
    }
  }
  .index-ccm5A {
    height: 1.3rem;
    padding-top: 0.288rem;
    box-sizing: border-box;
    position: relative;
    margin: auto;
    .index-3X8sl {
      width: 0.72rem;
      height: 0.72rem;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -80%);
      img {
        width: 0.72rem;
        height: 0.72rem;
      }
    }
    .index-2uv7r {
      width: 2.59rem;
      height: 0.412rem;
      margin: auto;
      text-align: center;
      font-size: 0;
      .index-3jRsK {
        height: 0.235rem;
        span {
          line-height: 0.235rem;
          font-size: 0.2rem;
          display: inline-block;
        }
      }
      .index-1_VRD {
        display: inline-block;
        width: 0.143rem;
        height: 0.235rem;
        position: relative;
      }
      .index-3jRsK .index-1_VRD:after {
        content: "";
        border-style: solid;
        border-width: 0.062rem 0 0.063rem 0.063rem;
        border-color: transparent transparent transparent rgba(0, 0, 0, 0.67);
        position: absolute;
        left: 0.08rem;
        top: 0.1rem;
      }
      .index-24KTi {
        height: 0.115rem;
        margin-top: 0.0624rem;
        font-size: 0.1rem;
      }
      .index-2u0xV:not(:last-child):after {
        content: " \B7 ";
        opacity: 0.2;
      }
      .index-3jRsK .index-UYhnL {
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .index-3jRsK {
        font-size: 0.19rem;
        font-weight: 700;
        white-space: nowrap;
        position: relative;
        padding-right: 0.096rem;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
      }
    }
    .index-2Ea3o {
      width: 2.88rem;
      height: 0.1919rem;
      margin: 0.11rem auto 0;
      .index-2Gi26 {
        display: inline-block;
        width: 2.29rem;
        .activity-tags-2bSeL {
          height: 0.159rem;
          margin: 0.024rem;
          display: inline-block;
          font-size: 0.11rem;
          .activity-tags-3LtvS {
            padding: 0.009rem 0.0348rem;
          }
        }
      }
      .index-jk0Mt {
        width: 0.58rem;
        font-size: 0.11rem;
        display: inline-block;
        position: relative;
        text-align: right;
        padding-right: 0.1rem;
        box-sizing: border-box;
      }
      .index-jk0Mt:after {
        content: "";
        display: block;
        border-style: solid;
        border-width: 0.038rem 0.035rem 0;
        border-color: #999 transparent transparent;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        right: 0;
      }
    }
    .index-TmrYy {
      width: 2.88rem;
      font-size: 0.11rem;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0.086rem auto 0.096rem;
      padding: 0;
      white-space: nowrap;
    }
  }
}
</style>