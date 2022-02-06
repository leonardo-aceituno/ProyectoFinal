import axios from 'axios';

const state = {
  regiones: null,
  codigo: null,
  comunas: null,
};

const mutations = {
  SET_REGIONES(state, regiones) {
    state.regiones = regiones;
  },
  SET_COMUNAS(state, comunas) {
    state.comunas = comunas;
  },

  SET_CODIGO(state, codigo) {
    state.codigo = codigo;
  },
};

const actions = {
  obtenerRegiones({ commit }) {
    axios.get('https://apis.digital.gob.cl/dpa/regiones').then((response) => {
      const regiones = response.data;
      commit('SET_REGIONES', regiones);
    });
  },

  obtenerComunas({ commit }, codigo) {
    const url =
      'https://apis.digital.gob.cl/dpa/regiones/' + codigo + '/comunas';
    axios.get(url).then((response) => {
      const array = response.data;
      const comunas = array.map((item) => item.nombre);
      commit('SET_COMUNAS', comunas);
    });
  },

  actulizaCodigo({ commit }, codigo) {
    console.log('actualiza codigo');
    commit('SET_CODIGO', codigo);
  },
};

const getters = {
  nombreRegion(state) {
    const regiones = state.regiones;
    return regiones.map((item) => item.nombre);
  },

  todas(state) {
    const regiones = state.regiones;
    const todas = regiones.map((item) => item.nombre);
    console.log('aqui todas', todas);
    todas.push('Todas');
    console.log('aqui todas++', todas);
    return todas;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
