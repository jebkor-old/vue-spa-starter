<template>

  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center">
      <v-card class="pa-4 custom-elevation">
        <h1 class="display-3">Frontpage</h1>
        <p>Welcome, and thank you for cloning/downloading my repository. I hope you will find it as useful as I do. I've put a lot of thought and work into this, relatively small project. <br>
          This project is meant for a quick way to have a Webpack config ready to be used, integrated with Vue and Vuetify. Have a component you want to test out? Clone this repo. Have a feature you want to mess with? Clone this repo. Have some adjustments to this project.... You get the idea.</p>

        <p>If you find the project architecture useful, feel free to steal it. If you do, I would be honored.<br>
          Now comes the time, where you use this project to create something. Use some of the components, views and files as guidelines, a skeleton of sorts, to quickly mock something up and create something.</p>

        <h3>Your next project is just on the other side of this door!</h3>

        <font-awesome-icon :icon="['fas','dungeon']" :size="'10x'" class="mt-5" />

      </v-card>
    </v-flex>

    <v-flex xs12>
      Grid test

      <div class="grid-container grid">
        <div class="user-profile">

          <span class="user-profile__username">
            Rob Ott
          </span>

          <img src="https://placehold.it/150x100" class="user-profile__avatar" />

          <p class="user-profile__bio">
            made of metal
            likes animals
            hates water skiing
          </p>

        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import LoadingService from "../../ts/services/LoadingService";
  export default {
    data() {
      return {
        message: null
      }
    }
  }
</script>