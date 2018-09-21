<template>
  <v-layout row wrap>
    <v-flex xs12>
      <ol-map :lat="map.lat" :lon="map.lon" :markers="markers" />
    </v-flex>
  </v-layout>

</template>

<script lang="ts">
  import { EventBus } from "../events/EventBus";
  import OlMap from "../components/OlMap.vue";

  export default {
    name: "MapView",
    components: {
      OlMap
    },
    data() {
      return {
        center: [9.887118, 55.870596],
        map: {
          lat: 55.870596,
          lon: 9.887118
        },
        mapStyle: "height: 400px;",
        mapClusterDistance: 60,
        rotation: 0,
        minZoom: 7,
        zoom: 7,
        mapTarget: "map",
        mapProjection: "EPSG:3857",
        mapExtent: [453945.83711015584, 7192107.786083741, 1979628.921682274, 7955255.07648294],
        markers: [
          {
            lng: 55.870596,
            lat: 9.887118,
            text: "Horsens"
          },
          {
            lng: 55.973570,
            lat: 9.878611,
            text: "Tebstrup"
          },
          {
            lng: 55.993838,
            lat: 9.932581,
            text: "Hylke"
          }, {
            lng: 55.681801,
            lat: 12.538259,
            text: "Frederiksberg"
          }, {
            lng: 55.681369,
            lat: 12.521264,
            text: "Frederiksberg"
          }, {
            lng: 55.673722,
            lat: 12.531816,
            text: "Frederiksberg"
          }, {
            lng: 55.671979,
            lat: 12.535763,
            text: "Frederiksberg"
          }, {
            lng: 55.672901,
            lat: 12.498779,
            text: "Frederiksberg"
          }, {
            lng: 55.676368,
            lat: 12.517780,
            text: "Frederiksberg"
          }, {
            lng: 55.675321,
            lat: 12.512137,
            text: "Frederiksberg"
          }, {
            lng: 55.666713,
            lat: 12.523320,
            text: "Frederiksberg"
          }, {
            lng: 55.669506,
            lat: 12.514241,
            text: "Frederiksberg"
          }
        ]
      }
    },
    mounted() {
      // this.$refs.olmap.getExtent();
    }
  }
</script>


<style lang="scss">
.cool-map #map {
  height: 960px !important;
}
</style>