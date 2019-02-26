<template>
  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="addressList"
      @add="onAdd"
      @edit="onEdit"
      @select = "addressSelect"
    />
  </div>
</template>

<script>
export default {
  name: 'addresslist',
  data() {
    return {
      chosenAddressId: '',
      addressList: []
    }
  },
mounted(){
  this.getAddressListData();
},
  methods: {
    onAdd() {
      this.$router.push({ name: 'address'});
    },

    onEdit(item) {
      this.$router.push({ name: 'addressEdit', params: { id: item.id } });
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
      })
        .then(function (response) {
          vm.addressList=response.data.result.list;
          vm.addressList.forEach(function (ele) {
            if(ele.isDefault === '1'){
              vm.chosenAddressId = ele.id;
            }
          })
        })
          .catch(function(error) {
            console.log(error);
          });
    },
    addressSelect(item){
      let vm = this;
      let postData = {};
      postData.op = 'setdefault';
      postData.id = item.id;
      vm.$http({
        method: 'post',
        url: 'https://icampaign.com.cn/gomineWechat/app/index.php',
        params:{
          i: "8",
          c: "entry",
          do: "shop",
          m: "ewei_shop",
          p: "address",
          api: "true"
        },
        data:vm.$qs.stringify(postData)
      })
          .then(function (response) {
            if(response.data.status === 1){
              vm.$router.replace({name:'addresslist'})
            }
          })
          .catch(function (error) {
            console.info(error)
          });

    }
  }
}
</script>

<style scoped>
</style>
