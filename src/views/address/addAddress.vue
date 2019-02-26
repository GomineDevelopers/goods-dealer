<template>
  <div>
    <div class="uploader-wrapper">
      <div class="label">请上传身份证正面：</div>
      <div class="img-uploader">
        <van-uploader :after-read="onReadImgFont()">
          <div class="uploader-area">
            <van-icon
              class="plus"
              name="plus"
            />
            <div class="">请上传正面</div>
          </div>
        </van-uploader>
      </div>
      <div class="label">请上传身份证反面：</div>
      <div class="img-uploader">
        <van-uploader :after-read="onReadImgBack()">
          <div class="uploader-area">
            <van-icon
              class="plus"
              name="plus"
            />
            <div class="">请上传背面</div>
          </div>
        </van-uploader>
      </div>
    </div>

    <div class="address-wrapper">
      <van-address-edit
        :area-list="areaList"
        @save="onSave"
      />
    </div>

  </div>
</template>
<script>
import AreaList from './Area';
export default {
  name: 'add-adress',
  data() {
    return {
      areaList: AreaList,
      addressData: {},
      backImg: {},
      fontImg: {}
    }
  },
  mounted() {},
  methods: {
    // 地址选择
    onSave(content) {
      let vm = this;
      let postData = {};
      postData = content;
      postData.op = 'submit';
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
    // 图片上传
    onReadImgFont(file) {
      this.backImg = file;
    },
    onReadImgBack(file) {
      this.fontImg = file;
    }

  }
}
</script>
<style scoped>
.uploader-wrapper {
  padding: 10px 15px;
  color: #969799;
}
.uploader-wrapper .plus {
  font-size: 40px;
}
.uploader-area {
  width: 90vw;
  height: 35vw;
  margin: 2vh 0;
  border: 1px dashed #cccccc;
  background-color: #cfcfcf30;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
