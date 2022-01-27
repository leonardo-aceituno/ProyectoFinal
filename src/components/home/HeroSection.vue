<template>
  <div class="blue-grey darken-4">
    <v-row align="center" justify="center" class="py-8">
      <v-col cols="12" xs="10" sm="12" md="6">
        <v-img class="center" src="@/assets/creative.png" width="200"></v-img>
      </v-col>
      <v-col md="6">
        <h1
          class="text-center text-sm-center text-md-start blue-grey--text text--lighten-5"
          dark
        >
          EMPDMNTO
        </h1>
        <h4
          class="text-center subheading text-sm-center text-md-start blue-grey--text text--lighten-5"
        >
          Te ayudamos a disponibilizar tus ideas en la Web!!!
        </h4>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
