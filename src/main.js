// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import imglist from "./components/imglist.vue"
import imginfos from "./components/imginfos.vue"
import { Loading } from 'vux'

Vue.component('loading', Loading)
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home,
  meta:{
    keepAlive: true
  },
  children:[
    {
      path:"imglist/:id",
      component : imglist,
      props: true,
      meta:{
        keepAlive: true
      },
        
      
    },
    
  ]
  },
  {
    path:"/imginfo/:id/:num/:nimg",
    component : imginfos,
    props: true,
  }
]

const router = new VueRouter({
 
  routes
})
router.push('/imglist/jczs')
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
