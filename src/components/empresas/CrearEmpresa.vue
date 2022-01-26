<template>
  <v-container class="mt-10">
    <h1 class="text-center text-h4 font-weight-light mb-10">Datos Empresa</h1>

    <v-row justify="center" no-gutters class="mt-5">
      <v-col xs="10" sm="8" class="mb-6">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <v-container>
              <v-row>
                <v-col cols="12" class="mt-n7">
                  <validation-provider
                    v-slot="{ errors }"
                    name="nombre"
                    rules="required"
                  >
                    <v-text-field
                      v-model="empresa.nombre"
                      :error-messages="errors"
                      label="Nombre"
                      required
                      outlined
                      dense
                    ></v-text-field> </validation-provider
                ></v-col>
                <v-col cols="12" class="mt-n7">
                  <validation-provider
                    v-slot="{ errors }"
                    name="categoria"
                    rules="required"
                  >
                    <v-text-field
                      v-model="empresa.categoria"
                      :error-messages="errors"
                      label="Categoria"
                      required
                      outlined
                      dense
                    ></v-text-field> </validation-provider
                ></v-col>
                <v-col cols="12" md="6" class="mt-n7">
                  <validation-provider
                    v-slot="{ errors }"
                    name="region"
                    rules="required"
                  >
                    <v-text-field
                      v-model="empresa.region"
                      :error-messages="errors"
                      label="Region"
                      required
                      outlined
                      dense
                    ></v-text-field> </validation-provider
                ></v-col>
                <v-col cols="12" md="6" class="mt-n7">
                  <validation-provider
                    v-slot="{ errors }"
                    name="comuna"
                    rules="required"
                  >
                    <v-text-field
                      v-model="empresa.comuna"
                      :error-messages="errors"
                      label="Comuna"
                      required
                      outlined
                      dense
                    ></v-text-field> </validation-provider
                ></v-col>
              </v-row>
              <v-row class="mt-n7">
                <v-col cols="12">
                  <validation-provider
                    v-slot="{ errors }"
                    name="descripcion"
                    rules="required"
                  >
                    <v-textarea
                      v-model="empresa.descripcion"
                      :error-messages="errors"
                      label="Descripción"
                      required
                      outlined
                      dense
                    ></v-textarea> </validation-provider
                ></v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <validation-provider
                    v-slot="{ errors }"
                    name="responsable"
                    rules="required"
                  >
                    <v-text-field
                      v-model="empresa.responsable"
                      :error-messages="errors"
                      label="Nombre Responsable"
                      required
                      outlined
                      dense
                    ></v-text-field> </validation-provider
                ></v-col>
                <v-col cols="12" md="8" class="mt-n7">
                  <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="empresa.email"
                      :error-messages="errors"
                      label="E-mail"
                      required
                      outlined
                      dense
                      prepend-inner-icon="mdi-email"
                    ></v-text-field> </validation-provider
                ></v-col>
                <v-col cols="12" md="4" class="mt-n7">
                  <validation-provider
                    v-slot="{ errors }"
                    name="telefono"
                    rules="required"
                  >
                    <v-text-field
                      v-model="empresa.telefono"
                      :error-messages="errors"
                      label="Telefono"
                      required
                      outlined
                      dense
                      prepend-inner-icon="mdi-phone"
                    ></v-text-field> </validation-provider
                ></v-col>
              </v-row>

              <!-- RRSS -->
              <v-row>
                <v-col cols="12">
                  <validation-provider v-slot="{ errors }" name="instagram">
                    <v-text-field
                      v-model="empresa.instagram"
                      :error-messages="errors"
                      label="Instagram"
                      outlined
                      dense
                      prepend-inner-icon="mdi-instagram"
                    ></v-text-field> </validation-provider
                ></v-col>
                <v-col cols="12" class="mt-n7">
                  <validation-provider v-slot="{ errors }" name="facebook">
                    <v-text-field
                      v-model="empresa.facebook"
                      :error-messages="errors"
                      label="Facebook"
                      prepend-inner-icon="mdi-facebook"
                      outlined
                      dense
                    ></v-text-field> </validation-provider
                ></v-col>
                <v-col cols="12" class="mt-n7">
                  <validation-provider v-slot="{ errors }" name="twitter">
                    <v-text-field
                      v-model="empresa.twitter"
                      :error-messages="errors"
                      label="Twitter"
                      outlined
                      dense
                      prepend-inner-icon="mdi-twitter"
                    ></v-text-field> </validation-provider
                ></v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <validation-provider
                    v-slot="{ errors }"
                    name="imagen"
                    rules="required"
                  >
                    <v-text-field
                      v-model="empresa.imagen"
                      :error-messages="errors"
                      label="Url imagen logo"
                      required
                      outlined
                      dense
                    ></v-text-field> </validation-provider
                ></v-col>
                <v-col cols="12" class="d-flex justify-center">
                  <img :src="empresa.imagen" width="150" alt="" contain />
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-switch
                    v-model="empresa.destacado"
                    inset
                    label="Marcar como destacado"
                  ></v-switch>
                </v-col>
                <v-col>
                  <v-switch
                    v-model="empresa.activo"
                    inset
                    label="Activar producto?"
                  ></v-switch>
                </v-col>
              </v-row>
            </v-container>

            <v-btn
              class="mt-10"
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
      </v-col>
    </v-row>
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

import { collection, getFirestore, addDoc } from "firebase/firestore";

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
    empresa: {
      nombre: "",
      categoria: "",
      descripcion: "",

      region: "",
      comuna: "",

      responsable: "",
      email: "",
      telefono: "",

      instagram: "",
      facebook: "",
      twitter: "",

      imagen: "",

      destacado: false,
      activo: true,
    },
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
      this.$router.push({ name: "crear" });
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
      console.log("CrearC Cuenta");
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
