<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Catalog Page</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit corrupti nemo asperiores ipsam omnis illo qui, temporibus reprehenderit, aliquid corporis nostrum fugit nobis nam officia aut, voluptatem deleniti aperiam?</p>
        <p d-flex  v-show="isShow">{{date}}</p>
        <button style="border: 2px solid red; padding: 10px 15px;" @click="changeState">Click</button>
      </v-col>
      <v-col>
        <h1>Catalog Page</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit corrupti nemo asperiores ipsam omnis illo qui, temporibus reprehenderit, aliquid corporis nostrum fugit nobis nam officia aut, voluptatem deleniti aperiam?</p>
        <p d-flex  v-show="isShow">{{date}}</p>
        <button style="border: 2px solid red; padding: 10px 15px;" @click="changeState">Click</button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
    data() {
        return {
          date: new Date(),
          isShow: false
        }
    },
    methods: {
      changeState() {
        this.isShow = !this.isShow;
      }
    }
}
</script>

<style>

</style>