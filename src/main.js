import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'


import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


Vue.config.productionTip = false

 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBgvv6YLLJ9qYhai_rOF21UNJb_09MjJbE',
    libraries: 'places',
  },
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
