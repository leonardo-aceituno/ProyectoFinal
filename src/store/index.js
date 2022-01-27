import Vue from "vue";
import Vuex from "vuex";
import usuarios from "./modules/usuarios";
import empresas from "./modules/empresas";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { usuarios, empresas },
  plugins: [createPersistedState()],
});
