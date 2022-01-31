<template>
  <section>
    <v-row justify="center" class="pt-8 blue-grey darken-4">
      <v-col md="6" class="d-flex justify-center">
        <h1 class="text-center blue-grey--text text--lighten-5" dark>
          {{ empresa.data.nombre }}
        </h1>
      </v-col>
    </v-row>

    <v-container class="my-15">
      <v-row>
        <!-- COLUMNA IZQUIERDA -->
        <v-col cols="12" sm="7" md="8">
          <v-container>
            <v-row>
              <v-col cols="12" class="d-flex justify-center">
                <v-avatar class="ma-3" size="250" tile>
                  <v-img :src="empresa.data.imagen" contain></v-img>
                </v-avatar>
              </v-col>

              <v-col cols="12" class="mt-5">
                <p class="text-justify">{{ empresa.data.descripcion }}</p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>

        <!-- COLUMNA DERECHA -->
        <v-col cols="12" sm="5" md="4">
          <v-container>
            <v-row>
              <v-col cols="12">
                <h2>{{ empresa.data.nombre }}</h2>
                <h6>{{ empresa.data.categoria }}</h6>
              </v-col>

              <v-col cols="12" class="mt-n4">
                <p><strong>Region :</strong> {{ empresa.data.region }}</p>
                <p class="mt-n5">
                  <strong>Comuna :</strong> {{ empresa.data.comuna }}
                </p>
              </v-col>

              <v-col cols="12" class="mt-n8">
                <v-divider></v-divider>
                <v-container>
                  <div class="d-flex justify-start">
                    <v-icon size="18" class="pe-2">mdi-account</v-icon>
                    <h4>{{ empresa.data.responsable }}</h4>
                  </div>
                  <div class="d-flex justify-start">
                    <v-icon size="18" class="pe-2">mdi-email</v-icon>
                    <h4>{{ empresa.data.email }}</h4>
                  </div>

                  <div class="d-flex justify-start">
                    <v-icon size="18" class="pe-2">mdi-phone</v-icon>
                    <h4>{{ empresa.data.telefono }}</h4>
                  </div>

                  <div
                    class="d-flex justify-start"
                    v-if="empresa.data.instagram != ''"
                  >
                    <v-icon size="18" class="pe-2">mdi-instagram</v-icon>
                    <h4>{{ empresa.data.instagram }}</h4>
                  </div>

                  <div
                    class="d-flex justify-start"
                    v-if="empresa.data.facebook != ''"
                  >
                    <v-icon size="18" class="pe-2">mdi-facebook</v-icon>
                    <h4>{{ empresa.data.facebook }}</h4>
                  </div>

                  <div
                    class="d-flex justify-start"
                    v-if="empresa.data.twitter != ''"
                  >
                    <v-icon size="18" class="pe-2">mdi-twitter</v-icon>
                    <h4>{{ empresa.data.twitter }}</h4>
                  </div>

                  <div
                    class="d-flex justify-start"
                    v-if="empresa.data.web != ''"
                  >
                    <v-icon size="18" class="pe-2">mdi-web</v-icon>
                    <h4>{{ empresa.data.web }}</h4>
                  </div>
                </v-container>
                <v-divider></v-divider>
              </v-col>

              <v-col cols="12" class="d-flex justify-space-between align-end">
                <div>
                  <h5>Compartir:</h5>
                </div>
                <div>
                  <v-btn x-small color="#3b5998" dark href="" target="_blank">
                    <v-icon size="13" class="pe-1">mdi-facebook</v-icon>
                    Facebook
                  </v-btn>
                </div>

                <div>
                  <v-btn x-small color="#007bb5" dark href="" target="_blank">
                    <v-icon size="13" class="pe-1">mdi-linkedin</v-icon>
                    LinkedIn
                  </v-btn>
                </div>

                <div>
                  <v-btn x-small color="#4dc247" dark href="" target="_blank">
                    <v-icon size="13" class="pe-1">mdi-whatsapp</v-icon>
                    Whatsapp
                  </v-btn>
                </div>
              </v-col>

              <v-col cols="12" class="mt-10">
                <v-btn color="blue-grey darken-4" block dark
                  >Enviar mensaje</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Empresa",
  data() {
    return {};
  },
  computed: {
    ...mapState("usuarios", ["usuario"]),
    ...mapState("empresas", ["empresa"]),
  },
};
</script>

<style></style>
