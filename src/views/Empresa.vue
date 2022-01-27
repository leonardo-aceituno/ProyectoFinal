<template>
  <section>
    <v-row justify="center" class="pt-8 blue-grey darken-4">
      <v-col md="6" class="d-flex justify-center">
        <h1 class="text-center blue-grey--text text--lighten-5" dark>
          {{ empresa.data.nombre }}
        </h1>
      </v-col>
    </v-row>

    <v-container
      >soy la empresa

      <v-row>
        <v-col>
          <v-avatar class="ma-3" size="300" tile>
            <v-img :src="empresa.data.imagen" contain></v-img>
          </v-avatar>
        </v-col>
        <v-col></v-col>
      </v-row>

      <v-row align="center">
        <v-item-group
          v-model="window"
          class="shrink mr-6"
          mandatory
          tag="v-flex"
        >
          <v-item v-for="n in length" :key="n" v-slot="{ active, toggle }">
            <div>
              <v-btn :input-value="active" icon @click="toggle">
                <v-icon>mdi-star</v-icon>
                <v-avatar class="mt-5" size="50" tile>
                  <v-img :src="empresa.data.imagen" contain></v-img>
                </v-avatar>
              </v-btn>
            </div>
          </v-item>
        </v-item-group>

        <v-col>
          <v-window v-model="window" class="elevation-1" vertical>
            <v-window-item v-for="n in length" :key="n">
              <v-card flat>
                <v-card-text>
                  <p>uno</p>

                  <p>dos</p>

                  <p>3</p>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
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
    return { length: 3, window: 0 };
  },
  computed: {
    ...mapState("usuarios", ["usuario"]),
    ...mapState("empresas", ["empresa"]),
  },
};
</script>

<style></style>
