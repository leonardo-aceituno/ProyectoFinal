<template>
  <div>
    <v-card flat tile width="100%" class="text-center py-3" color="#EEEEEE">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="32px" color="#000000">
            {{ icon }}
          </v-icon>
        </v-btn>
        <br />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'redesSociales',
  data() {
    return { icons: ['mdi-instagram', 'mdi-facebook', 'mdi-twitter'] };
  },
};
</script>

<style></style>
