<template>
  <div class="goods-detail">
    <div class="detail-body">
      <div class="img-header">
      </div>
    </div>
    <div class="detail-footer">
      <van-goods-action>
        <van-goods-action-mini-btn
          icon="cart-o"
          text="购物车"
          @click="onClickMiniBtn"
        />
        <van-goods-action-big-btn
          text="加入购物车"
          @click="onClickBigBtn"
        />
        <van-goods-action-big-btn
          primary
          text="立即购买"
          @click="onClickBigBtn"
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
      goodsDetail: {},
      goodsId: ""
    }
  },
  mounted() {
    this.goodsId = this.$route.params.value;
  },
  methods: {
    onClickMiniBtn() {
      this.$toast('点击图标');
    },
    onClickBigBtn() {
      this.$toast('点击按钮');
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
  height: 15vh;
  background-color: bisque;
}
.img-header {
  background-image: linear-gradient(
    -181deg,
    rgba(255, 255, 255, 0) 28%,
    #ffffff 94%
  );
}
.img-header {
  height: inherit;
}
.detail-body > img {
  width: 100%;
  height: 100%;
}
</style>

