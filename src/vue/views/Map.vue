<template>
  <v-layout row wrap>
    <v-flex xs12>
      <Map :markers="markers" :center="mapCenter" :cluster-distance="mapClusterDistance" :min-zoom="mapMinZoom" :zoom="mapZoom" :target="mapTarget"></Map>
    </v-flex>
  </v-layout>

</template>

<script lang="ts">
  import { EventBus } from "../events/EventBus";
  import Map from "../components/OpenLayersMap.vue";

  export default {
    name: "MapView",
    components: {
      Map
    },
    data() {
      return {
        mapCenter: [9.887118, 55.870596],
        mapStyle: "height: 400px;",
        mapClusterDistance: 60,
        mapMinZoom: 7,
        mapZoom: 7,
        mapTarget: "map",
        markers: [{
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
        }]
      }
    },
    mounted() {
      // EventBus.$emit("getExtentRequest"); // Used for calling the "getExtent" function on the component
    }
  }
</script>


<style lang="scss">
.cool-map #map {
  height: 960px !important;
}
</style>