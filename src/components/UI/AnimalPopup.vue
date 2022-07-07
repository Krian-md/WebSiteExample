<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Hey Animal</span>
      </v-card-title>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="close"> Close </v-btn>
        <v-btn color="blue darken-1" text @click="open"> Open UserPopup </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from 'vuex'
import popupStates from '@/enums/popupStates'

export default {
  data() {
    return {
      dialog: true,
    }
  },
  methods: {
    ...mapMutations(['closeDialog', 'openDialog']),
    close() {
      this.dialog = false
    },
    open() {
      this.openDialog({ name: popupStates.USER_POPUP, props: [] })
    },
  },
  watch: {
    dialog() {
      if (this.dialog === false) {
        this.closeDialog(popupStates.ANIMAL_POPUP)
      }
    },
  },
}
</script>

<style></style>
