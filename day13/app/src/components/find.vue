<template>
  <div class="discover">
    <!---->
    <section class="parts unmerge">
      <div class="entry list3">
        <a ubt-click="1757" ubt-data-url="https://h5.ele.me/exchange/" class>
          <div class="content-wrapper">
            <p class="title" style="color: rgb(255, 153, 0);">金币商城</p>
            <p class="tips">0元好物在这里</p>
          </div>
          <img
            loading
            class="icon"
            src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp"
          />
          <img style="display: none;" />
        </a>
        <a ubt-click="1757" ubt-data-url="https://h5.ele.me/commend/#/" class>
          <div class="content-wrapper">
            <p class="title" style="color: rgb(27, 169, 225);">推荐有奖</p>
            <p class="tips">20元现金拿不停</p>
          </div>
          <img
            loading
            class="icon"
            src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp"
          />
          <img style="display: none;" />
        </a>
        <a ubt-click="1757" ubt-data-url="/discover/koubei/" class>
          <div class="content-wrapper">
            <p class="title" style="color: rgb(237, 102, 96);">周边优惠</p>
            <p class="tips">领取口碑好券</p>
          </div>
          <img
            loading
            class="icon"
            src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp"
          />
          <img style="display: none;" />
        </a>
      </div>
      <!---->
    </section>
    <!---->
    <!---->
    <!---->
    <!---->
    <section class="xianshihaoli">
      <div class="activity-header">
        <!-- <span class="line left"></span>
        <svg class="activity-icon">
          <use xlink:href="#alarm" />
        </svg>-->
        限时好礼
        <!-- <span class="line right"></span> -->
      </div>
      <p class="activity-sub-title">金币换豪礼</p>
      <div class="activity-body">
        <a
          ubt-data-title="限时好礼"
          ubt-click="951"
          ubt-data-sort_index="0"
          ubt-data-requrest_id
          class="discover-food"
        >
          <img
            src="https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg?x-oss-process=image/format,webp"
            width="324"
            height="322"
          />
          <div>
            <p class="food-name ui-ellipsis">3元品质联盟红包</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span>90金币</span>
                  <!---->
                </span>
                <del class="original-price ui-ellipsis">¥3</del>
              </div>
            </div>
          </div>
          <span class="discount">限时优惠</span>
        </a>
        <a
          ubt-data-title="限时好礼"
          ubt-click="951"
          ubt-data-sort_index="1"
          ubt-data-requrest_id
          class="discover-food"
        >
          <img
            src="https://cube.elemecdn.com/2/20/b0d0d94605fc31b9ee3ab651aa7c4jpeg.jpeg?x-oss-process=image/format,webp"
            width="324"
            height="322"
          />
          <div>
            <p class="food-name ui-ellipsis">数码经络按摩仪</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span>9金币</span>
                  <!---->
                </span>
                <del class="original-price ui-ellipsis">¥239</del>
              </div>
            </div>
          </div>
          <span class="discount">特价换购</span>
        </a>
        <a
          ubt-data-title="限时好礼"
          ubt-click="951"
          ubt-data-sort_index="2"
          ubt-data-requrest_id
          class="discover-food"
        >
          <img
            src="https://cube.elemecdn.com/f/93/a096dd082d6c42f600e460fffaa39jpeg.jpeg?x-oss-process=image/format,webp"
            width="324"
            height="322"
          />
          <div>
            <p class="food-name ui-ellipsis">机械手感背光键盘套装</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span>9金币</span>
                  <!---->
                </span>
                <del class="original-price ui-ellipsis">¥130</del>
              </div>
            </div>
          </div>
          <span class="discount">特价换购</span>
        </a>
      </div>
      <div class="activity-recommend wall-16TaH"></div>
      <!---->
      <p class="activity-more">查看更多></p>
    </section>
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
.discover {
  font-size: 0.12rem;
  background: #f5f5f5;
  height: 100%;
}
.parts {
  background: #fff;
  height: 1.54rem;
  margin-bottom: 0.1rem;
  border-bottom: 0.01rem solid #eee;
  .entry {
    width: 100%;
    height: 1.15rem;
    .title {
      color: rgb(255, 153, 0);
      font-size: 0.16rem;
    }
    .tips {
      color: #999;
      white-space: nowrap;
    }
    & a:first-child {
      float: left;
      border-right: 0.01rem solid #ededed;
      width: 1.8rem;
      height: 1.54rem;
      display: inline-block;
      padding: 0.21rem 0.1rem 0.06rem 0.15rem;
      box-sizing: border-box;
      .content-wrapper {
        float: left;
        width: 0.78rem;
      }
      img {
        width: 0.72rem;
        height: 0.72rem;
        position: relative;
        top: 0.58rem;
      }
    }
    & a:nth-child(2) {
      border-bottom: 0.01rem solid #ededed;
    }
    & a:nth-child(2),
    & a:nth-child(3) {
      display: block;
      display: flex;
      justify-content: space-between;
      height: 0.79rem;
      padding: 0.21rem 0.1rem 0.06rem 0.15rem;
      box-sizing: border-box;
      img {
        width: 0.47rem;
        height: 0.47rem;
      }
    }
  }
}
.xianshihaoli {
  background: #fff;
  height: 2.97rem;
  width: 100%;
  img {
    width: 1.063rem;
    height: 1.053rem;
  }
  .line::after {
    content: "";
    background: #333;
    border-radius: 50%;
  }
  .activity-header {
    padding-top: 0.18rem;
    height: 0.206rem;
    font-size: 0.172rem;
    color: #333;
    text-align: center;
  }
  .activity-sub-title {
    padding-bottom: 0.076rem;
    height: 0.2rem;
    font-size: 0.1rem;
    color: #999;
    text-align: center;
  }
  .activity-body {
    padding: 0.114rem 0 0.144rem 0.144rem;
    box-sizing: border-box;
    .food-name {
      color: #333;
      margin-bottom: 0.06rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .price {
      margin-right: 0.02rem;
      color: #ff5339;
    }
    .original-price {
      color: #aaa;
      font-size: 0.1rem;
    }
  }
  a {
    display: inline-block;
    width: 1.06rem;
    height: 1.6rem;
    margin-right: 0.056rem;
    float: left;
    position: relative;
  }
  .discover-food .discount {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    background: #413d3c;
    padding: 0.01rem;
    font-size: 0.1rem;
  }
  .activity-more {
    float: left;
    width: 100%;
    height: 0.3rem;
    text-align: center;
    margin-top: 0.2rem;
    color: #999;
  }
}
</style>