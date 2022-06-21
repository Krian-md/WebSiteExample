<template>
  <v-dialog v-bind="$attrs" persistent max-width="600px">
    <slot></slot>
  </v-dialog>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {
    }
  },
}
</script>

<style>

</style>