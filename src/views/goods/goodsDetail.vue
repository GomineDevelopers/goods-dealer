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
        <div class="van-info van-badge__info" v-text="goodsCount"></div>
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
    name: 'goods-detail',
    data() {
      return {
        goodsDetail: {},//单个商品信息
        goodsId: "",//商品id
        goodsCount: 0 //购物车数量
      }
    },
    mounted() {
      this.goodsId = this.$route.params.id;//获取路由携带的商品id
      this.getSingleProductData();
    },
    methods: {
      goCart() {//去购物车
        if(this.$commonTools.getCookie("goodsIds")){
          this.$router.push({ name: 'buyAll'});
        }
      },
      addCart() {//物车添加商品
        let self = this;
        let postData = {};
        postData.op = 'add';
        postData.id = self.goodsId;
        postData.total = 1;
        postData.fid = self.$route.params.uid;

        self.$http({
          method: 'post',
          url: 'https://icampaign.com.cn/gomineWechat/app/index.php',
          params: {
            i: "8",
            c: "entry",
            do: "shop",
            m: "ewei_shop",
            p: "cart",
            api: true
          },
          data:self.$qs.stringify(postData)
        })
            .then(function (response) {
              if(response.data.status === 1 && response.data.result.message === '添加成功'){
                self.goodsCount ++ ;
                /*加入购物车功能就要把商品id存下来*/
                let idStr = '';
                if(self.$commonTools.getCookie("goodsIds")){
                  idStr = self.$commonTools.getCookie("goodsIds") + ','+self.goodsId;
                }else{
                  idStr = self.goodsId;
                }
                self.$commonTools.setCookie("goodsIds", idStr, 1);
              }else if(response.data.result.message === '已在购物车'){
                self.$toast('商品已在购物车内，数量请在购物车内修改');
              }
            })
            .catch(function (error) {
              console.info(error)
            })

      },
      Buy(id) { //直接购买
        this.$router.push({ name: 'buy', params: { id: id,uid:this.$route.params.uid  }});
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
          self.goodsCount = response.data.result.cartcount;
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

