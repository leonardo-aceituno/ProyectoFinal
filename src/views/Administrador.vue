<template>
  <div>
    <v-card flat class="d-flex justify-center my-1 py-2">
      <v-card-title class="size32"> Mi Cuenta </v-card-title>
    </v-card>

    <v-row justify="center" no-gutters class="my-12">
      <v-col xs="10" sm="8" md="4" class="mb-6">
        <v-tabs centered class="mb-5" background-color="#fbfbfb">
          <v-tabs-slider color="#FF7D30"></v-tabs-slider>
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
  </div>
</template>

<script>
import IniciarSesion from '@/components/sesion/IniciarSesion';
import CrearCuenta from '@/components/sesion/CrearCuenta';

export default {
  name: 'Administrador',
  components: { IniciarSesion, CrearCuenta },
  data() {
    return { show: true };
  },
  methods: {},
};
</script>

<style scoped>
.titulo {
  font-size: 1.875rem;
  color: #ffffff;
  font-weight: normal;
}
</style>
