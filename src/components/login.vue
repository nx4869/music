<template>
  <div class="body">
    <div class="account">
      <span>账号：</span>
      <input type="text" v-model="account">
    </div>
    <div class="password">
      <span>密码：</span>
      <input type="password" v-model="password">
    </div>
    <button @click="Login()">登录</button>
    <div class="register">
      <span @click="register()">去注册</span>
    </div>
  </div>
</template>

<script>
  import config from '../js/config'
  import axios from 'axios'

  export default {
    name: 'login',
    data() {
      return {
        account: "",
        password: ""
      }
    },
    mounted() {
    },

    methods: {
      Login() {
        let url = config.domain + "/api/home/user/pwdlogin?token=" + config.token;
        let params = new URLSearchParams();//这个方法在axios的官网中有介绍，除了这个方法还有qs这个方法
        params.append("cellphone", this.account);
        params.append("password", this.password);
        axios.post(url, params).then((res) => {
          if (res.data.code === 200){
            this.$router.push({path:'index'})
          } else {
            alert(res.data.data)
          }
        })
      },
      register(){
        this.$router.push({path:'register'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../css/login.css';
</style>
