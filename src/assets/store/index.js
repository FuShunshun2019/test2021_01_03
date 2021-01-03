import Vue from 'vue';
import Vuex from 'vuex';
// import axios from "axios";
//履约管理store
import zupu from "./zupu.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    zupu
  },

});

export default store;