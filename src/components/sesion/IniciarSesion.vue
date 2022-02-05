<template>
  <div id="iniciarsesion" class="my-10">
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit" id="iniciarsesion">
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
            id="email"
            solo
            prepend-inner-icon="mdi-email"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="password"
          rules="required|min:6|max:20 "
        >
          <v-text-field
            id="password"
            v-model="password"
            :counter="20"
            :error-messages="errors"
            label="Password"
            required
            tile
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show = !show"
            solo
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
        </validation-provider>

        <v-btn
          class="mt-5 boton"
          type="submit"
          :disabled="invalid"
          block
          color="#FF7D30"
        >
          Ingresar
        </v-btn>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { required, email, max, min } from 'vee-validate/dist/rules';
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate';

import { mapState, mapActions } from 'vuex';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

setInteractionMode('eager');

extend('required', {
  ...required,
  message: '{_field_} es obligatorio',
});

extend('max', {
  ...max,
  message: '{_field_} debe tener maximo {length} caracteneres',
});

extend('min', {
  ...min,
  message: '{_field_} debe tener a lo menos {length} caracteres',
});

extend('email', {
  ...email,
  message: 'El Email debe ser válido',
});

export default {
  name: 'sessionForm',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: '',
    password: '',
    show: false,
  }),
  computed: {
    ...mapState('usuarios', ['usuario']),
  },
  methods: {
    ...mapActions('usuarios', ['actualizarUsuario']),

    submit() {
      this.$refs.observer.validate();
      this.iniciarSesion();
    },

    redirect() {
      this.$router.push({ name: 'dashboard' });
    },

    mensaje() {
      this.$swal({
        title: 'Bienvenido',
        text: 'Haz inciado sesión',
        icon: 'success',
        buttons: false,
        timer: 2000,
      });
    },

    clear() {
      this.email = '';
      this.password = '';
      this.$refs.observer.reset();
    },

    async iniciarSesion() {
      console.log('iniciar ssesion');
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = auth.currentUser;
        this.actualizarUsuario(user);
        this.mensaje();
        this.redirect();
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      } finally {
        this.clear();
      }
    },
  },
};
</script>

<style>
.boton {
  color: #ffffff !important;
}
</style>
