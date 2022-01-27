<template>
  <v-container id="EmpresasDestacadas" class="my-15">
    <h2 class="text-h4 text-center blue-grey--text text--darken-4 mb-15">
      Empresas Destacadas
    </h2>

    <v-row class="mt-5">
      <v-col
        xs="6"
        sm="4"
        md="4"
        v-for="(item, index) in empresasDestacadas"
        :key="index"
      >
        <Card :item="item" />
      </v-col>
    </v-row>

    <div class="mt-15 d-flex justify-center">
      <v-btn color="blue-grey darken-4" outlined large to="/empresas">
        Ver todas las Empresas
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import Card from "@/components/card/Card";
import { mapGetters } from "vuex";

export default {
  name: "EmpresasDestacadas",
  components: { Card },
  data() {
    return { model: true };
  },
  computed: {
    ...mapGetters("empresas", ["empresasDestacadas"]),
  },
};
</script>

<style scoped></style>
