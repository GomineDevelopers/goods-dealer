<template>
  <div class="buy">
    <div class="address-wrapper">
      <div class="location-wrapper">
        <van-icon name="location-o" />
      </div>
      <div class="right-detail">
        <div class="middle">
          <div class="top-part">
            <div><span>收件人：<span v-text="curAddress.name"></span></span></div>
            <div>
              <span>电话：<span v-text="curAddress.tel"></span></span>
            </div>
          </div>
          <div class="top-part" v-text="curAddress.addressDetail"></div>
        </div>
        <div class="arrow-right" @click="goAddressList">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="goods">
      <van-card v-for="(item,index) in orderList" :key="item.goodsid"
        :num="item.total"
        :price="item.marketprice"
        :title="item.title"
        :thumb="item.thumb"
      >
        <div slot="footer">
          <van-button size="mini" class="decrease" @click="decrease(index)">减少</van-button>
          <van-button size="mini" class=" increase" @click="add(index)">增加</van-button>
        </div>
      </van-card>
    </div>
    <van-submit-bar
      :price="totalPrice"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
export default {
  name: 'buy',
  data() {
    return {
      curAddress:'',
      curAddressid:'',
      orderList:[],
      goodsTotal:0,
      totalPrice:0,
      ordersn:'',
      isSuccess:false
    }
  },
  mounted(){
    this.getOrderList();
  },
  methods: {
    getOrderList(){
      let self = this;
      self.$http.get('https://icampaign.com.cn/gomineWechat/app/index.php', {
        params: {
          i: "8",
          c: "entry",
          do: "order",
          m: "ewei_shop",
          p: "confirm",
          api: true,
          id: self.$route.params.id,
          fid:self.$route.params.uid,
          total:1
        }
      }).then(function (response) {
        self.curAddress = response.data.result.address;
        self.curAddressid = response.data.result.address.id;
        self.orderList = response.data.result.goods;
        self.totalPrice = Number(response.data.result.realprice+'00');
      })
    },
    decrease(index){
      if(this.orderList[index].total >1){
        this.orderList[index].total --;
        this.totalPrice =  Number(this.orderList[index].marketprice * this.orderList[index].total+'00');
      }else {
        this.$toast('不能再少了');
      }
    },
    add(index){
      this.orderList[index].total ++;
      this.totalPrice =  Number(this.orderList[index].marketprice * this.orderList[index].total+'00');
    },
    onSubmit() {
      let vm = this;
      let postData = {};
      postData.op = 'create';
      postData.goods = vm.orderList[0].goodsid+',0,'+vm.orderList[0].total;
      postData.fromcart = 0;//来自立即购买
      postData.addressid = vm.curAddressid;
      postData.fid = vm.$route.params.uid;

      vm.$http({
        method: 'post',
        url: 'https://icampaign.com.cn/gomineWechat/app/index.php',
        params:{
          i: "8",
          c: "entry",
          do: "order",
          m: "ewei_shop",
          p: "confirm",
          api:true
        },
        data:vm.$qs.stringify(postData)
      })
          .then(function (response) {
            if(response.data.status === 1){
              vm.$router.replace({name:'buySuccessful',params:{ordersn:response.data.result.ordersn}})
            }
          })
          .catch(function (error) {
            console.info(error)
          });
    },
    goAddressList(){
      this.$router.push({ name: 'addresslist'});
    }
  }
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
