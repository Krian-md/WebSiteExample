<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img width="600" :src="about">
    

  </div>
</template>

<script>
import images from '../styles/images.js';

export default {
  data() {
    return {
      about: images.about,
    }
  },
  name: 'About',
};
</script>
