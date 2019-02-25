<template>
  <div class="order-list">
    <div class="search-wrapper">
      <van-search
        v-model="searchValue"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
      >
        <div
          slot="action"
          @click="onSearch"
        >搜索</div>
      </van-search>
    </div>

    <div class="tab-list">
      <van-tabs
        v-model="tabActive"
        animated
        swipeable
        sticky
      >
        <van-tab title="待付款">内容 1</van-tab>
        <van-tab title="待发货">内容 2</van-tab>
        <van-tab title="已发货">内容 3</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'order-list',
  data() {
    return {
      searchValue: "",
      tabActive: ""
    }
  },
  methods: {
    onSearch() {

    }
  },
}
</script>
<style scoped>
.order-list {
  width: inherit;
  height: inherit;
}
.van-search .van-cell {
  border-radius: 18px;
}
</style>
