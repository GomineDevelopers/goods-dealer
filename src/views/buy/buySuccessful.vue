<template>
  <div class="buy-wrapper">
    <div class="card-top">
      <div class="result-message">
        下单成功！
      </div>
    </div>
    <div class="content">
      <div>
        您的订单号为：
      </div>
      <div>12121212121212221</div>
      <div>
        <van-button type="default">默认按钮</van-button>
      </div>
      <div>12121212121212221</div>
      <div></div>
      <div></div>
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
  background-color: darkgray;
  overflow: hidden;
}
.card-top {
  height: 20vh;
  background-color: antiquewhite;
}
.content {
  height: 100%;
  margin-top: 3vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

