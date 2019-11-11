<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/">
      <span>首页</span>
      <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal" />
    </van-tabbar-item>
    <van-tabbar-item to="/find" icon="search">发现</van-tabbar-item>
    <van-tabbar-item to="/eatcar/orders" icon="setting-o">订单</van-tabbar-item>
    <van-tabbar-item to="/mine/myhome" icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal:
          "https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png",
        active:
          "https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png"
      }
    };
  }
};
</script>