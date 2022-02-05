import Vue from 'vue';
import Vuex from 'vuex';
import usuarios from './modules/usuarios';
import empresas from './modules/empresas';
import ubicacion from './modules/ubicacion';
import mensajes from './modules/mensajes';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { administrador: '7JnMLUZHvEhrx6wTCYSCzlrqzyC2' },
  mutations: {},
  actions: {},
  modules: { usuarios, empresas, ubicacion, mensajes },
  plugins: [createPersistedState()],
});
