<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
  import * as L from "leaflet";
  import "leaflet.markercluster";

  export default {
    name: "ol-map",
    props: {
      lng: {
        required: true,
        type: Number
      },
      lat: {
        required: true,
        type: Number
      },
      markers: {
        required: false,
        type: Array
      }
    },
    mounted() {
      // Initialize the leaflet map
      let mymap = L.map("map").setView([55.4228413, 10.0381507], 7);

      // Add a map layer to the map
      L.tileLayer('https://maps.tilehosting.com/styles/basic/{z}/{x}/{y}.png?key={accessToken}', {
        maxZoom: 18,
        id: 'basic',
        accessToken: 'osrA0K8XG43k46i7hDSG'
      }).addTo(mymap);

      // Initialization of cluster group
      let markers = L.markerClusterGroup().addTo(mymap);

      // Loop and add a marker to the cluster
      for (let i = 0; i < this.markers.length; i++) {
        const marker = this.markers[i];
        L.marker([marker.lng, marker.lat]).addTo(markers);
      }
    }
  }
</script>



<style lang="scss" scoped>
// Set a height for the map
#map {
  height: calc(100vh - 115px);
}
</style>

