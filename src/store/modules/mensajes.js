import { collection, getFirestore, onSnapshot } from 'firebase/firestore';

const state = {
  empresaContacto: null,
  mensajes: null,
};

const mutations = {
  SET_EMPRESA(state, identificador) {
    state.empresaContacto = identificador;
  },

  SET_MENSAJES(state, mensajes) {
    state.mensajes = mensajes;
  },
};

const actions = {
  actualizaEmpresaContacto({ commit }, identificador) {
    commit('SET_EMPRESA', identificador);
  },

  obtenermensajes({ commit }) {
    const db = getFirestore();
    onSnapshot(collection(db, 'mensajes'), (querySnapshot) => {
      const mensajes = [];
      querySnapshot.forEach((doc) => {
        mensajes.push({ id: doc.id, data: doc.data() });
      });
      commit('SET_MENSAJES', mensajes);
    });
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
