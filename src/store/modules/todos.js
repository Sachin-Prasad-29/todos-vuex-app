//this is our todos module where we put all our state , getters , actions, mutations
import axios from 'axios';

//This are the properties or data of the store
const state = {
  todos: [],
};
// only Getters will provide access to this state
const getters = {
  allTodos: (state) => {
    return state.todos;
  },
};

//actions is going to make a request get response and call mutations because Is only able to mutate the state of store
// we can't call mutations directly we call with this commit
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    // calling the method of mutations using commit and passing the name of method and data
    commit('setTodos', response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`, { title, completed: false });
    commit('newTodo', response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`); // this will remove from backend
    commit('removeTodo', id);
  },

  async filterTodos({ commit }, e) {
    //Get selected number here limit wil give 50 100 200 20 10 5 
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    commit('setTodos',response.data);
  },
  async updateTodo({commit},updTodo){
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo);
    console.log(response.data);
    commit('updateTodo',response.data)
  }
};

const mutations = {
  setTodos: (state, data) => {
    state.todos = data; // here the data we recieved are getting stored in empty todos array
  },
  newTodo: (state, data) => {
    state.todos.unshift(data); // add value to the begining of the todos array
  },
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id); // this will remove from the todo state array
  },
  updateTodo:(state, updTodo) =>{
    const index = state.todos.findIndex(todo  => todo.id === updTodo.id);
    if(index !== -1){
      state.todos.splice(index,1,updTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
