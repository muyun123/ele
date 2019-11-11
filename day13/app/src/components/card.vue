<template>
  <section class="shoplist">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <section
        class="index-container_10L_lQb shop-0"
        v-for="(item,index) in list"
        :key="index"
        @click="jumpurl(item.id)"
      >
        <a>
          <div class="index-shopInfo_1RRTZ0d">
            <div class="logo-container_XoH2Vit_0">
              <div class="logo-main_21aInWJ_0">
                <img :alt="item.name" class="logo-logo_3S1eSkn_0" :src="item.image_path" />
              </div>
            </div>
            <div class="index-main_N3FfcSz">
              <section class="index-line_2-iYR1A">
                <h3 class="index-shopname_39Y7e3U">
                  <span>{{item.name}}</span>
                </h3>
                <ul class="index-supportWrap_2lTcxr2">
                  <span class="index-omit_1q3Tw0_">···</span>
                </ul>
              </section>
              <section class="index-line_2-iYR1A">
                <div class="index-rateWrap_39dWx_g">
                  <van-rate v-model="value" size="10px" style="position: relative;top:0.05rem" />
                  <div class="Rating-wrapper_TYbDrku_0 index-stars_vPkk9Vv">
                    <div class="Rating-gray_1kpffd5_0">
                      <img src />
                    </div>
                    <div class="Rating-actived_GBtiHkB_0" style="width: 96%;">
                      <img src />
                    </div>
                  </div>
                  <span class="index-rate_WsK58g8">{{item.rating}}</span>
                  <span>月售{{item.recent_order_num}}单</span>
                </div>
                <div class="delivery-delivery_3gyT50e_0">
                  <div content="蜂鸟专送" alt="蜂鸟专送" class="delivery-icon-hollow_3q8_B5r_0">蜂鸟专送</div>
                </div>
              </section>
              <section class="index-line_2-iYR1A">
                <div class="index-moneylimit_2fCq9W5">
                  <span>￥{{item.piecewise_agent_fee.rules[0].price}}起送</span>
                  <span>{{item.piecewise_agent_fee.description}}</span>
                </div>
                <div class="index-timedistanceWrap_2Dp_kzY">
                  <span class="index-distanceWrap_1EPAlti">2.71km</span>
                  <span>31分钟</span>
                </div>
              </section>
            </div>
          </div>

          <div class="index-activityWrap_3mo1GyG">
            <section class="index-tagLine_1rJw_lq">
              <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">其他快餐</span>
              <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">支持自取</span>
              <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">品质联盟</span>
            </section>
            <section class="index-activities_25AUDsx">
              <div class="index-activityList_1wvwwUY">
                <div class="index-actRow_2f_uNNA">
                  <span class="index-iconWrap_1xJuKaY">
                    <span class="index-icon_1fBCxBk" style="background-color: rgb(112, 188, 70);">首</span>
                  </span>
                  <span class="index-desc_JLha7Vr">新用户下单立减12元</span>
                </div>

                <div class="index-actRow_2f_uNNA">
                  <span class="index-iconWrap_1xJuKaY">
                    <span class="index-icon_1fBCxBk" style="background-color: rgb(240, 115, 115);">减</span>
                  </span>
                  <span class="index-desc_JLha7Vr">满29减9，满50减15，满80减24</span>
                </div>

                <div class="index-actRow_2f_uNNA" style="display: none;">
                  <span class="index-iconWrap_1xJuKaY">
                    <span class="index-icon_1fBCxBk" style="background-color: rgb(0, 183, 98);">新</span>
                  </span>
                  <span class="index-desc_JLha7Vr">本店新用户立减2元</span>
                </div>

                <div class="index-actRow_2f_uNNA" style="display: none;">
                  <span class="index-iconWrap_1xJuKaY">
                    <span class="index-icon_1fBCxBk" style="background-color: rgb(241, 136, 79);">特</span>
                  </span>
                  <span class="index-desc_JLha7Vr">特价商品8.9元起</span>
                </div>
              </div>

              <div class="index-activityBtn_tMk-e1C">
                <span>4个活动</span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                  class
                />
              </div>
            </section>
          </div>
        </a>
      </section>
    </van-list>
  </section>
</template>
<script>
import Vue from "vue";
import { List } from "vant";
import { Rate } from "vant";

Vue.use(Rate);
Vue.use(List);
export default {
  data() {
    return {
      list: [],
      value: 3.5,
      loading: false,
      finished: false,
      i: 0
    };
  },
  created: function() {},
  methods: {
    onLoad() {
      this.axios.get("http://localhost:3000/card").then(response => {
        this.list = this.list.concat(
          response.data.slice(this.i * 4, (this.i + 1) * 4)
        );
        this.loading = false;
        this.i++;

        if (this.list.length >= response.data.length) {
          this.finished = true;
        }
      });
    },
    jumpurl(id) {
      window.location.href = `#/detail/${id}`;
      // this.$router.push({ name: `#/detail/${id}` });
    }
  }
};
</script>
<style scoped>
.shoplist {
  font-size: 0.14rem;
  margin-bottom: 0.5rem;
}
.index-container_10L_lQb {
  position: relative;
  background-color: #fff;
  color: #666;
  list-style: none;
  line-height: normal;
  padding: 0.23rem 0;
  border-bottom: 0.01rem solid rgb(241, 241, 241);
}
.index-shopInfo_1RRTZ0d {
  padding: 0 0.1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
}
.logo-container_XoH2Vit_0 {
  width: 0.65rem;
  height: 0.65rem;
}
.logo-container_XoH2Vit_0 img {
  width: 0.65rem;
  height: 0.65rem;
}
.index-main_N3FfcSz {
  padding-left: 0.1rem;
  box-sizing: border-box;
  width: 2.8rem;
  line-height: 0.22rem;
}
.index-line_2-iYR1A {
  display: flex;
  justify-content: space-between;
  font-size: 0.12rem;
}
.index-line_2-iYR1A h3 {
  font-size: 0.16rem;
}
.index-rateWrap_39dWx_g {
  display: flex;
  justify-content: space-between;
  height: 0.15rem;
}
.index-moneylimit_2fCq9W5 span + span:before {
  margin: 0 0.03rem;
  color: #ddd;
  content: "|";
}
.index-distanceWrap_1EPAlti:after {
  margin: 0 0.03rem;
  color: #ddd;
  content: "|";
}
.index-activityWrap_3mo1GyG {
  padding-left: 0.85rem;
  box-sizing: border-box;
}
.mini-tag-tag_3Tm_6bw_0 {
  position: relative;
  font-size: 0.12rem;
  white-space: nowrap;
  color: rgb(102, 102, 102);
  border: 0.01rem solid rgb(221, 221, 221);
  padding: 0 0.04rem;
  line-height: 0.13rem;
  margin: 0 0.05rem 0.04rem 0;
}
.index-activities_25AUDsx {
  display: flex;
  font-size: 0.12rem;
  justify-content: space-between;
}
.index-actRow_2f_uNNA {
  margin-top: 0.03rem;
}
.index-tagLine_1rJw_lq {
  margin-top: 0.1rem;
  margin-bottom: 0.13rem;
}
.index-iconWrap_1xJuKaY {
  margin-right: 0.06rem;
  color: #fff;
}
/* .delivery-icon-hollow_3q8_B5r_0 {
  color: #fff;
  line-height: normal;
  border: 0.013333rem solid #0097ff;
  background-image: -webkit-linear-gradient(45deg, #0085ff, #0af);
  background-image: linear-gradient(45deg, #0085ff, #0af);
} */
.van-loading {
  text-align: center;
}
</style>