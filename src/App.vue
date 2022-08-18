<template>
  <v-app>
    <component
      v-for="popup in getAllPopup"
      :key="popup.name"
      :is="popup.name"
    />
    <TosterError />

    <Navbar />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';
import UserPopup from '@/components/UI/UserPopup';
import TosterError from '@/components/UI/TosterError';
import AnimalPopup from './components/UI/AnimalPopup.vue';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  name: 'Example',
  computed: mapGetters(['getAllPopup']),
  components: {
    Footer,
    Navbar,
    UserPopup,
    TosterError,
    AnimalPopup,
  },
};
</script>

<style></style>
