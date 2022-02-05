<template>
  <div>
    <v-alert
      color="warning"
      border="right"
      elevation="2"
      colored-border
      icon="mdi-domain"
    >
      Total empresas registradas <strong>{{ totalEmpresas }}</strong> .
    </v-alert>

    <v-alert
      color="warning"
      border="right"
      elevation="2"
      colored-border
      icon="mdi-bell-ring"
    >
      Total empresas activas <strong>{{ totalEmpresasActivas }}</strong> .
    </v-alert>

    <v-alert
      color="warning"
      border="right"
      elevation="2"
      colored-border
      icon="mdi-star"
    >
      Total empresas destacadas <strong>{{ totalEmpresasDestacadas }}</strong> .
    </v-alert>

    <v-alert
      color="warning"
      border="right"
      elevation="2"
      colored-border
      icon="mdi-account"
    >
      Total usurios registrados <strong>{{ usuariosRegistrados }}</strong> .
    </v-alert>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'estaditicas',
  data() {
    return {
      items: [
        { nombre: 'Total empresas registradas', getters: '{{totalEmpresas}}' },
      ],
    };
  },
  computed: {
    ...mapGetters('empresas', ['totalEmpresas']),
    ...mapGetters('empresas', ['totalEmpresasActivas']),
    ...mapGetters('empresas', ['totalEmpresasDestacadas']),
    ...mapGetters('empresas', ['usuariosRegistrados']),
  },
  methods: {},
};
</script>

<style></style>
