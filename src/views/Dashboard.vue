<template>
  <v-container>
    DASHBOARD
    <p>
      usuario <span>{{ usuario }}</span>
    </p>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data: () => ({}),
  computed: { ...mapState("usuarios", ["usuario"]) },
};
</script>

<style></style>
