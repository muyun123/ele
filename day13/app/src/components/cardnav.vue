<template>
  <div data-v-a5cc4024 class="filter-header">
    <a data-v-a5cc4024 href="javascript:" class="filter-nav">
      <span data-v-a5cc4024>综合排序</span>
      <svg data-v-a5cc4024 viewBox="0 0 72 32" class="dropdown-icon">
        <path data-v-a5cc4024 d="M36 32l36-32h-72z" />
      </svg>
    </a>
    <a
      data-v-a5cc4024
      href="javascript:"
      ubt-click="104723"
      ubt-data-type="1"
      ubt-data-is_svip="true"
      class="filter-nav"
    >
      <span data-v-a5cc4024>距离最近</span>
    </a>
    <a data-v-a5cc4024 href="javascript:" ubt-click="104723" ubt-data-type="3" class="filter-nav">
      <span data-v-a5cc4024>品质联盟</span>
    </a>
    <a data-v-a5cc4024 ubt-click="104725" href="javascript:" class="filter-nav-more">
      <span data-v-a5cc4024>筛选</span>
      <svg data-v-a5cc4024 class="filter-nav-more__icon">
        <use data-v-a5cc4024 xlink:href="#more-filter" />
        <svg viewBox="0 0 26 26" id="more-filter">
          <path
            d="M9.001 15.009V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7.981l7.788-10.01a1 1 0 0 0-1.578-1.228l-8 10.28a1 1 0 0 0-.21.615V22h-4v-7.324a1 1 0 0 0-.2-.6L4.001 5h14a1 1 0 0 0 0-2H2a1 1 0 0 0-.8 1.6L9 15.009z"
          />
        </svg>
      </svg>
    </a>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.filter-header {
  font-size: 0.14rem;
  background: #fff;
}
svg {
  width: 0.06rem;
  height: 0.08rem;
  margin-left: 0.05rem;
  fill: #666;
}
.filter-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.filter-nav-more__icon {
  width: 0.15rem;
  height: 0.15rem;
  margin-left: 0.03rem;
}
a {
  color: #666;
}
</style>