import Vue from 'vue'
import App from './App.vue'
Vue.filter('toLowerCase',(data)=>{
	return data.toLowerCase();

});
new Vue({
  el: '#app',
  render: h => h(App)
})
