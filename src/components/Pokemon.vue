<template>
  <v-card>
    <v-card-title>{{ pokemon.name }}</v-card-title>
    <v-btn @click="getDetails">Get Details</v-btn>
    <div v-if="details">
      <h3>Abilities:</h3>
      <ul>
        <li v-for="ability in details.abilities" :key="ability.ability.name">
          {{ ability.ability.name }}
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["pokemon"],
  data: () => ({
    details: null,
  }),
  methods: {
    getDetails() {
      axios.get(this.pokemon.url).then((response) => {
        this.details = response.data;
      });
    },
  },
};
</script>
