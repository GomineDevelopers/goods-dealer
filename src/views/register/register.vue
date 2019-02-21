<template>
  <div class="register">
    <div class="register-header">
      <span>请填写基本信息以注册会员</span>
    </div>
    <div class="register-body">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="您的姓名"
          @click-right-icon="$toast('请输入真实姓名')"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="您的手机号"
          required
        />
      </van-cell-group>
      <div class="button-wrapper">
        <van-button size="large">注册</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      username: '',
      password: ''
    }
  }

}
</script>
<style scoped>
.register {
  width: inherit;
  height: inherit;
  color: #333333;
  background-color: #f5f5f5;
}
.register-header {
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
.register-body {
  margin-top: 2vh;
}
.button-wrapper {
  margin: 2vh 0;
  padding: 5vw;
}
.button-wrapper .van-button--large {
  color: #ffffff;
  background: #f1be37;
}
</style>
