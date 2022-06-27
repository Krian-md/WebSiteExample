<template>
  <div class="toster">
    <div v-if="getMessage" class="toster-context">
      <h4>{{getMessage}}</h4>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TosterError',
  computed: mapGetters(['getMessage'])
}
</script>

<style scoped>
  .toster {
    position: absolute;
    right: 30px;
    top: 100px;
    z-index: 2;
    min-width: 150px;
    max-width: 300px;
  }
  .toster-context {
    background: wheat;
    color: red;
    padding: 15px;
    border-radius: 25px;
  }
  .toster-context::before {
    content: "!";
    float: left;
    width: 10%
  }
</style>