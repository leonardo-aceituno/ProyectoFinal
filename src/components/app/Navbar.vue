<template>
  <nav class="nav">
    <v-app-bar app class="blue-grey darken-4 text-center" dark flat>
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = !drawer">
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <span>EMPDMNTO</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-list-item-icon>
          <v-btn text to="/">inicio </v-btn>
          <v-btn text to="/empresas">Empresas </v-btn>
          <v-btn text to="/contacto">Contacto </v-btn>
          <v-divider vertical></v-divider>
          <v-btn v-if="!usuario" text to="/administrador">Publicar</v-btn>
          <v-btn v-if="usuario" text to="/dashboard">Mi Cuenta</v-btn>
          <v-btn v-if="usuario" text @click="cerrarSesion">Salir</v-btn>
        </v-list-item-icon>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue-grey--text text--darken-4"
        >
          <v-list-item v-if="usuario" to="/dashboard">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Mi Cuenta</v-list-item-title>
          </v-list-item>

          <v-divider v-if="usuario"></v-divider>

          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/empresas">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-list</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Empresas</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!usuario" to="/administrador">
            <v-list-item-icon>
              <v-icon>mdi-tag</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Publicar</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="usuario" @click="cerrarSesion">
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

import { getAuth, signOut } from "firebase/auth";

export default {
  name: "Navbar",
  data() {
    return { drawer: false, group: null };
  },
  computed: {
    ...mapState("usuarios", ["usuario"]),
  },
  methods: {
    ...mapActions("usuarios", ["actualizarUsuario"]),

    redirect() {
      if (this.$route.path != "/") this.$router.push({ name: "Home" });
    },
    mensaje() {
      this.$swal({
        title: "Hasta la proxima!",
        text: "Has cerrado la sesión",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
    },

    async cerrarSesion() {
      const auth = getAuth();
      await signOut(auth);
      this.actualizarUsuario(null);
      this.redirect();
      this.mensaje();
    },
  },
};
</script>

<style scoped></style>
