<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card class="pa-4 custom-elevation">
        <h1 class="display-3">Frontpage</h1>
        <p>{{ message }}</p>

        <v-layout row wrap>
          <v-flex xs12>
            <span>Have a cup of coffee:
              <font-awesome-icon icon="cog" />
            </span>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12>
            <span>Something something Vue:
              <font-awesome-icon class="v-logo" :icon="['fab', 'vuejs']" />
            </span>
          </v-flex>
        </v-layout>

        <my-component></my-component>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import LoadingService from "../../ts/services/LoadingService";
  export default {
    data() {
      return {
        message: "I am the frontpage. Commodo esse ipsum adipisicing quis exercitation ea proident exercitation ullamco laborum dolor. Voluptate id eiusmod labore culpa ex culpa nisi nostrud consectetur cupidatat. Tempor non do eiusmod quis est velit. Et in velit consectetur voluptate. Dolore Lorem culpa deserunt nostrud ipsum consectetur velit commodo occaecat dolore excepteur. Reprehenderit est sint ut minim commodo enim aute veniam consectetur excepteur duis."
      }
    }
  }
</script>