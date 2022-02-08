<template>
  <v-container class="my-15">
    <v-row justify="center">
      <v-col xs="10" sm="8" md="6" class="d-flex flex-column align-center">
        <h2>¿Seguro quieres eliminar esta empresa?</h2>

        <v-avatar class="ma-3 text-center" size="200" tile>
          <v-img :src="empresa.data.imagen" contain></v-img>
        </v-avatar>
        <h4>{{ empresa.data.nombre }}</h4>

        <div class="mt-15">
          <div>
            <v-btn color="green" small dark class="me-5" @click="eliminar"
              >Aceptar</v-btn
            >
            <v-btn color="red" small dark @click="salir">Cancelar</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogDelete" max-width="550px">
      <v-card class="text-center">
        <v-card-title class="d-flex justify-center"
          ><span>Eliminar Empresa</span>
        </v-card-title>

        <v-card-subtitle>
          Esta accion es permanente, estas seguro?
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" small dark @click="confirmaEliminar()"
            >Aceptar</v-btn
          >
          <v-btn color="red" small dark @click="salir">Cancelar</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

export default {
  name: 'Eliminar-Producto',
  data() {
    return {
      dialogDelete: false,
      eliminaProducto: '',
    };
  },
  computed: { ...mapState('empresas', ['empresa']) },
  methods: {
    ...mapActions('empresas', ['guardarEmpresa']),
    salir() {
      this.guardarEmpresa(null);
      this.$router.push({ name: 'dashboard' });
    },

    eliminar() {
      this.dialogDelete = true;
    },

    redirect() {
      this.$router.push({ name: 'dashboard' });
    },

    mensaje() {
      this.$swal({
        title: '',
        text: 'Empresa Eliminada',
        icon: 'success',
        buttons: false,
        timer: 2000,
      });
    },

    confirmaEliminar() {
      const identificador = this.empresa.id;
      this.eliminarProducto(identificador);
      this.dialogDelete = false;
      this.mensaje();
      this.redirect();
    },

    async eliminarProducto(identificador) {
      const db = getFirestore();
      await deleteDoc(doc(db, 'empresas', identificador));
    },
  },
};
</script>

<style></style>
