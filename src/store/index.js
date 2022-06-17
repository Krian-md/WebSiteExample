import Vue from "vue";
import todo from "./models/todo";
import cardImage from "./models/cardImage";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todo,
        cardImage
    }
});