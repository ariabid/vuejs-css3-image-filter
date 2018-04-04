import Vue from 'vue'
import ImageFilterApp from './ImageFilterApp.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ImageFilterApp)
}).$mount('#app')
