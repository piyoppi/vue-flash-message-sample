import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex);

import noticeMessageBoxStore from "./components/noticeMessageBox/noticeMessageBoxStore.js"
import appOptions from './main.vue'

let store = new Vuex.Store({
  modules: {
    noticeMessageBoxStore
  }
});

window.addEventListener("load", ()=>{
  const app = Object.assign(appOptions, {
    el: '#app-entrypoint',
    store: store
  });
  new Vue(app);
}, false);

