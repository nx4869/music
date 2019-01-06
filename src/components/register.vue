<template>
  <div>
    <header>
      <i class="iconfont icon-fanhui" @click="goback()"></i>
      <span class="center">注册</span>
      <span class="right"></span>
    </header>
    <div class="body">
      <div class="account">
        <span>手机号：</span>
        <input type="text" placeholder="请输入手机号" v-model="cellphone">
      </div>
      <div class="password">
        <span>输入密码：</span>
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="passwords">
        <span>确认密码：</span>
        <input type="password" placeholder="请再次输入密码">
      </div>
      <div class="code">
        <input type="text" placeholder="验证码">
        <button @click="code()">获取验证码</button>
      </div>
      <button @click="register()">注册</button>
    </div>
  </div>
</template>

<script>
  import config from '../js/config'
  import axios from 'axios'
  export default {
    name: "register",
    data(){
      return {
        cellphone: ''
      }
    },
    methods: {
      goback() {
          this.$router.back()
      },
      code(){
        let url = config.domain + "/api/vcode/chkcode?token=" + config.token;
        let params = new URLSearchParams();//这个方法在axios的官网中有介绍，除了这个方法还有qs这个方法
        params.append("cellphone", this.cellphone);
        axios.post(url, params).then((res) => {
          console.log(res)
        })
      },
      register(){

      }
    }
  }
</script>

<style scoped>
  @import '../css/register.css';
</style>
