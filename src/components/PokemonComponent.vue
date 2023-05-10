<template>
  <v-card>
    <v-img
      class="white--text align-end"
      height="200px"
      :src="pokemon.sprites.front_default"
    >
      <v-hover>
        <v-card-title
          slot-scope="{ hover }"
          class="transition"
          :class="{ 'black--text': !hover, 'white--text': hover }"
        >
          {{ pokemon.name }}
        </v-card-title>
      </v-hover>
    </v-img>

    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="dialog = true">Details</v-btn>
    </v-card-actions>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{ pokemon.name }}</v-card-title>
        <v-card-text>
          <p><strong>Height:</strong> {{ pokemon.height }}</p>
          <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
          <p><strong>Base experience:</strong> {{ pokemon.base_experience }}</p>
          <p><strong>Abilities:</strong></p>
          <v-chip-group column>
            <v-chip
              text-color="white"
              v-for="ability in pokemon.abilities"
              :key="ability.ability.name"
            >
              {{ ability.ability.name }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  props: ["pokemon"],
  data: () => ({
    dialog: false,
  }),
};
</script>

<style scoped>
.transition {
  transition: color 0.3s ease-in-out;
}
</style>
