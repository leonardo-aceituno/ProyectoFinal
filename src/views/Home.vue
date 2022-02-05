<template>
  <div>
    <HeroSection />
    <EmpresasDestacadas />
  </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection';
import EmpresasDestacadas from '@/components/home/EmpresasDestacadas';

export default {
  name: 'Home',
  components: { HeroSection, EmpresasDestacadas },
};
</script>
