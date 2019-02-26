<template>
  <div class="buy">
    <div class="address-wrapper">
      <div class="location-wrapper">
        <van-icon name="location-o" />
      </div>
      <div class="right-detail">
        <div class="middle">
          <div class="top-part">
            <div><span>收件人：<span>张呵呵呵</span></span></div>
            <div>
              <span>电话：<span>13956888727</span></span>
            </div>
          </div>
          <div class="top-part">浙江省金华市婺城区道心街338号四楼</div>
        </div>
        <div class="arrow-right">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="goods">
      <van-card
        num="2"
        tag="标签"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
      >
        <div slot="footer">
          <van-button
            size="mini"
            class="decrease"
          >减少</van-button>
          <van-button
            size="mini"
            class=" increase"
          >增加</van-button>
        </div>
      </van-card>
      <van-card
        num="2"
        tag="标签"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
      >
        <div slot="footer">
          <van-button
            size="mini"
            class="decrease"
          >减少</van-button>
          <van-button
            size="mini"
            class="increase"
          >增加</van-button>
        </div>
      </van-card>
    </div>
    <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit()"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送, <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  name: 'goods-list',
  data() {
    return {
      checked: false,
      imageURL: ''
    }
  },
  methods: {
    onSubmit() {

    }
  },
}
</script>
<style scoped>
.buy {
  margin: 2vw;
}
.address-wrapper {
  position: relative;
  min-height: 15vh;
  width: 100%;
  display: flex;
}
.location-wrapper {
  display: flex;
  align-items: center;
  font-size: 32px;
}
.top-part {
  display: flex;
  justify-content: space-between;
  margin: 1vh;
}
.right-detail {
  width: 100%;
  padding: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right-detail > .middle {
  width: 100%;
}
.arrow-right {
  width: 20px;
}
.arrow-right .right-detail .top-part {
  width: 100%;
  padding: 0.5vh;
  display: flex;
  justify-content: space-between;
}
.address-wrapper::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  position: absolute;
  background: -webkit-repeating-linear-gradient(
    135deg,
    #ff6c6c 0,
    #ff6c6c 20%,
    transparent 0,
    transparent 25%,
    #1989fa 0,
    #1989fa 45%,
    transparent 0,
    transparent 50%
  );
  background: repeating-linear-gradient(
    -45deg,
    #ff6c6c 0,
    #ff6c6c 20%,
    transparent 0,
    transparent 25%,
    #1989fa 0,
    #1989fa 45%,
    transparent 0,
    transparent 50%
  );
  background-size: 80px;
}
.goods {
  margin: 1vh 0;
}
.increase {
  background-color: #ee5603;
  color: white;
}
</style>
