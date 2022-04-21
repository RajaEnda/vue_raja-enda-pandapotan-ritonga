import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Vuetify from 'vuetify'

Vue.config.productionTip = false
Vue.use(Vuetify);

const vuetify = new Vuetify({});


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')