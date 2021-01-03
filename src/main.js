import Vue from 'vue';
import VueRouter from 'vue-router';
import router from "./router.js";

import App from './App.vue';


//引入数据store
import store from "./assets/store/index.js";

Vue.use(VueRouter);

const vm = new Vue({
  el: '#app',
  router,
  store,
  data:{
  	h:"hello world!"
  },
  
  components:{
  	App
  },
  methods:{
  },
  computed:{
  
  }
  // render:function(h){
  //   // console.log(h)//h是一个函数
  //   return h(App)
  // }
});


