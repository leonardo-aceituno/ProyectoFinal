<template>
  <section>
    <v-row justify="center" class="pt-8 blue-grey darken-4">
      <v-col md="6" class="d-flex justify-center">
        <h1 class="text-center blue-grey--text text--lighten-5" dark>
          EMPRESAS
        </h1>
      </v-col>
    </v-row>

    <v-container class="mt-15">
      <v-row>
        <v-col
          xs="6"
          sm="4"
          md="3"
          v-for="(item, index) in empresasActivas"
          :key="index"
        >
          <Card :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Card from "@/components/card/Card";

export default {
  name: "Empresas",
  components: { Card },
  data() {
    return {};
  },
  computed: {
    ...mapState("empresas", ["empresas"]),
    ...mapGetters("empresas", ["empresasActivas"]),
  },
  methods: {},
};
</script>

<style></style>
