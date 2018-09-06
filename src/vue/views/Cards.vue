<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 xl3 v-for="(card, i) in cards" :key="i">
      <v-card :class="'card__border card__border--' + card.color">
        <v-img :src="card.url" :lazy-src="card.url" aspect-ratio="2.25"></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ card.title }}</h3>
            <div>{{ card.text }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "cards",
    components: {},
    data() {
      return {
        cards: [{
          url: "https://unsplash.it/960/400/?random",
          title: "Lorem Ipsum 1",
          text: "Sunt amet in do consequat excepteur voluptate proident veniam.",
          color: "red"
        }, {
          url: "https://unsplash.it/960/400/?random",
          title: "Lorem Ipsum 4",
          text: "Sunt amet in do consequat excepteur voluptate proident veniam.",
          color: "blue"
        }, {
          url: "https://unsplash.it/960/400/?random",
          title: "Lorem Ipsum 3",
          text: "Sunt amet in do consequat excepteur voluptate proident veniam.",
          color: "yellow"
        }, {
          url: "https://unsplash.it/960/400/?random",
          title: "Lorem Ipsum 4",
          text: "Sunt amet in do consequat excepteur voluptate proident veniam.",
          color: "purple"
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 8px !important;

  &.card__border {
    border-top: 3px solid blue;
    border-bottom: 3px solid blue;

    &--yellow {
      border-top: 3px solid yellow;
      border-bottom: 3px solid yellow;
    }

    &--red {
      border-top: 3px solid red;
      border-bottom: 3px solid red;
    }
  }
}
</style>