<template>
  <div>
    <HeroSection />
    <EmpresasDestacadas />
    <v-divider class="mx-10"></v-divider>
    <Contacto />
    <v-divider class="mx-10 mb-5"></v-divider>
  </div>
</template>

<script>
import HeroSection from "@/components/home/HeroSection";
import EmpresasDestacadas from "@/components/home/EmpresasDestacadas";
import Contacto from "@/components/contacto/Contacto";

export default {
  name: "Home",
  components: { HeroSection, EmpresasDestacadas, Contacto },
};
</script>
