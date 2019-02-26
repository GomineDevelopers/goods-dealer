<template>
  <div class="goods-detail">
    <div class="detail-body">
      <div
        class="img-header"
        :style="{backgroundImage: 'url(' + goodsDetail.thumb + ')',}"
      >
        <div class="logo">
          {{goodsDetail.title}}
        </div>
        <div class="price">
          {{goodsDetail.marketprice }}
        </div>
      </div>
      <div
        class="description"
        v-html="goodsDetail.content"
      >

      </div>
    </div>
    <div class="detail-footer">
      <van-goods-action>
        <div
          class="van-info van-badge__info"
          v-text="goodsCount"
        >0</div>
        <van-goods-action-mini-btn
          icon="cart-o"
          text="购物车"
          @click="goCart"
        />
        <van-goods-action-big-btn
          text="加入购物车"
          @click="addCart"
        />
        <van-goods-action-big-btn
          primary
          text="立即购买"
          @click="Buy(goodsDetail.id)"
        />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
  name: 'goods-list',
  data() {
    return {
      goodsDetail: {},//单个商品信息
      goodsId: "",//商品id
      goodsCount: 0, //购物车数量

    }
  },
  mounted() {
    this.goodsId = this.$route.params.value;//获取路由携带的商品id
    this.getSingleProductData();
    if (this.goodsDetail.cartcount) {
      this.goodsCount = this.goodsDetail.cartcount;
    }
    else {
      this.goodsCount = 0;
    }
  },
  methods: {
    goCart() {//去购物车


    },
    addCart() {//物车添加商品
      let self = this;
      if (self.goodsCount < self.goodsDetail.total) {
        self.goodsCount += 1
      } else {
        self.$toast('数量超过库存上限');
      }
      self.$http.post('https://icampaign.com.cn/gomineWechat/app/index.php', {
        params: {
          i: "8",
          c: "entry",
          do: "shop",
          m: "ewei_shop",
          p: "cart",
          page: "1",
          api: true,
          op: "add",
          id: this.goodsId
        }
      })
    },
    Buy(id) { //直接购买

      this.$router.push({ name: 'buy', params: { value: id } });

    },
    getSingleProductData() {//商品介绍页面初始化
      let self = this;
      self.$http.get('https://icampaign.com.cn/gomineWechat/app/index.php', {
        params: {
          i: "8",
          c: "entry",
          do: "shop",
          m: "ewei_shop",
          p: "detail",
          page: "1",
          api: true,
          id: this.goodsId
        }
      }).then(function (response) {
        self.goodsDetail = response.data.result.goods;
      })
    }
  }
}
</script>
<style scoped>
.goods-detail {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.detail-body {
  height: 18vh;
  background-color: bisque;
}

.img-header {
  height: inherit;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-image: linear-gradient(
    -181deg,
    rgba(255, 255, 255, 0) 28%,
    #ffffff 94%
  );
}
.contain {
  widows: 100%;
  height: 100%;
}
.logo {
  background-color: aliceblue;
  padding: 1vh;
  font-weight: bold;
}
.detail-body > img {
  width: 100%;
  height: 100%;
}
.price {
  position: absolute;
  right: 2vw;
  bottom: 0;
  color: red;
  font-weight: bold;
}
.description {
  padding: 2vw;
}
.van-info {
  position: absolute;
  width: fit-content;
  left: 27px;
  top: 3px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 3px;
  min-width: 16px;
  line-height: 14px;
  border: 1px solid #fff;
  border-radius: 16px;
  background-color: #f44;
  -webkit-transform: translateX(50%);
  transform: translateX(50%);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
  z-index: 9999;
}
</style>

