import Vue from "vue";
import Vuex from "vuex";

import todo from "./todo";

Vue.use(Vuex);

const Store = new Vuex.Store({
  modules: {
    todo,
  },
});

export default Store;
