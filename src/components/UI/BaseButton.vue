<template>
  <v-btn v-bind="$attrs">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<style></style>
