<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed clipped left app>
      <v-list dense>
        <v-list-tile v-for="(link, index) in routes" :key="index" :to="link.path">
          <v-list-tile-action>
            <v-icon v-if="link.meta.iconType == 'material'">{{ link.meta.icon }}</v-icon>
            <font-awesome-icon v-else :icon="link.meta.icon" class="fa-icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="primary" dark fixed clipped-left app>
      <v-toolbar-side-icon role="menu-toggle" @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import NProgress from "nprogress";

  export default {
    data() {
      return {
        drawer: false,
        drawerMobile: false,
        message: "stuff",
        routes: this.$router.options.routes
      }
    }
  }
</script>