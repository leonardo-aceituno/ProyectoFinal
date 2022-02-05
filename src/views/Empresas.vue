<template>
  <div id="empresas">
    <v-card flat class="d-flex justify-center my-1 py-2">
      <v-card-title class="size32"> Empresas </v-card-title>
    </v-card>

    <v-container>
      <!-- <h1 class="text-center titulo pt-15">EMPRESAS</h1> -->
      <v-row class="my-10">
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
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Card from '@/components/card/Card';

export default {
  name: 'Empresas',
  components: { Card },
  data() {
    return {};
  },
  computed: {
    ...mapState('empresas', ['empresas']),
    ...mapGetters('empresas', ['empresasActivas']),
  },
  methods: {},
};
</script>

<style scoped>
.color-fondo {
  /* background-color: #fc6800; */
}
</style>
