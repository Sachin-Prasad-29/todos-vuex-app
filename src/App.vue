<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'
import FilterTodos from './components/FilterTodos'


export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  },
};
</script>

<style>
body {
  font-family: "Google Sans Display", Arial, Helvetica, sans-serif ;
  line-height: 1.6;
  background: rgb(175, 247, 243);
  
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2em;
}
</style>
