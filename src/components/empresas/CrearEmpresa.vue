<template>
  <div>
    <v-card flat class="d-flex justify-center my-1 py-2">
      <v-card-title class="size32"> Crear Empresa </v-card-title>
    </v-card>
    <v-row justify="center" no-gutters class="mt-5 mb-15">
      <v-col xs="10" sm="8" md="5" class="mb-6">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <v-container>
              <!-- Datos Empresa -->
              <div class="mb-12 espacio">Datos Empresa</div>
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
                      dense
                      outlined
                      prepend-inner-icon="mdi-domain"
                      background-color="white"
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
                      prepend-inner-icon="mdi-clipboard-list"
                      background-color="white"
                    ></v-text-field> </validation-provider
                ></v-col>

                <v-col cols="12" md="6" class="mt-n7">
                  <validation-provider
                    v-slot="{ errors }"
                    name="region"
                    rules="required"
                  >
                    <v-select
                      v-model="empresa.region"
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
                      v-model="empresa.comuna"
                      :items="comunas"
                      :error-messages="errors"
                      label="Comuna"
                      required
                      outlined
                      dense
                      prepend-inner-icon="mdi-map-marker"
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
                      v-model="empresa.descripcion"
                      :error-messages="errors"
                      label="Descripción"
                      required
                      outlined
                      dense
                      prepend-inner-icon="mdi-comment"
                      background-color="white"
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
                      v-model="empresa.responsable"
                      :error-messages="errors"
                      label="Nombre"
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
                      v-model="empresa.email"
                      :error-messages="errors"
                      label="E-mail"
                      required
                      outlined
                      dense
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
                      v-model="empresa.telefono"
                      :error-messages="errors"
                      label="Telefono"
                      required
                      outlined
                      dense
                      prepend-inner-icon="mdi-phone"
                      background-color="white"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
              </v-row>

              <!-- RRSS -->
              <div class="my-5 espacio">Redes Sociales</div>
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
                      background-color="white"
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
                      background-color="white"
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
                      background-color="white"
                    ></v-text-field> </validation-provider
                ></v-col>
                <v-col cols="12" class="mt-n7">
                  <validation-provider v-slot="{ errors }" name="web">
                    <v-text-field
                      v-model="empresa.web"
                      :error-messages="errors"
                      label="Web"
                      outlined
                      dense
                      prepend-inner-icon="mdi-web"
                      background-color="white"
                    ></v-text-field> </validation-provider
                ></v-col>
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
                      v-model="empresa.imagen"
                      :error-messages="errors"
                      label="Url imagen logo"
                      required
                      outlined
                      dense
                      prepend-inner-icon="mdi-file-image"
                      background-color="white"
                    ></v-text-field> </validation-provider
                ></v-col>
                <v-col cols="12" class="d-flex justify-center">
                  <img :src="empresa.imagen" width="150" alt="" contain />
                </v-col>
              </v-row>

              <!-- Configuracion -->
              <div class="my-5 espacio">Configuración</div>
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

            <div class="mt-15 d-flex justify-center justify-md-end">
              <v-btn
                type="submit"
                color="#E49F06 "
                class="mr-0 boton"
                :disabled="invalid"
                light
              >
                Crear
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

import { collection, getFirestore, addDoc } from 'firebase/firestore';

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
  name: 'CrearEmpresa',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    empresa: {
      nombre: '',
      categoria: '',
      descripcion: '',

      region: '',
      comuna: '',

      responsable: '',
      email: '',
      telefono: '',

      instagram: '',
      facebook: '',
      twitter: '',
      web: '',

      imagen: '',

      destacado: false,
      activo: true,
    },
    show: false,
  }),
  computed: {
    ...mapState('usuarios', ['usuario']),
    ...mapState('ubicacion', ['regiones']),
    ...mapState('ubicacion', ['comunas']),
    ...mapGetters('ubicacion', ['nombreRegion']),
  },
  methods: {
    ...mapActions('ubicacion', ['obtenerComunas']),

    comuna() {
      const region = this.empresa.region;
      const regiones = this.regiones;
      const total = regiones.find((item) => {
        return item.nombre == region;
      });

      this.obtenerComunas(total.codigo);
    },

    submit() {
      this.$refs.observer.validate();
      this.crearEmpresa();
    },

    redirect() {
      this.$router.push({ name: 'dashboard' });
    },

    mensaje() {
      this.$swal({
        title: '',
        text: 'Empresa Creada',
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

    async crearEmpresa() {
      console.log('CrearEmpresa');
      const db = getFirestore();
      console.log(this.usuario.uid);
      try {
        await addDoc(collection(db, 'empresas'), {
          nombre: this.empresa.nombre,
          categoria: this.empresa.categoria,
          descripcion: this.empresa.descripcion,

          region: this.empresa.region,
          comuna: this.empresa.comuna,

          responsable: this.empresa.responsable,
          email: this.empresa.email,
          telefono: this.empresa.telefono,

          instagram: this.empresa.instagram,
          facebook: this.empresa.facebook,
          twitter: this.empresa.twitter,
          web: this.empresa.web,

          imagen: this.empresa.imagen,

          destacado: this.empresa.destacado,
          activo: this.empresa.activo,

          key: this.usuario.uid,
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
