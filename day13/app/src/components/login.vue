<template>
  <div class="App-1EAON" data-spm-anchor-id="a2ogi.12119171.0.i0">
    <!---->
    <div class="App-3Q8Qb">
      <div class="LoginHeader-1jXn6">
        <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" class="LoginHeader-85WpV" />
      </div>
      <!---->
      <div>
        <form class="MessageLogin-iYvWA">
          <section class="MessageLogin-FsPlX">
            <input type="tel" v-model="number" maxlength="11" placeholder="手机号" />
            <button disabled="disabled" class="CountButton-3e-kd"></button>
          </section>
          <section class="MessageLogin-FsPlX">
            <input type="tel" v-model="regcode" maxlength="8" placeholder="验证码" />
            <button v-text="reg" class="CountButton-3e-kd regbutton" @click="checkreg()">获取验证码</button>
          </section>
          <div id="_umfp" style="display: inline; width: 1px; height: 1px; overflow: hidden;"></div>
          <div id="slideVerify" class="nc-container"></div>
          <section class="MessageLogin-15xD9">
            新用户登录即自动注册，并表示已同意
            <a
              href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18"
            >《用户服务协议》</a>
            和
            <a
              href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html"
            >《隐私权政策》</a>
          </section>
          <button class="SubmitButton-2wG4T" @click="login()">登录</button>
        </form>
        <!---->
        <a href="javascript:;" class="MessageLogin-31EIr">关于我们</a>
      </div>
    </div>
    <!---->
  </div>
</template>
<script>
import Vue from "vue";
import { Notify } from "vant";
Vue.use(Notify);
export default {
  data() {
    return {
      number: 15525535545,
      regcode: "",
      reg: "获取验证码"
    };
  },
  methods: {
    checkreg() {
      var str = "";
      for (var i = 0; i < 4; i++) {
        str += parseInt(Math.random() * 10);
      }
      this.reg = str;
    },
    login() {
      if (this.regcode == this.reg) {
        Notify("登录成功");
        this.setcookie('uid', this.number, 7);
        this.$router.go(-1);
      } else {
        Notify("验证码不正确");
      }
    },
    setcookie(key, val, iday) {
      let now = new Date();
      now.setDate(now.getDate() + iday);
      document.cookie = key + "=" + val + ";expires=" + now + ";path=/";
    }
  }
};
</script>
<style lang="scss" scoped>
.App-1EAON {
  height: 100%;
  padding-top: 0.4rem;
  font-size: 0.14rem;
  .App-3Q8Qb {
    margin: 0 0.3rem;
    .LoginHeader-1jXn6 {
      width: 3rem;
      height: 0.59rem;
      text-align: center;
      img {
        width: 1.3rem;
        height: 0.56rem;
      }
    }
    .MessageLogin-iYvWA {
      margin-top: 0.16rem;
      .MessageLogin-FsPlX {
        width: 3rem;
        height: 0.48rem;
        margin-bottom: 0.16rem;
        position: relative;
        input {
          width: 3rem;
          height: 0.48rem;
          border: 0.01rem solid #ddd;
          padding-left: 0.1rem;
          border-radius: 0.04rem;
          box-sizing: border-box;
        }
        .CountButton-3e-kd {
          width: 0.7rem;
          height: 0.19rem;
          background: transparent;
          text-align: center;
          border-radius: 0.06rem;
          position: absolute;
          top: 50%;
          right: 0.1rem;
          border: 0;
          color: #ccc;
          transform: translateY(-50%);
          cursor: pointer;
        }
        .regbutton {
          color: #333;
          border: 0.01rem solid #333;
          border-radius: 0;
          padding: 0.05rem 0;
        }
      }
      .MessageLogin-15xD9 {
        width: 100%;
        height: 0.4rem;
        margin-top: 0.12rem;
        color: #999;
        line-height: 0.2rem;
        a {
          color: #2395ff;
        }
      }
      .SubmitButton-2wG4T {
        display: block;
        width: 100%;
        height: 0.42rem;
        margin-top: 0.3rem;
        border-radius: 0.04rem;
        background: #4cd96f;
        color: #fff;
        cursor: pointer;
        text-align: center;
        font-size: 0.16rem;
        line-height: 0.42rem;
        border: none;
      }
    }
  }
  .MessageLogin-31EIr {
    display: block;
    margin-top: 0.2rem;
    text-align: center;
    color: #999;
  }
}
</style>