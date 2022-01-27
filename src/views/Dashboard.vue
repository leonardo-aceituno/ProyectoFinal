<template>
  <v-container class="mt-10">
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h1 class="text-center font-weight-light">Dashboard</h1>
      <v-btn color="blue" @click="crearEmpresa" dark> Crear Empresa </v-btn>
    </v-subheader>
    <p>
      <!-- usuario: <span>{{ usuario.email }}</span> -->
    </p>

    <v-container>
      <v-row dense>
        <!-- <v-col cols="12">
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5"> Unlimited music now </v-card-title>

            <v-card-subtitle
              >Listen to your favorite artists and albums whenever and wherever,
              online and offline.</v-card-subtitle
            >

            <v-card-actions>
              <v-btn text> Listen Now </v-btn>
            </v-card-actions>
          </v-card>
        </v-col> -->

        <v-col v-for="(item, i) in empresas" :key="i" cols="12">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="item.data.imagen" contain></v-img>
                </v-avatar>
                <div>
                  <v-card-title
                    class=""
                    v-text="item.data.nombre"
                  ></v-card-title>

                  <v-card-subtitle
                    v-text="item.data.descripcion"
                  ></v-card-subtitle>

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

                    <!-- descatado -->
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

                    <!-- activo -->
                    <div>
                      <v-btn
                        v-if="item.data.activo == true"
                        class="ml-2 mt-3"
                        fab
                        icon
                        height="40px"
                        right
                        width="40px"
                      >
                        <v-icon>mdi-checkbox-marked-circle</v-icon>
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
                        <v-icon>mdi-radiobox-blank</v-icon>
                      </v-btn>
                    </div>
                  </v-card-actions>
                </div>
              </div>
              <div>
                <v-list-item-action class="px-auto">
                  <v-btn icon @click="editarEmpresa(item)">
                    <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon @click="eliminar(producto)">
                    <v-icon color="grey lighten-1">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {};
  },

  computed: {
    ...mapState("usuarios", ["usuario"]),
    ...mapState("empresas", ["empresas"]),
  },
  methods: {
    ...mapActions("empresas", ["guardarEmpresa"]),

    crearEmpresa() {
      this.$router.push({ name: "crear" });
    },

    editarEmpresa(item) {
      console.log("aqui se edita", item);
      this.guardarEmpresa(item);
      this.$router.push({ name: "editar" });
    },
  },
};
</script>

<style></style>
