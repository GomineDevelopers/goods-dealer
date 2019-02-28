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
          <div
                  class="top-part"
                  v-text="curAddress.addressDetail"
          ></div>
        </div>
        <div class="arrow-right" @click="goAddressList">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="goods">
      <van-checkbox-group v-model="selectedGoods">
        <div class="goods-check" v-for="(item,index) in orderList" :key="item.id">
          <van-checkbox :key="index" :name="item" checked-color="#07c160"></van-checkbox>
          <van-card :num="item.total" :price="item.marketprice" :title="item.title" :thumb="item.thumb">
            <div slot="footer">
              <van-button size="mini" class="decrease" @click="decrease(index)">减少</van-button>
              <van-button size="mini" class=" increase" @click="add(index)">增加</van-button>
            </div>
          </van-card>
        </div>
      </van-checkbox-group>
    </div>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit"/>
  </div>
</template>
<script>
  export default {
    name: 'buyAll',
    data() {
      return {
        curAddress: '',
        curAddressid:'',
        orderList: [],
        goodsTotal: 0,
        totalPrice: 0,
        selectedGoods: []
      }
    },
    mounted() {
      this.getOrderList();

    },
    methods: {
      getOrderList() {
        let self = this;
        self.$http.get('https://icampaign.com.cn/gomineWechat/app/index.php', {
          params: {
            i: "8",
            c: "entry",
            do: "order",
            m: "ewei_shop",
            p: "confirm",
            api: true
          }
        }).then(function (response) {
          self.orderList = response.data.result.goods;
          self.curAddress = response.data.result.address;
          self.curAddressid = response.data.result.address.id;
          self.totalPrice = Number(response.data.result.realprice+'00');
        })
      },
      decrease(index) {
        if (this.orderList[index].total > 0) {
          this.orderList[index].total--
        } else {
          this.$toast('不能再少了');
        }
      },
      add(index) {
        this.orderList[index].total++
      },
      onSubmit() {
        let vm = this;
        let postData = {};
        let cartids = '';
        let goodSelected = '';
        postData.op = 'create';

        for(let i =0;i< vm.selectedGoods.length;i++){//已选中的商品
          for(let j =0;j< vm.orderList.length;j++){//所有商品
            if(vm.selectedGoods[i].goodsid === vm.orderList[j].goodsid){
              if(i === 0){
                goodSelected = vm.orderList[j].goodsid+',0,'+vm.orderList[j].total;
              }else{
                goodSelected = goodSelected +'|'+ vm.orderList[j].goodsid+',0,'+vm.orderList[j].total;
              }

            }
          }
        }
        postData.goods = goodSelected;
        postData.fromcart = 1;//来自购物车
        vm.selectedGoods.forEach(function (ele,index) {
          if(index === 0){
            cartids = ele.id ;
          }else{
            cartids = cartids +','+ ele.id
          }
        });
        postData.cartids = cartids;
        postData.addressid = vm.curAddressid;

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
      goAddressList() {
        this.$router.push({ name: 'addresslist' });
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
  .van-card__thumb img {
    border: 0;
    max-width: 100%;

    height: 100%;
  }
  .goods-check {
    display: flex;
    align-items: center;
    background-color: #fafafa;
    margin: 1vh 0;
  }
  .van-card {
    width: 100%;
  }
  .van-checkbox {
    width: 32px;
  }
</style>
