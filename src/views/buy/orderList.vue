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
        <van-tab title="待付款">
          <div class="card-wrapper">
            <div class="card-top">
              <div class="img-wrapper">
                <img
                  src=""
                  alt=""
                >
              </div>
              <div class="discription">
                <div class="first-row">
                  <div class="left-des">
                    香奈儿时尚条纹单肩包
                  </div>
                  <div class="right-des">
                    <span>X<span>2</span></span>
                  </div>
                </div>
                <div class="">222</div>

              </div>
            </div>
            <div class="card-bottom">
              <div class="left">
                <span>快递单号：<span></span></span>
              </div>
              <div class="right"><span>合计 <span class="price-label"><span>￥</span>345</span></span></div>
            </div>
          </div>
        </van-tab>
        <van-tab title="待发货">
          <div class="card-wrapper">
            <div class="card-top">
              <div class="img-wrapper">
                <img
                  src=""
                  alt=""
                >
              </div>
              <div class="discription">
                <div class="first-row">
                  <div class="left-des">
                    香奈儿时尚条纹单肩包
                  </div>
                  <div class="right-des">
                    <span>X<span>2</span></span>
                  </div>
                </div>
                <div class="">222</div>

              </div>
            </div>
            <div class="card-bottom">
              <div class="left">
                <span>快递单号： <span>211231231231</span></span>
              </div>
              <div class="right"><span>合计 <span class="price-label"><span>￥</span>345</span></span></div>
            </div>
          </div>
        </van-tab>
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
  background-color: #ededed;
}
.van-search .van-cell {
  border-radius: 18px;
}
.card-wrapper {
  margin: 1.2vh;
  padding: 1vh;
  background-color: #ffff;
  box-shadow: 0 2px 4px 0 rgba(204, 204, 204, 0.5);
}
.img-wrapper {
  width: 30vw;
  height: 12vh;
}
.card-top {
  display: flex;
  height: 13vh;
  border-bottom: 1px solid #ededed;
}
.discription {
  width: 100%;
  padding: 0.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
}
.discription .first-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.left-des {
  max-width: 180px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: normal !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.left-des,
.right-des {
  padding: 3px;
}
.img-wrapper > img {
  width: 30vw;
  height: 90px;
  background-color: bisque;
}
.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 4vh;
  line-height: 5vh;
}
.price-label {
  color: #ee5603;
  font-weight: bold;
}
</style>
