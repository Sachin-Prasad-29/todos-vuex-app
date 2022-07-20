// Its an entry point to vue x
// Here we will combine all our module

import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
    modules:{
        todos
    }
})
