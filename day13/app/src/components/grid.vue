<template>
  <div style="background:#fff">
    <van-grid :column-num="5" :border="false">
      <van-grid-item
        v-for="(item, index) in newgrid"
        :key="index"
        :icon="item.image_hash"
        :text="item.name"
      />
    </van-grid>

    <div class="index-1ECZ3_0">
      <section id="activity-lego" class="index-1y1Q5_0">
        <div class="index-3xB2N_0">
          <div class="index-Q3GS5_0 index-1xT5J_0">
            <h3 scan-data="{item.title}" class="index-1qvN6_0">品质套餐</h3>
            <div class="index-2W67h_0">搭配齐全吃得好</div>
            <div class="index-1DFa7_0">立即抢购 &gt;</div>
            <img
              src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed"
            />
          </div>
        </div>
      </section>
    </div>

    <van-divider :style="{  borderColor: '#555', padding: '0 92px' }">推荐商家</van-divider>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      grid: []
    };
  },
  created() {
    // 获取数据
    this.loadMore();
  },
  methods: {
    loadMore() {
      this.axios.get("http://localhost:3000/grid").then(response => {
        // window.console.log(response.data);
        this.grid = response.data;
        // window.console.log(this.grid);
      });
    }
  },
  computed: {
    newgrid() {
      return this.grid.slice(0, 10);
    }
  }
};
</script>
<style scoped>
.index-1ECZ3_0,
.index-1y1Q5_0 {
  height: 1.1rem;
  font-size: 0.16rem;
  line-height: 0.16rem;
}
.index-1ECZ3_0 {
  padding: 0 0.1rem;
  box-sizing: border-box;
}
.index-1qvN6_0 {
  font-size: 0.16rem;
  margin-bottom: 0.05rem;
}
.index-2W67h_0 {
  font-size: 0.13rem;
  line-height: 0.13rem;
  color: #ccc;
  margin-bottom: 0.085rem;
}

.index-1DFa7_0 {
  line-height: 0.13rem;
  font-size: 0.13rem;
  color: #af8260;
}
img {
  height: 0.9rem;
  position: absolute;
  top: 0.12rem;
  right: 0.12rem;
}
.index-1y1Q5_0 {
  background: #f6f6f6;
  padding: 0.12rem 0 0 0.12rem;
  box-sizing: border-box;
  position: relative;
}
</style>