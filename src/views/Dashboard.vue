<template>
  <div color="#2A8D80" class="mb-15">
    <v-card flat class="d-flex justify-center my-1 py-2">
      <v-card-title class="size32"> Dashboard </v-card-title>
    </v-card>

    <v-container>
      <v-toolbar flat color="#fbfbfb">
        <v-toolbar-title>Usuario: {{ usuario.email }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-list-item-icon class="mx-auto">
            <v-btn
              v-if="usuario.uid == administrador || buscaEmpresa().length == 0"
              color="#FF8A38"
              @click="crearEmpresa"
              dark
              id="test_crearempresa"
            >
              Crear Empresa
            </v-btn>
          </v-list-item-icon>
        </v-toolbar-items>
      </v-toolbar>

      <v-tabs left class="mb-5" color="#FFFFFF" background-color="#58ADE3">
        <v-tabs-slider color="#FC6800"></v-tabs-slider>

        <v-tab @click="show = 1"
          ><v-icon left> mdi-account </v-icon>
          <span v-if="usuario.uid == administrador">Empresas</span>
          <span v-else>Mi Empresa</span>
        </v-tab>

        <v-tab @click="show = 2">
          <v-icon left> mdi-android-messages </v-icon>
          Mensajes
        </v-tab>

        <v-tab v-if="usuario.uid == administrador" @click="show = 3">
          <v-icon left> mdi-numeric </v-icon>
          Estadisticas
        </v-tab>
      </v-tabs>

      <template v-if="show == 1">
        <Empresas />
      </template>
      <template v-if="show == 2">
        <Mensajes />
      </template>
      <template v-if="show == 3">
        <Estadisticas />
      </template>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import Empresas from '@/components/dashboard/Empresas';
import Mensajes from '@/components/dashboard/Mensajes';
import Estadisticas from '@/components/dashboard/Estadisticas';

export default {
  name: 'Dashboard',
  components: { Empresas, Mensajes, Estadisticas },
  data() {
    return { show: 1 };
  },

  computed: {
    ...mapState('usuarios', ['usuario']),
    ...mapState('empresas', ['empresas']),
    ...mapState('mensajes', ['mensajes']),
    ...mapState(['administrador']),
  },
  methods: {
    crearEmpresa() {
      this.$router.push({ name: 'crear' });
    },

    buscaEmpresa() {
      const identificador = this.usuario.uid;
      const empresas = this.empresas;

      if (identificador == '7JnMLUZHvEhrx6wTCYSCzlrqzyC2') {
        return empresas;
      } else {
        return empresas.filter((item) => {
          return item.data.key == identificador;
        });
      }
    },
  },
};
</script>

<style scoped>
.titulo {
  font-size: 1.875rem;
  color: #ffffff;
  font-weight: normal;
}
</style>
