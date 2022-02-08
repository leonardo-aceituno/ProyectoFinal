<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <RedesSociales />
    <Contacto />
  </v-app>
</template>

<script>
import Navbar from '@/components/nav/Navbar.vue';
import Footer from '@/components/footer/Footer';
import RedesSociales from '@/components/footer/RedesSociales';
import Contacto from '@/components/footer/Contacto';

import { mapActions } from 'vuex';
export default {
  name: 'App',
  components: { Navbar, Footer, Contacto, RedesSociales },
  data: () => ({}),
  created() {
    this.obtenerEmpresas();
    this.obtenerRegiones();
    this.obtenermensajes();
  },
  methods: {
    ...mapActions('empresas', ['obtenerEmpresas']),
    ...mapActions('ubicacion', ['obtenerRegiones']),
    ...mapActions('mensajes', ['obtenermensajes']),
  },
};
</script>

<style>
#app {
  font-family: 'Varela Round', sans-serif;
  /* background-color: #2a8d80; */
  background-color: #fbfbfb;
}

.size40 {
  font-size: 2.5rem;
}
.size32 {
  font-size: 2rem;
}
.size30 {
  font-size: 1.875rem;
}

.size24 {
  font-size: 1.5rem;
}

.size20 {
  font-size: 1.25rem;
}

.size14 {
  font-size: 0.875rem;
}

.size12 {
  font-size: 0.75rem;
}

.size10 {
  font-size: 0.625rem;
}

.size08 {
  font-size: 0.563rem;
}

.bold {
  font-weight: bold;
}
</style>
