<template>
  <div>
    <header>
      <span>{{city}}</span>
    </header>
    <div class="weather">
      <ul v-for="temp in data.forecast">
        <li>{{temp.date.substring(temp.date.length-3)}}</li>
        <li>{{temp.high}}</li>
        <li>{{temp.low}}</li>
        <li>{{temp.type}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "weather",
    data() {
      return {
        city: '北京',
        data:[]
      }
    },
    mounted() {
      this.weather()
    },
    methods: {
      weather() {
        let url = "https://www.apiopen.top/weatherApi?city=" + this.city;
        axios.get(url).then((res) => {
          console.log(res.data.data);
          this.data = res.data.data
        })
      }
    }
  }
</script>

<style scoped>
@import "../../css/common/weather.css";
</style>
