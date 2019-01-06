// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AMap from 'vue-amap';

Vue.config.productionTip = false
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: '07a607e639a74622330881d3b15c39d7',//刚刚开发者申请哪里的key
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView',
    'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor',
    'AMap.CircleEditor','AMap.Geolocation']
});

import './css/public.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
