<template>
  <v-container class="grey lighten-3">
    <v-row no-gutters justify="center">
      <v-col class="todoCreateSticky" cols="12">
        <InputCreateTodo class="grey lighten-3"/>
      </v-col>
      <v-col cols="12" md="9">
        <TodoList/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InputCreateTodo from '@/components/todo/InputCreateTodo';
import TodoList from '@/components/todo/TodoList';

export default {
  name: 'Todo',
  components: {
    InputCreateTodo,
    TodoList
  },
};
</script>

<style scoped>

.todoCreateSticky {
  position:-webkit-sticky; 
  position: sticky; 
  top: 60px;
  background: white;
  z-index: 1;
}
</style>