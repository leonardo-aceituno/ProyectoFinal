<template>
  <v-container class="mt-10">
    <h1 class="text-center text-h4 font-weight-light">Mi Cuenta</h1>

    <v-row justify="center" no-gutters class="mt-5">
      <v-col xs="10" sm="8" md="6" class="mb-6">
        <v-tabs centered>
          <v-tabs-slider></v-tabs-slider>
          <v-tab @click="show = true">Iniciar Sesión </v-tab>
          <v-tab @click="show = false">Crear Cuenta</v-tab>
        </v-tabs>
        <template v-if="show">
          <IniciarSesion />
        </template>
        <template v-if="!show">
          <CrearCuenta />
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IniciarSesion from "@/components/sesion/IniciarSesion";
import CrearCuenta from "@/components/sesion/CrearCuenta";

export default {
  name: "Administrador",
  components: { IniciarSesion, CrearCuenta },
  data() {
    return { show: true };
  },
  methods: {},
};
</script>

<style></style>
