<template>
  <div class="py-7 colorFondo">
    <div class="d-flex flex-column flex-sm-row justify-sm-space-around">
      <div class="align-center d-none d-sm-flex">
        <strong class="pe-5 size20 bold">¿Tienes una Empresa? </strong> Déjame
        ver si puedo ayudar.
      </div>

      <v-btn class="" color="#3D9BE9" dark large @click="enviarComentario">
        Contacto
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: 'contacto',
  data() {
    return {};
  },
  computed: {
    ...mapState(['administrador']),
  },
  methods: {
    ...mapActions('mensajes', ['actualizaEmpresaContacto']),

    enviarComentario() {
      const identificador = this.administrador;

      this.actualizaEmpresaContacto(identificador);
      this.$router.push({ name: 'contacto' });
    },
  },
};
</script>

<style scoped>
.colorFondo {
  background-color: #ffffff;
}
</style>
