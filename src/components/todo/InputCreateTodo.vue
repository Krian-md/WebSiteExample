<template>
  <v-form class="form" ref="form" v-model="valid" lazy-validation>
    <v-text-field
      label="Title"
      :rules="titleRules"
      hide-details="auto"
      :counter="10"
      v-model="title"
      required
    />
    <v-btn color="primary" elevation="3" rounded @click="submit"> Add </v-btn>
    <hr />
  </v-form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    valid: true,
    title: '',
    titleRules: [
      (title) => !!title || 'Required.',
      (title) => (title && title.length >= 3) || 'Min 3 characters',
    ],
    completed: false,
  }),
  methods: {
    ...mapMutations(['createTodo']),
    submit() {
      if (this.$refs.form.validate()) {
        this.createTodo({
          title: this.title,
          completed: this.completed,
          id: Date.now(),
        });
        this.$refs.form.reset();
      }
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
.form * {
  margin-bottom: 20px;
}
</style>
