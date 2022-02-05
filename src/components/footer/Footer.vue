<template>
  <div>
    <div class="py-10 colorFondo">
      <div class="d-flex justify-space-around">
        <div class="d-flex align-center">
          <strong>¿Tienes una Empresa? </strong>Déjame ver si puedo ayudar.
        </div>
        <v-btn class="" color="#0F85D1" dark large to="/empresas">
          Contacto
        </v-btn>
      </div>
    </div>

    <div class="py-10 colorFondo">
      <div class="d-flex justify-space-around">
        <div class="d-flex align-center">
          <strong>¿Tienes una Empresa? </strong>Déjame ver si puedo ayudar.
        </div>
        <v-btn class="" color="#0F85D1" dark large to="/empresas">
          Contacto
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-instagram', 'mdi-facebook', 'mdi-twitter'],
  }),
};
</script>

<style scoped>
.colorFondo {
  background-color: #ffffff;
}
</style>
