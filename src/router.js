
import VueRouter from 'vue-router';
import App from "./App.vue";

// import Child1 from "./assets/components/Child1.vue";

const router = new VueRouter({
  mode: 'history',
  routes:[
      {
        path:"/",
        component:App
      }
      
      
	]
});

export default router;