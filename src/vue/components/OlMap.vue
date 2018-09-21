<template>
  <div>

  </div>
</template>

<script>
  import ol from "openlayers";

  export default {
    props: {
      lat: {
        required: true,
        type: Number
      },

      lon: {
        required: true,
        type: Number
      },

      zoom: {
        required: false,
        type: Number,
        default: 4
      },

      markers: {
        required: false,
        type: Array,
        default() {
          return []
        }
      }
    },

    data() {
      return {
        map: {
          type: Object,
          default: {}
        },
      }
    },

    computed: {
      id() {
        return this.$options.name + "-" + this._uid
      }
    },

    mounted() {
      let mapConfig = {
        target: this.id,

        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],

        view: new ol.View({
          center: ol.proj.fromLonLat([this.lon, this.lat]),
          zoom: this.zoom
        })
      };

      if (this.markers.length > 0) {
        let markerLayer
        let markerSource = new ol.source.Vector()

        this.markers.forEach((marker) => {
          let featureProperties = {
            geometry: new ol.geom.Point(
              ol.proj.transform([marker.lon, marker.lat], "EPSG:4326", "EPSG:3857")
            )
          }

          let feature = new ol.Feature({
            geometry: featureProperties
          })

          markerSource.addFeature(feature)
        });

        let iconStyle = new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'http://openlayers.org/en/v3.9.0/examples/data/icon.png'
          })
        })

        markerLayer = new ol.layer.Vector({
          source: markerSource,
          style: iconStyle
        });

        mapConfig.layers.push(markerLayer)
      }

      let map = new ol.Map(mapConfig);
      this.map = map;


      map.on("click", function (evt) {
        let feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
          return feature;
        });

        console.log("feature: ", feature);
      })
    }
  }
</script>

<style scoped>
</style>