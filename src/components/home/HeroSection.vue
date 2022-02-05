<template>
  <!-- <div class="blue-grey darken-4"> -->
  <div id="heroSection" class="colorFondo d-none d-sm-flex">
    <v-container>
      <v-row align="center" justify="center" class="py-15">
        <v-col cols="12" xs="10" sm="12" md="6">
          <v-img
            class="center"
            src="@/assets/creative_white.png"
            width="250"
          ></v-img>
        </v-col>
        <v-col md="6">
          <h1
            class="text-center text-sm-center text-md-start titulo font_architects size45"
          >
            EMPRENDIIMIENTO
          </h1>
          <h4
            class="text-center subheading text-sm-center text-md-start titulo size16"
            color="white"
          >
            Te ayudamos a disponibilizar tus ideas en la Web!!!
          </h4>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
#heroSection {
  font-family: 'Varela Round', sans-serif;
}

.center {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.colorFondo {
  /* background-color: #3498db; */
  background-color: #0f85d1;
}

.titulo {
  font-size: 1.875rem;
  color: #ffffff;
  font-weight: normal;
}
.font_architects {
  font-family: 'Architects Daughter', cursive;
}
.size40 {
  font-size: 2.5rem;
}

.size45 {
  font-size: 2.813rem;
}
.size16 {
  font-size: 1rem;
  /* color: #ffffff;
  font-weight: normal; */
}
</style>
