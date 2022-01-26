const state = {
  usuario: null,
};

const mutations = {
  SET_USUARIO(state, usuario) {
    state.usuario = usuario;
  },
};

const actions = {
  actualizarUsuario({ commit }, usuario) {
    commit("SET_USUARIO", usuario);
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
