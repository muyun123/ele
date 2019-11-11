<template>
  <div style="overflow: hidden;">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <a
        data-v-54bf175d
        data-v-1ec2d114
        href="/#/orderdetail"
        class="ordercard"
        scandata="[object Object]"
        v-for="(item, index) in list"
        :key="index"
      >
        <div data-v-54bf175d class="ordercard-body">
          <a
            data-v-54bf175d
            href="javascript:;"
            wxmplink="/pages/shop/shop/index?id=E6920919060789429617"
            class="ordercard-avatar"
          >
            <img
              data-v-54bf175d
              class="ordercard-logo"
              :src="item.restaurant_image_hash.split('?')[0]"
            />
            <!---->
          </a>
          <div data-v-54bf175d class="ordercard-content">
            <div data-v-54bf175d class="ordercard-head">
              <div data-v-54bf175d class="title">
                <a
                  data-v-54bf175d
                  href="javascript:;"
                  wxmplink="/pages/shop/shop/index?id=E6920919060789429617"
                  class="name"
                >
                  <span data-v-54bf175d class="content">{{item.restaurant_name}}</span>
                  <svg data-v-54bf175d>
                    <use data-v-54bf175d xlink:href="#arrow-right">
                      <svg viewBox="0 0 547 987" id="arrow-right">
                        <path
                          fill="#999"
                          fill-rule="evenodd"
                          d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"
                        />
                      </svg>
                    </use>
                  </svg>
                </a>
                <p data-v-54bf175d class="status">订单已送达</p>
              </div>
              <p data-v-54bf175d class="datetime">{{item.formatted_created_at}}</p>
            </div>
            <div data-v-54bf175d class="ordercard-detail">
              <p data-v-54bf175d class="detail">
                <span data-v-54bf175d class="productname">{{item.basket.group[0][0].name}}</span>
                <span data-v-54bf175d>等{{item.basket.group[0][0].quantity}}件商品</span>
              </p>
              <p data-v-54bf175d class="price">¥{{item.basket.group[0][0].price}}</p>
            </div>
          </div>
        </div>
        <!---->
      </a>
    </van-list>
  </div>
</template>
<script>
import Vue from "vue";
import { List } from "vant";

Vue.use(List);
export default {
  data() {
    return {
      list: [],
      i: 0,
      loading: false,
      finished: false
    };
  },
  created() {},
  methods: {
    onLoad() {
      this.axios.get("http://localhost:3000/oldorders").then(response => {
        this.list = this.list.concat(
          response.data.slice(this.i * 8, (this.i + 1) * 8)
        );
        window.console.log(this.list);
        // 加载状态结束
        this.loading = false;
        this.i++;
        // 数据全部加载完成
        if (this.list.length >= response.data.length) {
          this.finished = true;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.ordercard {
  background: #fff;
  display: block;
  height: 1.01rem;
  margin: 0.096rem 0 0;
  padding: 0.13rem 0 0 0.14rem;
  box-sizing: border-box;
  font-size: 0.16rem;
  color: #333;
  .ordercard-body {
    display: flex;
    .ordercard-avatar {
      width: 0.4rem;
      height: 0.3rem;
      padding-right: 0.096rem;
      box-sizing: border-box;
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
    }
    .ordercard-head {
      width: 3.05rem;
      height: 0.455rem;
      padding: 0 0.1248rem 0.096rem 0;
      box-sizing: border-box;
      border-bottom: 0.01rem solid #eee;
      .content {
        color: #333;
        max-width: 10em;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 14em;
        white-space: nowrap;
      }
      svg {
        width: 0.048rem;
        height: 0.067rem;
        margin-left: 0.048rem;
      }
      .status {
        font-size: 0.13rem;
        text-align: right;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        float: right;
      }
      .datetime {
        font-size: 0.1rem;
      }
    }
    .ordercard-detail {
      width: 3rem;
      height: 0.42rem;
      padding: 0.144rem 0.1248rem 0.144rem 0;
      box-sizing: border-box;
      font-size: 0.12rem;
      display: flex;
      justify-content: space-between;
    }
    .price {
      font-weight: 700;
      font-size: 0.14rem;
      color: #000;
    }
  }
}
</style>