<template>
  <div>
    <v-card
      class="todos pa-2"
      :class="`rounded-pill`"
      dark
      color="#1565C0"
      v-for="todo in allTodos"
      :key="todo.id"
      @click.prevent="done(todo.id)"
    >
      <v-card-title :class="{ completed: todo.completed }">
        {{ todo.title }}
      </v-card-title>
      <v-card-actions>
        <v-btn
          color="blue darken-2"
          @click.prevent="deleteTodoFromList(todo.id)"
          rounded
          elevation="2"
        >
          Remove
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters(['allTodos', 'validTodos']),
  methods: {
    ...mapMutations(['deleteTodo', 'doneTodo']),
    ...mapActions(['fetchTodos']),
    deleteTodoFromList(id) {
      this.deleteTodo(id);
    },
    done(id) {
      this.doneTodo(id);
    },
  },
  async mounted() {
    this.fetchTodos(20);
  },
};
</script>

<style lang="scss">
.todos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
}

.backgroundApp {
  background: #1565c0;
}

.completed {
  text-decoration: line-through #d50000;
}
</style>
>
