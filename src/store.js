import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    loading: false,
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    fetchPokemons({ commit }) {
      commit("setLoading", true);
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then((response) => {
          const requests = response.data.results.map((result) =>
            axios.get(result.url)
          );
          Promise.all(requests).then((responses) => {
            commit(
              "setPokemons",
              responses.map((response) => response.data)
            );
            commit("setLoading", false);
          });
        });
    },
  },
});
