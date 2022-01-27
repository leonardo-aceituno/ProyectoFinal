<template>
  <v-footer id="footer" class="blue-grey darken-4" dark>
    <v-card flat tile width="100%" class="text-center blue-grey darken-4">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
        <br />

        <p class="mt-3 mb-n3">Hecho por <strong>LeoAceituno</strong></p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-instagram", "mdi-facebook", "mdi-twitter"],
  }),
};
</script>
