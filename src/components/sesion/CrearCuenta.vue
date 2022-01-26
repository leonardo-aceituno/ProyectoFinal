<template>
  <v-container class="mt-5">
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
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
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="password"
          rules="required|min:6|max:20 "
        >
          <v-text-field
            v-model="password"
            :counter="20"
            :error-messages="errors"
            label="Password"
            required
            outlined
            tile
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show = !show"
          ></v-text-field>
        </validation-provider>

        <v-btn
          class="mr-4"
          type="submit"
          :disabled="invalid"
          block
          color="success"
          light
        >
          Registrar
        </v-btn>
      </form>
    </validation-observer>
  </v-container>
</template>

<script>
import { required, email, max, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

import { mapState, mapActions } from "vuex";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} es obligatorio",
});

extend("max", {
  ...max,
  message: "{_field_} debe tener maximo {length} caracteneres",
});

extend("min", {
  ...min,
  message: "{_field_} debe tener a lo menos {length} caracteres",
});

extend("email", {
  ...email,
  message: "El Email debe ser válido",
});

export default {
  name: "sessionForm",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: "",
    password: "",
    show: false,
  }),
  computed: {
    ...mapState("usuarios", ["usuario"]),
  },
  methods: {
    ...mapActions("usuarios", ["actualizarUsuario"]),

    submit() {
      this.$refs.observer.validate();
      this.iniciarSesion();
    },

    redirect() {
      //   this.$router.push({ name: "crear" });
      this.$router.push({ name: "dashboard" });
    },

    mensaje() {
      this.$swal({
        title: "Bienvenido",
        text: "Cuenta creada con Exito!",
        icon: "success",
        buttons: false,
        timer: 2000,
      });
    },

    clear() {
      this.email = "";
      this.password = "";
      this.$refs.observer.reset();
    },

    async iniciarSesion() {
      console.log("Crear Cuenta");
      const auth = getAuth();

      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
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

<style></style>
