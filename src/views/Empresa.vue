<template>
  <div id="empresa">
    <v-card flat class="d-flex justify-center my-1 py-2">
      <v-card-title class="titulo size32">
        {{ empresa.data.nombre }}
      </v-card-title>
    </v-card>

    <v-container>
      <v-row class="my-5">
        <!-- COLUMNA IZQUIERDA -->
        <v-col cols="12" sm="7" md="8">
          <v-container>
            <v-row>
              <v-col cols="12" class="d-flex justify-center">
                <v-avatar class="ma-3" size="200" tile>
                  <v-img :src="empresa.data.imagen" contain></v-img>
                </v-avatar>
              </v-col>

              <v-col cols="12" class="mt-5">
                <p class="text-justify size14">
                  {{ empresa.data.descripcion }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>

        <!-- COLUMNA DERECHA -->
        <v-col cols="12" sm="5" md="4">
          <v-container>
            <v-row>
              <v-col cols="12">
                <p class="size24">{{ empresa.data.nombre }}</p>
                <p class="size10 mt-n5">{{ empresa.data.categoria }}</p>
                <!-- <h2>{{ empresa.data.nombre }}</h2>
                <h6>{{ empresa.data.categoria }}</h6> -->
              </v-col>

              <v-col cols="12" class="mt-n4">
                <p>
                  <span class="bold">Región:</span> {{ empresa.data.region }}
                </p>
                <p class="mt-n5">
                  <span class="bold">Comuna:</span>
                  {{ empresa.data.comuna }}
                </p>
              </v-col>

              <v-col cols="12" class="mt-n8">
                <v-divider></v-divider>
                <v-container>
                  <div class="d-flex justify-start">
                    <v-icon size="18" class="pe-2">mdi-account</v-icon>
                    {{ empresa.data.responsable }}
                    <!-- <h4>{{ empresa.data.responsable }}</h4> -->
                  </div>
                  <div class="d-flex justify-start">
                    <v-icon size="18" class="pe-2">mdi-email</v-icon>
                    {{ empresa.data.email }}
                  </div>

                  <div class="d-flex justify-start">
                    <v-icon size="18" class="pe-2">mdi-phone</v-icon>
                    {{ empresa.data.telefono }}
                  </div>

                  <div
                    class="d-flex justify-start"
                    v-if="empresa.data.instagram != ''"
                  >
                    <v-icon size="18" class="pe-2">mdi-instagram</v-icon>
                    {{ empresa.data.instagram }}
                  </div>

                  <div
                    class="d-flex justify-start"
                    v-if="empresa.data.facebook != ''"
                  >
                    <v-icon size="18" class="pe-2">mdi-facebook</v-icon>
                    {{ empresa.data.facebook }}
                  </div>

                  <div
                    class="d-flex justify-start"
                    v-if="empresa.data.twitter != ''"
                  >
                    <v-icon size="18" class="pe-2">mdi-twitter</v-icon>
                    {{ empresa.data.twitter }}
                  </div>

                  <div
                    class="d-flex justify-start"
                    v-if="empresa.data.web != ''"
                  >
                    <v-icon size="18" class="pe-2">mdi-web</v-icon>
                    {{ empresa.data.web }}
                  </div>
                </v-container>
                <v-divider></v-divider>
              </v-col>

              <v-col cols="12" class="d-flex justify-space-between align-end">
                <div class="size12">Compartir:</div>
                <div>
                  <v-btn x-small color="#3b5998" dark target="_blank">
                    <v-icon size="13" class="pe-0">mdi-facebook</v-icon>
                    <span class="size08">Facebook</span>
                  </v-btn>
                </div>

                <div>
                  <v-btn x-small color="#007bb5" dark href="" target="_blank">
                    <v-icon size="13" class="pe-0">mdi-linkedin</v-icon>
                    <span class="size08">linkedin</span>
                  </v-btn>
                </div>

                <div>
                  <v-btn x-small color="#4dc247" dark href="" target="_blank">
                    <v-icon size="13" class="pe-0">mdi-whatsapp</v-icon>
                    <span class="size08">whatsapp</span>
                  </v-btn>
                </div>
              </v-col>

              <v-col cols="12" class="my-10">
                <v-btn
                  color="#FFD459"
                  block
                  font-weight-bold
                  @click="enviarComentario"
                  >Enviar mensaje</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: 'Empresa',
  data() {
    return {};
  },
  computed: {
    ...mapState('usuarios', ['usuario']),
    ...mapState('empresas', ['empresa']),
  },
  methods: {
    ...mapActions('mensajes', ['actualizaEmpresaContacto']),

    enviarComentario() {
      const identificador = this.empresa.data.key;
      this.actualizaEmpresaContacto(identificador);
      this.$router.push({ name: 'contacto' });
    },

    compartir() {
      console.log('COMPARTE');
      alert('JERE');
    },
  },
};
</script>

<style scoped></style>
