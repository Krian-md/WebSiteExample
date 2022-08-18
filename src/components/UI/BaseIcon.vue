<template>
  <v-icon v-bind="$attrs">
    {{ iconName }}
  </v-icon>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
