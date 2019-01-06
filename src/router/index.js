import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import index from '@/components/index'
import weather from '@/components/common/weather'
import music from '@/components/common/music'
import music_details from '@/components/common/music-details'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path: '/weather',
          name: 'weather',
          component: weather
        },
        {
          path: '/music',
          name: 'music',
          component: music
        }
      ]
    },
    {
      path: '/music_details',
      name: 'music_details',
      component: music_details
    }
  ]
})
