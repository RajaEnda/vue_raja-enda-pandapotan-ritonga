import Vue from 'vue';
import App from './App.vue';
import router from "@/router/index";
import compositionApi from "@vue/composition-api";
import {createProvider} from './vue-apollo';
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(compositionApi)
Vue.use(BootstrapVue)

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app')
 