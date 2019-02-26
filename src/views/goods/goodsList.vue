<template>
  <div class="goods-list">
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch(searchValue)"
    >
      <div
        id="search"
        slot="action"
        @click="onSearch(searchValue)"
      >搜索</div>
    </van-search>
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad()"
        finished-text="没有更多了"
      >

        <van-card
          v-for="(item, index) in goods"
          v-bind:key="index"
          :num="item.total"
          :price="item.marketprice"
          :desc='item.marketprice'
          :title='item.title'
          :thumb="item.thumb"
          @click="goDetail(item.id)"
        />
      </van-list>
    </van-pull-refresh>

  </div>
</template>
<script>
export default {
  name: 'goods-list',
  data() {
    return {
      goods: [],//商品信息为一个数组
      loading: false,   //是否处于加载状态
      finished: false,  //是否已加载完所有数据
      isLoading: false,   //是否处于下拉刷新状态
      currentPage: '1',//当前页码，初始化为1
      total: '',//总的页数量
      searchValue: '',//搜索关键字
      usertype: '1'//用户类型
    }
  },
  // directives: {
  //   focus: {
  //     // 指令的定义
  //     inserted: function (search) {
  //       search.focus()
  //     }
  //   },
  //   onblur: {
  //     // 指令的定义
  //     inserted: function (search) {
  //       search.onblur()
  //     }
  //   }
  // },
  mounted() {
    let vm = this;
    vm.onLoad();
  },
  methods: {
    onLoad() {//初始化加载方法
      let vm = this;
      // 异步更新数据
      setTimeout(() => {
        vm.$http.get('https://icampaign.com.cn/gomineWechat/app/index.php', {
          params: {
            i: "8",
            c: "entry",
            do: "shop",
            p: "list",
            api: "true",
            m: "ewei_shop",
            page: vm.currentPage,
            keywords: vm.searchValue
          }
        }).then(function (response) {
          vm.total = response.data.result.pagesize;
          vm.goods = vm.goods.concat(response.data.result.goods);
          vm.loading = false;
          vm.currentPage++;
          if (vm.currentPage >= vm.total) {
            vm.isLoading = false,
              vm.finished = true;
            vm.$toast('刷新成功');
          }

        })
      }, 500);
    },
    // 搜索
    onSearch(value) {//初始化加载方法
      let vm = this;
      vm.goods = [];
      vm.getData(1, value);
    },
    onRefresh() {//下拉刷新
      let vm = this;
      vm.goods = [];
      vm.currentPage = 1
      vm.getData(vm.currentPage, vm.searchValue);

    },
    // 搜索
    getData(current, keywords) {//获取数据
      let vm = this;
      vm.$http.get('https://icampaign.com.cn/gomineWechat/app/index.php', {
        params: {
          i: "8",
          c: "entry",
          do: "shop",
          p: "list",
          api: "true",
          m: "ewei_shop",
          page: current,
          keywords: keywords
        }
      }).then(function (response) {
        vm.total = response.data.result.pagesize;
        vm.goods = vm.goods.concat(response.data.result.goods);
        vm.loading = false;
        vm.currentPage++;
        if (vm.currentPage >= vm.total) {
          vm.finished = true;
          vm.$toast('刷新成功');
        }
        vm.isLoading = false;
      })
    },
    goDetail(id) {
      if (this.usertype == '0') {
        this.$toast('初次进入请填写个人信息页面');
        this.$router.push({ name: 'addaddress', params: { value: id } });
      } else {
        this.$toast('跳转商品详情');
        this.$router.push({ name: 'goodsdetail', params: { value: id } })
      }

    }
  },
}
</script>
<style scoped >
.van-card__thumb img {
  border: 0;
  max-width: 100%;
  /* max-height: 100%; */
  height: 100%;
}
</style>

