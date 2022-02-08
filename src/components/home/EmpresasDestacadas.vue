<template>
  <div id="empresasDestacadas" class="mb-15">
    <v-card flat class="d-flex flex-column align-center justify-center py-5">
      <v-card-title class="size32"> Empresas Destacadas </v-card-title>
    </v-card>

    <v-container>
      <v-row class="my-5">
        <v-col
          xs="6"
          sm="4"
          md="3"
          v-for="(item, index) in empresasDestacadas"
          :key="index"
        >
          <Card :item="item" />
        </v-col>
      </v-row>

      <div class="d-flex justify-center mt-15">
        <v-btn class="" color="#0F85D1" dark large to="/empresas">
          Ver todas las Empresas
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import Card from '@/components/card/Card';
import { mapGetters } from 'vuex';

export default {
  name: 'EmpresasDestacadas',
  components: { Card },
  data() {
    return { model: true };
  },
  computed: {
    ...mapGetters('empresas', ['empresasDestacadas']),
  },
};
</script>

<style scoped></style>
