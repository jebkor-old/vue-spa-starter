<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <p>Intro</p>
        <Highcharts :options="options"/>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import Highcharts from "../components/Highcharts.vue";

  export default {
    components: {
      Highcharts
    },
    data() {
      return {
        options: {
          status: 200,
          series: [{
            status: "offline",
            name: "Offline",
            type: "area",
            data: [1200, 320, 420, 689, 324, 1232]
          }, {
            status: "pending",
            name: "Pending",
            type: "area",
            data: [300, 433, 544, 777, 999, 1312]
          }, {
            status: "online",
            name: "Online",
            type: "area",
            data: [100, 600, 1000, 1200, 1400, 1800 ]
          }]
        }
      }
    }
  }
</script>

<style scoped>

</style>