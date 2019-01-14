import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

const width: number = document.documentElement.clientWidth

new Vue({
  render: h => h(App),
}).$mount('#app')
