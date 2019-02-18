<template>
  <div>
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
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >

      <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        :thumb="imageURL"
      />
    </van-list>

  </div>
</template>
<script>
export default {
  name: 'goods-list',
  data() {
    return {
      goods: {},
      list: [],
      imageURL: '',
      loading: false,
      finished: false,
      searchValue: '',
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    // 搜索
    onSearch() {

    }
  },
}
</script>
<style scoped>
</style>

