import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'
import vant from './plugins/vant'
import func from './utils/func'
import filter from './filter'
import VueClipboard from 'vue-clipboard2'
import globalComponent from './components/common/global'
import 'amfe-flexible'
import '@/styles/index.less'

Vue.use(filter)
Vue.use(vant)
Vue.use(globalComponent)
Vue.use(VueClipboard)

Vue.prototype.config = config
Vue.prototype.func = func

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
