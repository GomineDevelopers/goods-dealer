<template>
  <div>
    <van-address-list
     
      v-model="chosenAddressId"
      :list="addressList"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  name: 'addresslist',
  data() {
    return {
      chosenAddressId: '1',
      addressList: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
mounted(){
this.getAddressListData();
},
  methods: {
    onAdd() {
      this.$toast('新增地址');
      this.$router.push({ name: 'address', params: { value: 'id' } });
    },

    onEdit(item, index) {
      this.$toast('编辑地址:' + index);
    },
    getAddressListData(){//初始获取地址列表信息
      let vm=this;
      vm.$http.get('https://icampaign.com.cn/gomineWechat/app/index.php',{
        params:{
          i: "8",
          c: "entry",
          do: "shop",
          m: "ewei_shop",
          p: "address",
          api: "true",
          
        }
      }).then(function (response) {
        vm.addressList=response.data.result.list;
        
      })

    }
  }
}
</script>

<style scoped>
</style>
