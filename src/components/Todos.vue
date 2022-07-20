<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="todos">
      <div @dblclick='onDblClick(todo)'
           v-for="todo in allTodos"
           :key="todo.id"
           class="todo"
           v-bind:class="{'is-complete':todo.completed}">
        {{ todo.title }}
        <i @click='deleteTodo(todo.id)'  class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
// Here we are importing the getters from Vuex Store 
// Here second we are importing the Actions from VueX Store
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TodosList',
  //we will put all the actions in the methods section of the components
  // methods: mapActions(['fetchTodos']),

  methods:{
      ...mapActions(['fetchTodos','deleteTodo','updateTodo']),
      //other methods
      onDblClick(todo){
        const updTodo ={
          id: todo.id,
          title: todo.title,
          completed: !todo.completed
        }
        this.updateTodo(updTodo)
      }
  },
  //Here we will pass all the getters we want to use in this components which is allTodos here
  computed: mapGetters(['allTodos']), //this allow us to use the getters

  created(){ // this is the lifecycle method which gets call when our components loaded
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
}
.todo{
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-size: 0.7em;
}
i{
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: rgb(231, 228, 228);
  cursor: pointer;
}
.legend{
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box{
  display: inline-block;
  width: 15px;
  height: 15px;
  background: #35495e;
}

.incomplete-box{
  display: inline-block;
  width: 15px;
  height: 15px;
  background: #41b883;
}
.is-complete{
  background: #35495e;
  color: white;
}

@media (max-width: 800px){
  .todos{
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 500px){
  .todos{
    grid-template-columns: 1fr;
  }
}

</style>
