<template>
  <v-container class="mt-10">
    <h1 class="text-center text-h4 font-weight-light mb-10">
      Editar Datos Empresa
    </h1>

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
                      v-model="empresa.data.nombre"
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
                      v-model="empresa.data.categoria"
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
                      v-model="empresa.data.region"
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
                      v-model="empresa.data.comuna"
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
                      v-model="empresa.data.descripcion"
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
                      v-model="empresa.data.responsable"
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
                      v-model="empresa.data.email"
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
                      v-model="empresa.data.telefono"
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
                      v-model="empresa.data.instagram"
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
                      v-model="empresa.data.facebook"
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
                      v-model="empresa.data.twitter"
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
                      v-model="empresa.data.imagen"
                      :error-messages="errors"
                      label="Url imagen logo"
                      required
                      outlined
                      dense
                    ></v-text-field> </validation-provider
                ></v-col>
                <v-col cols="12" class="d-flex justify-center">
                  <img :src="empresa.data.imagen" width="150" alt="" contain />
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-switch
                    v-model="empresa.data.destacado"
                    inset
                    label="Marcar como destacado"
                  ></v-switch>
                </v-col>
                <v-col>
                  <v-switch
                    v-model="empresa.data.activo"
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
              Editar
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

import { getFirestore, doc, setDoc } from "firebase/firestore";

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
  name: "EditarEmpresa",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    show: false,
  }),
  computed: {
    ...mapState("usuarios", ["usuario"]),
    ...mapState("empresas", ["empresa"]),
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
      this.editarEmpresa();
    },

    redirect() {
      this.$router.push({ name: "dashboard" });
    },

    mensaje() {
      this.$swal({
        title: "",
        text: "Datos editados con Exito",
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

    async editarEmpresa() {
      console.log("EditaEmpresa");
      const db = getFirestore();
      const identificador = this.empresa.id;
      const empresa = this.empresa.data;
      console.log("1", identificador);
      try {
        await setDoc(doc(db, "empresas", identificador), {
          nombre: empresa.nombre,
          categoria: empresa.categoria,
          descripcion: empresa.descripcion,

          region: empresa.region,
          comuna: empresa.comuna,

          responsable: empresa.responsable,
          email: empresa.email,
          telefono: empresa.telefono,

          instagram: empresa.instagram,
          facebook: empresa.facebook,
          twitter: empresa.twitter,

          imagen: empresa.imagen,

          destacado: empresa.destacado,
          activo: empresa.activo,
        });

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
