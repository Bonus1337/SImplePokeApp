import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },
  },
  actions: {
    fetchPokemons({ commit }) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then((response) => {
          commit("setPokemons", response.data.results);
        });
    },
  },
});
