<template>
  <div id="empresas">
    <v-card flat class="d-flex justify-center my-1 py-2">
      <v-card-title class="size32"> Empresas </v-card-title>
    </v-card>

    <v-container>
      <div class="d-flex flex-column align-end mt-n3">
        <v-select
          v-model="select"
          :items="todas"
          label="Buscar por region"
          single-line
        ></v-select>

        <div class="mt-n5">
          <p v-if="select == '' || select == 'Todas'"></p>
          <v-btn
            v-else
            class="text-center"
            color="warning"
            text
            x-small
            @click="select = ''"
            >Borrar filtro
          </v-btn>
        </div>
      </div>

      <v-row class="mt-3 mb-15">
        <v-col
          xs="6"
          sm="4"
          md="3"
          v-for="(item, index) in buscaEmpresa(select)"
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
    return { buscar: '', select: '' };
  },
  computed: {
    ...mapState('empresas', ['empresas']),
    ...mapGetters('empresas', ['empresasActivas']),
    ...mapGetters('empresas', ['buscaEmpresa']),
    ...mapGetters('ubicacion', ['todas']),
  },
  methods: {},
};
</script>

<style scoped></style>
