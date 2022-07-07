<template>
  <v-container>
    <div>
      <h1>This is an about page</h1>
      <img width="600" :src="about" />
    </div>
    <div>
      <v-btn @click="open()"> Open Animal Popup </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import images from '@/styles/images.js'
import popupStates from '@/enums/popupStates'

export default {
  data() {
    return {
      about: images.about,
    }
  },
  methods: {
    ...mapMutations(['openDialog']),
    open() {
      this.openDialog({ name: popupStates.ANIMAL_POPUP, props: [] })
    },
  },
  name: 'About',
}
</script>
