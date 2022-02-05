import { collection, getFirestore, onSnapshot } from 'firebase/firestore';

const state = {
  empresas: null,
  empresa: null,
};

const mutations = {
  SET_EMPRESAS(state, empresas) {
    state.empresas = empresas;
  },

  SET_EMPRESA(state, empresa) {
    state.empresa = empresa;
  },
};

const actions = {
  obtenerEmpresas({ commit }) {
    const db = getFirestore();
    onSnapshot(collection(db, 'empresas'), (querySnapshot) => {
      const empresas = [];
      querySnapshot.forEach((doc) => {
        empresas.push({ id: doc.id, data: doc.data() });
      });
      commit('SET_EMPRESAS', empresas);
    });
  },

  guardarEmpresa({ commit }, empresa) {
    commit('SET_EMPRESA', empresa);
  },
};

const getters = {
  empresasDestacadas(state, getters) {
    return getters.empresasActivas.filter((item) => {
      return item.data.destacado == true;
    });
  },
  empresasActivas(state) {
    return state.empresas.filter((item) => {
      return item.data.activo == true;
    });
  },

  totalEmpresas(state) {
    return state.empresas.length;
  },
  totalEmpresasActivas(state) {
    const cantidad = state.empresas.filter((item) => {
      return item.data.activo == true;
    });

    return cantidad.length;
  },
  totalEmpresasDestacadas(state, getters) {
    const cantidad = getters.empresasActivas.filter((item) => {
      return item.data.destacado == true;
    });

    return cantidad.length;
  },

  usuariosRegistrados(state) {
    const usuarios = state.empresas.map((item) => item.data.key);
    const unicos = usuarios.filter((item, index) => {
      return usuarios.indexOf(item) === index;
    });
    return unicos.length;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
