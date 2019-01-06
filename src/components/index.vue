<template>
  <div class="body">
      <div class="link">
        <router-link to="/weather">天气</router-link>
        <router-link to="/music">音乐</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "index",
    data(){
      return{
        city:'北京'
      }
    },
    mounted(){
      // this.weather()
    },
    methods:{
      weather(){
        let url = "https://www.apiopen.top/weatherApi?city="+this.city;
        axios.get(url).then((res)=>{
          console.log(res.data.data)
        })
      }
    }
  }
</script>

<style scoped>
@import "../css/index.css";
</style>
