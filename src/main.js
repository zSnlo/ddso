import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false


if(process.env.NODE_ENV=='production'){
  Vue.prototype.imgUrl = 'https://zsnlo.github.io/ddso/' //设置图片的基础路径
}else if(process.env.NODE_ENV=='development'){
  Vue.prototype.imgUrl =  '' //设置图片的基础路径
};



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
