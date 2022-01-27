<template>
  <div id="contacto" class="py-10 1">
    <v-row align="center" justify="center" class="py-15" dark>
      <v-col cols="12" xs="10" sm="8" md="4" class="text-center">
        <h1>CONTACTO</h1>
        <h4 class="subheading">
          <!-- Te ayudamos a disponibilizar tus ideas en la Web!!! -->
        </h4>
      </v-col>
      <v-col cols="12" xs="10" sm="8" md="4">
        <v-container class="mx-auto">
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
              <validation-provider
                v-slot="{ errors }"
                name="Name"
                rules="required|max:10"
              >
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :error-messages="errors"
                  label="Nombre"
                  required
                  outlined
                  tile
                  dense
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
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="comentarios"
                rules="required|max:50"
              >
                <v-textarea
                  v-model="comentarios"
                  :error-messages="errors"
                  :counter="50"
                  outlined
                  name="comentarios"
                  required
                  label="Comentarios"
                  dense
                ></v-textarea>
              </validation-provider>

              <v-btn class="mr-4" type="submit" :disabled="invalid" block>
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
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    comentarios: "",
    email: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.comentarios = "";
      this.email = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style scoped></style>
