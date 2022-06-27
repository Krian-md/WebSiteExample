<template>
  <v-btn v-bind="$attrs">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        buttonName: {
            type: String,
        } 
    }
}
</script>

<style>

</style>