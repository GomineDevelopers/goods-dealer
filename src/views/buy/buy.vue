<template>
  <div class="buy">
    <div class="address-wrapper">
      <div> </div>
      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>浙江省金华市婺城区道心街338号四楼</div>
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
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
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
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
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
      checked: false
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
  height: 20vh;
  width: 100%;
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
</style>
