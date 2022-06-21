<template>
 <v-app>
    <Navbar/>
    
    <v-main>
      <router-view/>
    </v-main>
    
    <Footer/>
  </v-app>
</template>


<script>
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  data () {
    return {
    }
  },
  name: 'Example',
  components: {
    Footer,
    Navbar
  }
};
</script>

<style>
 
</style>