import Vue from 'vue';
import todo from './models/todo';
import popup from './models/popup';
import tosterError from './models/tosterError';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
    popup,
    tosterError,
  },
});
