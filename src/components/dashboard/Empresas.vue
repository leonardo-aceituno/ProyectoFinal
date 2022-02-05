<template>
  <div class="mt-5">
    <v-card
      v-for="(item, i) in buscaEmpresa()"
      :key="i"
      class="mb-5"
      tile
      elevation="5"
    >
      <v-row>
        <v-col
          class="d-flex justify-center align-center order-1 order-sm-1 order-md-0"
          cols="12"
          xs="12"
          sm="12"
          md="2"
        >
          <v-avatar class="" size="120" tile>
            <v-img :src="item.data.imagen" contain></v-img>
          </v-avatar>
        </v-col>

        <v-col cols="12" md="9" class="order-2 order-sm-2 order-md-1">
          <v-card-title class="" v-text="item.data.nombre"></v-card-title>

          <v-card-subtitle>
            <v-icon size="15">mdi-map-marker</v-icon>
            {{ item.data.region }} - {{ item.data.comuna }}
          </v-card-subtitle>
          <v-card-text v-text="item.data.descripcion"></v-card-text>

          <v-card-actions>
            <v-btn
              v-if="item.data.instagram != ''"
              class="ml-2 mt-3"
              fab
              icon
              height="40px"
              right
              width="40px"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>

            <v-btn
              v-if="item.data.facebook != ''"
              class="ml-2 mt-3"
              fab
              icon
              height="40px"
              right
              width="40px"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>

            <v-btn
              v-if="item.data.twitter != ''"
              class="ml-2 mt-3"
              fab
              icon
              height="40px"
              right
              width="40px"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>

            <v-btn
              v-if="item.data.web != ''"
              class="ml-2 mt-3"
              fab
              icon
              height="40px"
              right
              width="40px"
            >
              <v-icon>mdi-web</v-icon>
            </v-btn>

            <div>
              <v-btn
                v-if="item.data.destacado == true"
                class="ml-2 mt-3"
                fab
                icon
                height="40px"
                right
                width="40px"
              >
                <v-icon>mdi-star</v-icon>
              </v-btn>

              <v-btn
                v-else
                class="ml-2 mt-3"
                fab
                icon
                height="40px"
                right
                width="40px"
              >
                <v-icon>mdi-star-outline</v-icon>
              </v-btn>
            </div>

            <div>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-if="item.data.activo == true"
                    v-bind="attrs"
                    v-on="on"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                  </v-btn>
                </template>
                <span>Activado</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-if="item.data.activo == false"
                    v-bind="attrs"
                    v-on="on"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-radiobox-blank</v-icon>
                  </v-btn>
                </template>
                <span>Desactivado</span>
              </v-tooltip>
            </div>
          </v-card-actions>
        </v-col>

        <v-col
          cols="12"
          md="1"
          class="d-flex flex-md-column justify-end justify-md-start align-center order-0 order-sm-0 order-md-2"
        >
          <v-btn icon @click="editarEmpresa(item)">
            <v-icon color="grey lighten-1">mdi-pencil</v-icon>
          </v-btn>

          <v-btn icon @click="eliminarEmpresa(item)">
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Empresas",
  data() {
    return {};
  },
  computed: {
    ...mapState("usuarios", ["usuario"]),
    ...mapState("empresas", ["empresas"]),
    ...mapState("mensajes", ["mensajes"]),
  },
  methods: {
    ...mapActions("empresas", ["guardarEmpresa"]),

    buscaEmpresa() {
      const identificador = this.usuario.uid;
      const empresas = this.empresas;

      if (identificador == "7JnMLUZHvEhrx6wTCYSCzlrqzyC2") {
        return empresas;
      } else {
        return empresas.filter((item) => {
          return item.data.key == identificador;
        });
      }
    },

    editarEmpresa(item) {
      console.log("aqui se edita", item);
      this.guardarEmpresa(item);
      this.$router.push({ name: "editar" });
    },

    eliminarEmpresa(item) {
      this.guardarEmpresa(item);
      this.$router.push({ name: "eliminar" });
    },
  },
};
</script>

<style></style>
