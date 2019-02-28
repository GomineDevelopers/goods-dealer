<template>
  <div class="buy-wrapper">
    <div class="card-top">
      <div class="result-message">
        下单成功！
      </div>
    </div>
    <div class="content">
      <div class="content-row">
        您的订单号为：
      </div>
      <div class="content-row">12121212121212221</div>
      <div class="content-row">
        <van-button
          class="buttonSubmint"
          type="default"
        >复制单号</van-button>
      </div>
      <div class="content-row">
        <div class="note">
          注：此订单号作为交易凭证，请出示于店家进行确认并付款。</div>
      </div>
      <div class="qrcode-area">
        <div class="qrcode">

        </div>
      </div>
      <div class="bottom-note">
        长按二维码，添加店家为好友进行付款
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'goods-list',
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>
<style scoped>
.buy-wrapper {
  height: 100%;
  background-color: #e5e5e5;
  overflow: hidden;
}
.card-top {
  height: 20vh;
  background: url("../../assets/images/buy_successful_bg.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
}
.content {
  height: 100%;
  margin-top: 1.5vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-row {
  margin: 1.5vh 0;
}
.buttonSubmint {
  color: white;
  width: 40vw;
  background: #f1be37;
  border-radius: 4px;
}
.note {
  font-size: 12px;
  color: #999999;
  letter-spacing: 0;
}
.bottom-note {
  font-size: 14px;
  color: #333333;
}
.qrcode-area {
  display: flex;
  justify-content: center;
  margin: 1.5vh 0;
}
.qrcode {
  width: 40vw;
  height: 40vw;
  background-color: bisque;
}
</style>

