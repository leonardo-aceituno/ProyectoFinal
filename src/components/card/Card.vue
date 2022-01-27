<template>
  <v-card class="mx-auto py-3" max-width="320" elevation="3" flat>
    <v-chip
      v-show="item.data.destacado == true"
      class="ma-2"
      outlined
      small
      float
      color="danger"
      text-color="danger"
      dense
    >
      <v-icon left> mdi-fire </v-icon>
      Destacado
    </v-chip>
    <div class="d-flex justify-center">
      <v-avatar class="ma-3 text-center" size="200" tile>
        <v-img :src="item.data.imagen" contain></v-img>
      </v-avatar>
    </div>

    <v-card-title class="text-left">
      <span class="mt-n3 blue-grey--text text--darken-4">
        {{ item.data.nombre }}
      </span>
    </v-card-title>

    <v-card-subtitle class="text-center text-justify">
      {{ item.data.descripcion }}
    </v-card-subtitle>
    <v-spacer></v-spacer>
    <v-card-actions class="text-center">
      <v-btn block color="blue-grey darken-4" dark @click="vistaEmpresa(item)">
        ver empresa</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Card",
  props: { item: { type: Object } },
  methods: {
    ...mapActions("empresas", ["guardarEmpresa"]),

    vistaEmpresa(empresa) {
      const nombreEmpresa = empresa.data.nombre.replace(/ /g, "-");
      this.guardarEmpresa(empresa);
      this.$router.push({
        name: "empresa",
        params: { empresa: nombreEmpresa },
      });
    },
  },
};
</script>

<style></style>
