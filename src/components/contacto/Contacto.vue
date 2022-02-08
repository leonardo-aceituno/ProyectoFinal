<template>
  <div id="contacto">
    <v-card
      flat
      class="d-flex flex-column align-center justify-center my-1 py-2"
    >
      <v-card-title class="size32"> Contacto </v-card-title>

      <v-card-subtitle v-if="empresaContacto !== administrador">{{
        empresa.data.nombre
      }}</v-card-subtitle>
    </v-card>

    <v-row align="center" justify="center" class="my-5" dark>
      <v-col cols="12" xs="10" sm="8" md="4">
        <span class="size32 text-center text-sm-left">¿Alguna Duda?</span>
        <br />
        <span class="text-center text-sm-left"
          >Por cualquier consulta, nos puede escribir a través del formulario de
          la página web</span
        >
        <!-- <h1 class="text-center text-sm-left">¿Alguna Duda?</h1>

        <h4 class="text-center text-sm-left">
          Por cualquier consulta, nos puede escribir a través del formulario de
          la página web
        </h4> -->
      </v-col>

      <v-col cols="12" xs="10" sm="8" md="4">
        <v-container class="mx-auto">
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
              <validation-provider
                v-slot="{ errors }"
                name="nombre"
                rules="required|max:10"
              >
                <v-text-field
                  v-model="nombre"
                  :counter="10"
                  :error-messages="errors"
                  label="Nombre"
                  required
                  outlined
                  tile
                  dense
                  color="EEEEEE"
                  background-color="white"
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="E-mail"
                  required
                  outlined
                  dense
                  color="EEEEEE"
                  background-color="white"
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="textoMensaje"
                rules="required|max:50"
              >
                <v-textarea
                  v-model="textoMensaje"
                  :error-messages="errors"
                  :counter="50"
                  outlined
                  name="textoMensaje"
                  required
                  label="Mensaje"
                  dense
                ></v-textarea>
              </validation-provider>

              <v-btn color="#FFD459" type="submit" :disabled="invalid" block>
                Enviar
              </v-btn>
              <!-- <v-btn @click="clear"> clear </v-btn> -->
            </form>
          </validation-observer>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules';
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate';
import { mapState, mapActions, mapGetters } from 'vuex';
import { collection, getFirestore, addDoc } from 'firebase/firestore';
setInteractionMode('eager');

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
});

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
});

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
});

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
});

extend('email', {
  ...email,
  message: 'Email must be valid',
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    nombre: '',
    textoMensaje: '',
    email: '',
  }),
  computed: {
    ...mapState('mensajes', ['empresaContacto']),
    ...mapState('empresas', ['empresa']),
    ...mapState(['administrador']),
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
      this.enviarComentario();
    },
    clear() {
      this.nombre = '';
      this.textoMensaje = '';
      this.email = '';
      this.$refs.observer.reset();
    },

    redirect() {
      this.$router.go(-1);
    },

    mensaje() {
      this.$swal({
        title: '',
        text: 'Mensaje enviado',
        icon: 'success',
        buttons: false,
        timer: 2000,
      });
    },

    async enviarComentario() {
      console.log('Enviar Comentario');
      const identificador = this.empresaContacto;
      const db = getFirestore();
      try {
        await addDoc(collection(db, 'mensajes'), {
          nombre: this.nombre,
          email: this.email,
          mensaje: this.textoMensaje,
          key: identificador,
        });
        this.mensaje();
        this.redirect();
        this.clear();
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      }
    },
  },
};
</script>

<style scoped>
#contacto {
  font-family: 'Varela Round', sans-serif;
  /* background-color: #2a8d80; */
}

.titulo {
  font-size: 1.875rem;
  color: #ffffff;
  font-weight: normal;
}
</style>
