<template>
  <div>
    <v-card flat class="d-flex justify-center my-1 py-2">
      <v-card-title class="size32"> Editar Empresa </v-card-title>
    </v-card>

    <v-row justify="center" no-gutters class="mt-5 mb-15">
      <v-col xs="10" sm="8" md="5" class="mb-6">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <v-container>
              <div class="mb-12 espacio">Datos Empresa</div>
              <v-row>
                <!-- Datos Empresa -->
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
                      prepend-inner-icon="mdi-domain"
                      background-color="white"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

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
                      prepend-inner-icon="mdi-clipboard-list"
                      background-color="white"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

                <v-col cols="12" md="6" class="mt-n7">
                  <validation-provider
                    v-slot="{ errors }"
                    name="region"
                    rules="required"
                  >
                    <v-select
                      v-model="empresa.data.region"
                      :items="nombreRegion"
                      :error-messages="errors"
                      label="Region"
                      required
                      outlined
                      dense
                      @change="comuna"
                      prepend-inner-icon="mdi-map-marker"
                      background-color="white"
                    ></v-select>
                  </validation-provider>
                </v-col>

                <v-col cols="12" md="6" class="mt-n7">
                  <validation-provider
                    v-slot="{ errors }"
                    name="comuna"
                    rules="required"
                  >
                    <v-select
                      v-model="empresa.data.comuna"
                      :items="comunas"
                      :error-messages="errors"
                      label="Comuna"
                      required
                      outlined
                      dense
                      prepend-inner-icon="mdi-map-marker"
                      background-color="white"
                    ></v-select>
                  </validation-provider>
                </v-col>

                <v-col cols="12" class="mt-n7">
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
                      prepend-inner-icon="mdi-comment"
                    ></v-textarea>
                  </validation-provider>
                </v-col>
              </v-row>

              <!-- Datos responsable -->
              <div class="my-5 espacio">Responsable Empresa</div>
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
                      prepend-inner-icon="mdi-account"
                      background-color="white"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

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
                      rows="2"
                      prepend-inner-icon="mdi-email"
                      background-color="white"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

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
                      background-color="white"
                    ></v-text-field> </validation-provider
                ></v-col>
              </v-row>

              <!-- RRSS -->
              <div class="my-5 espacio">Redes Sociales</div>
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
                      background-color="white"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

                <v-col cols="12" class="mt-n7">
                  <validation-provider v-slot="{ errors }" name="facebook">
                    <v-text-field
                      v-model="empresa.data.facebook"
                      :error-messages="errors"
                      label="Facebook"
                      prepend-inner-icon="mdi-facebook"
                      outlined
                      dense
                      background-color="white"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

                <v-col cols="12" class="mt-n7">
                  <validation-provider v-slot="{ errors }" name="twitter">
                    <v-text-field
                      v-model="empresa.data.twitter"
                      :error-messages="errors"
                      label="Twitter"
                      outlined
                      dense
                      prepend-inner-icon="mdi-twitter"
                      background-color="white"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

                <v-col cols="12" class="mt-n7">
                  <validation-provider v-slot="{ errors }" name="web">
                    <v-text-field
                      v-model="empresa.data.web"
                      :error-messages="errors"
                      label="Web"
                      outlined
                      dense
                      prepend-inner-icon="mdi-web"
                      background-color="white"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
              </v-row>

              <!-- Imagen -->
              <div class="my-5 espacio">Imagen</div>
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
                      prepend-inner-icon="mdi-file-image"
                      background-color="white"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

                <v-col cols="12" class="d-flex justify-center">
                  <img :src="empresa.data.imagen" width="150" alt="" contain />
                </v-col>
              </v-row>

              <!-- Configuracion -->
              <div class="my-5 espacio">Configuración</div>
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

            <div class="mt-15 d-flex justify-end">
              <v-btn
                type="submit"
                color="#E49F06"
                class="mr-0 boton"
                :disabled="invalid"
                light
              >
                Editar
              </v-btn>
              <v-btn color="#FF6530" dark class="ms-4" to="/dashboard">
                Cancelar
              </v-btn>
            </div>
          </form>
        </validation-observer>
      </v-col>
    </v-row>
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

import { mapState, mapActions, mapGetters } from 'vuex';

import { getFirestore, doc, setDoc } from 'firebase/firestore';

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
  name: 'EditarEmpresa',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    show: false,
  }),
  mounted() {
    this.comuna();
  },
  computed: {
    ...mapState('usuarios', ['usuario']),
    ...mapState('empresas', ['empresa']),
    ...mapState('ubicacion', ['regiones']),
    ...mapState('ubicacion', ['comunas']),
    ...mapGetters('ubicacion', ['nombreRegion']),
  },
  methods: {
    ...mapActions('ubicacion', ['obtenerComunas']),
    ...mapActions('empresas', ['guardarEmpresa']),

    comuna() {
      const region = this.empresa.data.region;
      const regiones = this.regiones;
      const total = regiones.find((item) => {
        return item.nombre == region;
      });

      this.obtenerComunas(total.codigo);
    },
    submit() {
      this.$refs.observer.validate();
      this.editarEmpresa();
    },

    redirect() {
      this.$router.push({ name: 'dashboard' });
    },

    mensaje() {
      this.$swal({
        title: '',
        text: 'Datos editados con Exito',
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

    async editarEmpresa() {
      console.log('EditaEmpresa');
      const db = getFirestore();
      const identificador = this.empresa.id;
      const empresa = this.empresa.data;
      console.log('1', identificador);
      try {
        await setDoc(doc(db, 'empresas', identificador), {
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
          web: empresa.web,

          imagen: empresa.imagen,

          destacado: empresa.destacado,
          activo: empresa.activo,

          key: empresa.key,
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

<style scoped>
.boton {
  color: #ffffff !important;
}
.espacio {
  border-bottom: 1px solid #9f9d9d;
}
</style>
