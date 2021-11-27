// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//importation des css
import '@/assets/css/normalize.css'
import '@/assets/css/style.css'
import '@/assets/css/typography.css'
import '@/assets/css/menu.css'
import '@/assets/css/layout.css'
import '@/assets/css/basics.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
