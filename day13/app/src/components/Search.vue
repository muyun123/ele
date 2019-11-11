<template>
  <div class="header">
    <header>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="index-okfdP_0">
        <path
          fill="#FFF"
          fill-rule="evenodd"
          d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"
        />
      </svg>
      <span class="heade-adr">天河城百货(北京路店)</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="index-2iXz3_0">
        <path
          fill="#FFF"
          fill-rule="evenodd"
          d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"
        />
      </svg>
    </header>
    <div role="button" class="search">
      <router-link to="/search">
        <a class="content">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
              fill-opacity="0.38"
              d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"
            />
          </svg>
          <span>搜索饿了么商家、商品名称</span>
        </a>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {}
  }
};
</script>
<style scoped>
.header {
  height: 1rem;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
header {
  height: 0.45rem;
  padding: 0.2rem 0 0 0.16rem;
  box-sizing: border-box;
}
.heade-adr {
  font-size: 0.16rem;
  float: left;
  color: #fff;
  vertical-align: middle;
  line-height: 0.16rem;
  font-weight: bold;
}
svg {
  height: 0.16rem;
  float: left;
  width: 0.2rem;
  vertical-align: middle;
}
.index-2iXz3_0 {
  width: 0.06rem;
  margin-left: 0.1rem;
}
.search {
  padding: 0.1rem 0.16rem;
  box-sizing: border-box;
  height: 0.54rem;
  font-size: 0.14rem;
  color: rgb(163, 163, 163);
  line-height: 0.36rem;
  text-align: center;
}
.content {
  background: #fff;
  display: block;
  width: 100%;
  height: 100%;
  color: rgb(163, 163, 163);
}
.search .content > svg {
  margin-left: 0.6rem;
  margin-top: 0.09rem;
  float: left;
}
.search .content > span {
  float: left;
  margin-left: 0.04rem;
}
</style>