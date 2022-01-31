<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto py-3"
        max-width="320"
        height="100%"
        elevation="3"
        flat
      >
        <!-- <v-row>
          <v-col cols="12">
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
          </v-col>
        </v-row> -->

        <div class="contenedor mt-5">
          <div class="izquierda">
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
          </div>
          <div class="derecha">
            <div class="d-flex justify-center">
              <v-avatar class="ma-3 text-center" size="200" tile>
                <v-img :src="item.data.imagen" contain> </v-img>
              </v-avatar>
            </div>
          </div>
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

        <!-- <v-card-actions class="text-center">
          <v-btn
            block
            color="blue-grey darken-4"
            dark
            @click="vistaEmpresa(item)"
          >
            ver empresa
          </v-btn>
        </v-card-actions> -->

        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#036358">
            <v-btn @click="vistaEmpresa(item)"> ver empresa </v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Card",
  props: { item: { type: Object } },
  data() {
    return { overlay: false };
  },
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

<style scoped>
.contenedor {
  position: relative;
}
.izquierda {
  position: absolute;
  bottom: 214px;
  left: 0px;
}
</style>
