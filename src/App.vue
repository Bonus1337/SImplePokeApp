<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Pokemon App</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="pokemon in pokemons"
            :key="pokemon.name"
          >
            <PokemonComponent :pokemon="pokemon" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PokemonComponent from "./components/PokemonComponent.vue";

export default {
  components: {
    PokemonComponent,
  },
  created() {
    this.fetchPokemons();
  },
  computed: {
    ...mapState(["pokemons"]),
  },
  methods: {
    ...mapActions(["fetchPokemons"]),
  },
};
</script>
<style scoped>
.v-application {
  background: url("https://example.com/path-to-your-background.jpg") no-repeat
    center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
