<template>
  <div>
    <div class="uploader-wrapper">
      <div class="label">请上传身份证正面：</div>
      <div class="img-uploader">
        <van-uploader :after-read="onReadImgFont">
          <div
            class="uploader-area"
            v-show="!isSHowFront"
          >
            <van-icon
              class="plus"
              name="plus"
            />
            <div class="">请上传正面</div>
          </div>
          <div
            class="uploader-area"
            v-show="isSHowFront"
          >
            <img
              class="thumb-img"
              :src="fontImg"
              alt=""
            >
          </div>
        </van-uploader>
      </div>
      <div class="label">请上传身份证反面：</div>
      <div class="img-uploader">
        <van-uploader :after-read="onReadImgBack">
          <div
            class="uploader-area"
            v-show="!isShowBack"
          >
            <van-icon
              class="plus"
              name="plus"
            />
            <div>请上传背面</div>
          </div>
          <div
            class="uploader-area"
            v-show="isShowBack"
          >
            <img
              class="thumb-img"
              :src="backImg "
              alt=""
            >
          </div>

        </van-uploader>
      </div>
    </div>
    <div class="van-cell van-field">
      <div class="van-cell__title van-field__label"><span>身份证</span></div>
      <div class="van-cell__value">
        <div class="van-field__body"><textarea
            v-model="IDnumber"
            rows="1"
            maxlength="200"
            placeholder="请填写身份证号码"
            class="van-field__control"
            style="height: 24px;"
          ></textarea></div>
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
      fontImgName: '',//身份证正面名称
      fontImg: {},//身份证正面
      backImgName: '',//身份证反面名称
      backImg: {},//身份证反面
      IDnumber: '',
      isSHowFront: false,
      isShowBack: false,
    }
  },
  mounted() { },
  methods: {
    // 地址选择
    onSave(content) {
      let vm = this;
      let regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (!vm.fontImgName) {
        this.$notify('请上传身份证正面');
      } else if (!vm.backImgName) {
        this.$notify('请上传身份证反面');
      } else if (!regIdNo.test(vm.IDnumber)) {
        this.$notify('请正确填写身份证号码');
      } else {
        let postData = {};
        postData = content;
        console.log(postData)
        postData.op = 'submit';
        postData.identity = {};
        postData.identity.forward = {};
        postData.identity.back = {};
        postData.identity.id_num = vm.IDnumber;
        postData.identity.forward.name = vm.fontImgName;
        postData.identity.forward.content = vm.fontImg;
        postData.identity.back.name = vm.backImgName;
        postData.identity.back.content = vm.backImg;
        vm.$http({
          method: 'post',
          url: 'https://icampaign.com.cn/gomineWechat/app/index.php',
          params: {
            i: "8",
            c: "entry",
            do: "shop",
            m: "ewei_shop",
            p: "address",
            api: "true"
          },
          data: vm.$qs.stringify(postData)
        })
          .then(function (response) {
            if (response.data.status === 1) {
              vm.$router.replace({ name: 'addresslist' })
            }
          })
          .catch(function (error) {
            console.info(error)
          });
      }

    },
    // 图片上传
    onReadImgFont(file) {
      this.isSHowFront = true;
      this.fontImg = file.content;
      this.fontImgName = file.file.name;
    },
    onReadImgBack(file) {
      this.isShowBack = true;
      this.backImg = file.content;
      this.backImgName = file.file.name;

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
.thumb-img {
  width: 100%;
  height: 100%;
}
</style>
