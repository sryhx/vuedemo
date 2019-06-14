import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/reset.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import NavHead from './components/comm/NavHead'
Vue.component(NavHead.name,NavHead)

import Moment from 'moment'

Vue.filter('convertTime',function(data,str){
  return Moment(data).format(str)
})


Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
