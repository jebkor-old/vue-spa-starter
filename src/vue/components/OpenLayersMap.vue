<template>
  <div>
    <div :id="target" :class="target"></div>
  </div>
</template>

<script lang="ts">
  import Feature from 'ol/Feature.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import Point from 'ol/geom/Point.js';
  import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
  import { Cluster, OSM, Vector as VectorSource, XYZ } from 'ol/source.js';
  import { Circle as CircleStyle, Fill, Stroke, Style, Text, Icon } from 'ol/style.js';
  import { transform, get, fromLonLat } from "ol/proj";


  // Global scope to be "overridden"
  // in methods, further down
  let that = this,
    raster,
    source,
    clusterSource,
    clusters,
    markersArray = [],
    iconFeature;

  // The Vue instance
  export default {
    name: "ol-map",
    props: [
      "markers",
      "center",
      "clusterDistance",
      "minZoom",
      "zoom",
      "target"
    ],
    mounted() {
      this.startMap();
    },
    methods: {
      startMap() {
        let that = this;

        let iconFeature;
        let markersArray = [];
        let projection = get("EPSG:3857");

        // Nothing more than seperating the logic
        // into its own function - Seperation of Concerns
        this.setupLayers();

        // define the map variable
        let map = new Map({
          layers: [raster, clusters],
          target: this.target,
          view: new View({
            extent: [453945.83711015584, 7192107.786083741, 1979628.921682274, 7955255.07648294],
            center: fromLonLat(this.center),
            minZoom: this.minZoom,
            zoom: this.zoom,
            projection: projection
          })
        });
      },
      setupLayers() {
        // Loop over items in the array and add them to another array, for later use
        for (let i = 0; i < this.markers.length; i++) {
          let node = this.markers[i];

          if (this.markers.length >= 1) {
            iconFeature = new Feature({
              geometry: new Point(transform([node.lat, node.lng], "EPSG:4326", "EPSG:3857")),
              model: node
            });
            markersArray.push(iconFeature);
          }
        }

        // Raster layer - the layer that displays the map
        raster = new TileLayer({
          source: new XYZ({
            url: "https://maps.tilehosting.com/styles/basic/{z}/{x}/{y}.png?key=osrA0K8XG43k46i7hDSG",
            crossOrigin: "anonymous"
          })
        });


        // Feature layer - the layer that contains and displays the features
        source = new VectorSource({
          features: markersArray
        });


        // CLuster source - the source for the next layer, the cluster layer
        clusterSource = new Cluster({
          distance: this.clusterDistance,
          source: source
        });


        // Cluster layer - the layer that contains and displays the clusters
        var styleCache = {};
        clusters = new VectorLayer({
          source: clusterSource,
          style: function (feature) {
            var size = feature.get('features').length;
            var style = styleCache[size];

            //If style doesn't exist
            if (!style && size > 1) {
              // Override the style variable
              style = new Style({
                image: new Icon({
                  anchor: [0.5, 46],
                  anchorXUnits: "fraction",
                  anchorYUnits: "pixels",
                  src: "../../src/images/map/cluster-pin.png"
                }),
                text: new Text({
                  text: size.toString(),
                  fill: new Fill({
                    color: '#333'
                  }),
                  scale: 0,
                  offsetY: -55
                })
              });
              // Set the property to the overridden style
              styleCache[size] = style;
            } else if (!style && size <= 1) {
              style = new Style({
                image: new Icon({
                  anchor: [0.5, 46],
                  anchorXUnits: "fraction",
                  anchorYUnits: "pixels",
                  src: "../../src/images/map/green-pin.png"
                }),
                text: new Text({
                  text: size.toString(),
                  fill: new Fill({
                    color: '#333'
                  }),
                  scale: 0,
                  offsetY: -55
                })
              });
            }
            // Return the given style
            return style;
          }
        });
      }
    }
  }
</script>