<template>
    <div>
        <div class="address-wrapper">
            <van-address-edit
                    :area-list="areaList"
                    :addressInfo="addressData"
                    show-delete
                    @save="onSave"
                    @delete="onDelete"
            />
        </div>
    </div>
</template>
<script>
  import AreaList from './Area';
  export default {
    name: 'addressEdit',
    data() {
      return {
        areaList: AreaList,
        addressData: {}
      }
    },
    mounted() {
      this.getAddressData()
    },
    methods: {
      // 地址选择
      onSave(content) {
        let vm = this;
        let postData = {};
        postData.op = 'submit';
        postData.id = vm.$route.params.id;
        postData.name = content.name;
        postData.tel = content.tel;
        postData.province = content.province;
        postData.city = content.city;
        postData.county = content.county;
        postData.addressDetail = content.addressDetail;

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
      },
      onDelete(){
        let vm = this;
        vm.$http({
          method: 'post',
          url:'https://icampaign.com.cn/gomineWechat/app/index.php',
          params:{
            i: "8",
            c: "entry",
            do: "shop",
            m: "ewei_shop",
            p: "address",
            api: "true",
            op:'remove',
            id:vm.$route.params.id
          }
        })
            .then(function (response) {
              if(response.data.status === 1){
                vm.$router.replace({name:'addresslist'})
              }
            })
            .catch(function(error) {
              console.log(error);
            });
      },
      getAddressData(){
        let vm = this;
        vm.$http.get('https://icampaign.com.cn/gomineWechat/app/index.php',{
          params:{
            i: "8",
            c: "entry",
            do: "shop",
            m: "ewei_shop",
            p: "address",
            api: "true",
            op:'get',
            id:vm.$route.params.id
          }
        })
            .then(function (response) {
              vm.addressData = {};
              vm.addressData = response.data.result.address;
            })
            .catch(function(error) {
              console.log(error);
            });
      }
    }
  }
</script>
<style scoped>

</style>
