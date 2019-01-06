<template>
  <div class="body">
    <header>
      <i class="iconfont icon-fanhui" @click="goback()"></i>
      <span class="center">{{data.title}}</span>
      <span class="right"></span>
    </header>
    <audio v-bind:src="data.url" autoplay></audio>
    <ul>
      <!--<li>{{data.lrc}}}</li>-->
    </ul>
    <div class="title">{{data.title}}</div>
    <div class="author">{{data.author}}</div>
    <div class="img">
      <img v-bind:src="data.pic" alt="">
    </div>
    <div class="bg">
      <img v-bind:src="data.pic" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "music-details",
    data() {
      return {
        data: [],
      }
    },
    created() {
      this.data = this.$route.params.data;
    },
    methods:{
      goback() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  header{
    width: 100%;
    height: 2.5rem;
    position: fixed;
    top: 0;
    background: rgba(156,25,47,0.8);
    overflow: hidden;
  }

  .right,.center{
    line-height: 2.5rem;
    flex: 1;
    text-align: center;
    color: white;
  }

  i{
    font-size: 18px;
    font-weight: bold;
    line-height: 2.5rem;
    margin-left: 0.5rem;
    flex: 1;
    color: white;
  }
  * {
    margin: 0;
    padding: 0;
  }

  .body {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .img {
    width: auto;
    height: auto;
    text-align: center;
    margin-top: 2vh;
    -webkit-animation: haha1 10s linear infinite;
  }

  @-webkit-keyframes haha1 {

    0% {
      -webkit-transform: rotate(0deg);
    }

    25% {
      -webkit-transform: rotate(90deg);
    }

    50% {
      -webkit-transform: rotate(180deg);
    }

    75% {
      -webkit-transform: rotate(270deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }

  }

  .img img {
    border-radius: 50%;

  }

  .title {
    text-align: center;
    margin-top: 16vh;
    font-size: 18px;
  }

  .author {
    text-align: center;
    margin-top: 1vh;
    color: silver;
    font-size: 14px;
  }
  .bg img{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.2;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }
</style>
