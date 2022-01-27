<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/app/Navbar.vue";
import Footer from "@/components/app/Footer";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: { Navbar, Footer },
  data: () => ({}),
  created() {
    this.obtenerEmpresas();
  },
  methods: { ...mapActions("empresas", ["obtenerEmpresas"]) },
};
</script>

<style></style>
