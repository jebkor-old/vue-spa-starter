<template>
  <div class="cool-map">
    <div id="map" :style="mapStyle"></div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import mapboxgl from "mapbox-gl";

  export default Vue.extend({
    name: 'cool-map',
    props: [
      "accessToken",
      "tooltipOffset",
      "markers",
      "mapCenter",
      "mapStyle"
    ],
    mounted() {
      mapboxgl.accessToken = this.accessToken;

      var map = new mapboxgl.Map({
        container: 'map',
        center: this.mapCenter,
        zoom: 13,
        style: 'src/js/style.json'
      });



      map.on("load", function () {
        // get all markers and add them to the map
        for (let i = 0; i < this.markers.length; i++) {
          new mapboxgl.Marker().setLngLat([
            this.markers[i].lat,
            this.markers[i].lng
          ]).setPopup(new mapboxgl.Popup({
            offset: this.tooltipOffset
          }).setText(this.markers[i].text)).addTo(map);
        }

        map.addLayer({
          id: "clusters"
        })
      })
    }
  });
</script>
