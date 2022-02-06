<template>
  <div class="colorFondo mb-15">
    <v-card
      v-for="(item, index) in buscaMensajes()"
      :key="index"
      class="mt-1"
      flat
      tile
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>{{ item.data.nombre }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ item.data.email }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{ item.data.mensaje }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: 'mensajes',
  data() {
    return { hola: true };
  },
  computed: {
    ...mapState('usuarios', ['usuario']),
    ...mapState('mensajes', ['mensajes']),
  },
  methods: {
    buscaMensajes() {
      const identificador = this.usuario.uid;
      const mensajes = this.mensajes;
      // if (identificador == '7JnMLUZHvEhrx6wTCYSCzlrqzyC2') {
      //   return mensajes;
      // } else {
      //   return mensajes.filter((item) => {
      //     return item.data.key == identificador;
      //   });
      // }

      return mensajes.filter((item) => {
        return item.data.key == identificador;
      });
    },
  },
};
</script>

<style scoped>
.colorFondo {
  background-color: #58ade3;
}
</style>
