<template>
  <v-layout row wrap>
    <v-flex xs12 md3 v-for="(group, i) in groups" :key="i">
      <v-card class="group-card">
        <h3 class="group-card__title">{{ group.name }}</h3>

        <v-menu offset-y class="group-card__menu">
          <v-btn slot="activator" color="secondary" dark flat>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile @click="">
              <v-list-tile-title>Some</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-title>Option</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-title>here</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-layout row wrap>
          <v-flex xs4>
            <v-icon>place</v-icon>
            <br>
            <span>46</span>
            <p>Data points</p>
          </v-flex>

          <v-flex xs4>
            <v-icon>insert_chart</v-icon>
            <br>
            <span>Kinetic</span>
            <p>Telemitry</p>
          </v-flex>

          <v-flex xs4>
            <v-icon>alarm</v-icon>
            <br>
            <span>4</span>
            <p>Alarms</p>
          </v-flex>
        </v-layout>

        <div class="group-card__chips">
          <p>Tags in this group</p>

          <v-chip v-for="(tag, j) in group.tags" :key="j" :color="tag.color" text-color="white">
            {{ tag.title }}
          </v-chip>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">


  export default {
    name: "group-comp",
    props: {

    },
    data() {
      return {
        colors: [
          "primary",
          "seocndary",
          "accent",
          "info",
          "error",
          "success",
          "warning"
        ],
        groups: [{
          name: "Group 1",
          tagline: "Some tagline 1",
          tags: [{
            title: "Tag 1",
            color: "primary"
          }, {
            title: "Tag 2",
            color: "success"
          }, {
            title: "Tag 3",
            color: "accent"
          }]
        }, {
          name: "Group 2",
          tagline: "Some tagline 2",
          tags: [{
            title: "Tag 1",
            color: "secondary"
          }, {
            title: "Tag 2",
            color: "warning"
          }, {
            title: "Tag 3",
            color: "error"
          }]
        }, {
          name: "Group 3",
          tagline: "Some tagline 3",
          tags: [{
            title: "Tag 1",
            color: "primary"
          }, {
            title: "Tag 2",
            color: "success"
          }, {
            title: "Tag 3",
            color: "accent"
          }]
        }, {
          name: "Group 4",
          tagline: "Some tagline 4",
          tags: [{
            title: "Tag 1",
            color: "primary"
          }, {
            title: "Tag 2",
            color: "success"
          }, {
            title: "Tag 3",
            color: "accent"
          }]
        }, {
          name: "Group 5",
          tagline: "Some tagline 5",
          tags: [{
            title: "Tag 1",
            color: "primary"
          }, {
            title: "Tag 2",
            color: "success"
          }, {
            title: "Tag 3",
            color: "accent"
          }]
        }, {
          name: "Group 6",
          tagline: "Some tagline 6",
          tags: [{
            title: "Tag 1",
            color: "primary"
          }, {
            title: "Tag 2",
            color: "success"
          }, {
            title: "Tag 3",
            color: "accent"
          }]
        },]
      }
    }
  }
</script>

<style scoped>
</style>