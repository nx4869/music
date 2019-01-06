<template>
  <div>
    <header>
      <input type="text" placeholder="输入歌名" v-model="name">
      <button @click="clickme()">搜索</button>
    </header>
    <div class="music-list">
      <dl v-for="temp in data" @click="music(temp)">
        <dt><img v-bind:src='temp.pic' alt=""></dt>
        <dd>
          <span class="title">{{temp.title}}</span>
          <span class="author">{{temp.author}}</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "music",
    data() {
      return {
        name:'',
        data:[]
      }
    },
    mounted() {
    },
    methods: {
      clickme() {
        let url = "https://api.apiopen.top/searchMusic?name="+this.name;
        axios.get(url).then((res) => {
          console.log(res.data.result);
          this.data = res.data.result
        })
      },
      music(val){
        this.$router.push({name:'music_details',params:{data:val}})
        // this.url = val
      }
    }
  }
</script>

<style scoped>
  @import "../../css/common/music.css";
</style>
