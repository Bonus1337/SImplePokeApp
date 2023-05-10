<template>
  <div id="app">
    <v-btn @click="fetchPokemons">Fetch Pokemon</v-btn>
    <Pokemon
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Pokemon from "./components/Pokemon.vue";

export default {
  components: {
    Pokemon,
  },
  computed: mapState(["pokemons"]),
  methods: mapActions(["fetchPokemons"]),
};
</script>
