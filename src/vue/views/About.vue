<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>About page</h1>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 lg4>
        <v-form>
          <v-text-field 
            v-model="email" 
            v-validate="'email|required'"
            :error-messages="errors.collect('email')"
            type="email"
            name="email"
            label="E-mail"
            outline 
            clearable 
            append-icon="person" 
            required
          ></v-text-field>

          <v-text-field 
            v-model="password"
            v-validate="{required: true}"
            :error-messages="errors.collect('password')"
            :type="showPassword ? 'text' : 'password'" 
            label="Password" 
            name="password"
            outline 
            clearable 
            append-icon="lock" 
            required
          ></v-text-field>

          <v-checkbox 
            v-model="rememberMe" 
            label="Remember me?"
          ></v-checkbox>

          <v-btn type="submit" class="primary">Login ind</v-btn>
        </v-form>
      </v-flex>
    </v-layout>


    <v-layout row wrap>
      <v-flex xs12>
        <!-- <cool-map :access-token="accessToken" :markers="markers" :toolstip-offset="tooltipOffset" :map-center="mapCenter" :map-style="mapStyle"></cool-map> -->
        <ol-map :markers="markers" :center="[9.8492016, 55.9830699]" :cluster-distance="60" :min-zoom="7" :zoom="7" target="map"></ol-map>
      </v-flex>
    </v-layout>

  </div>
</template>

<script lang="ts">
  import { Validator } from "vee-validate";
  import CoolMap from "../components/GoogleMaps.vue";
  import OlMap from "../components/OpenLayersMap.vue";

  const dict = {
    custom: {
      email: {
        required: () => "Feltet skal udfyldes",
        email: () => "Mailen er ikke en gyldig mail"
      },
      password: {
        required: () => "Feltet skal udfyldes"
      }
    }
  };

  Validator.localize("en", dict);

  export default {
    components: {
      CoolMap,
      OlMap
    },
    data() {
      return {
        email: "",
        password: "",
        showPassword: false,
        rememberMe: false,
        accessToken: "pk.eyJ1IjoiamVrbyIsImEiOiJjamw2anAzOHgwYmNvM3FzMjJqbjVjZDA2In0.nmyOOQc511X8U99rH7jcEw",
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
          lat:  12.521264,
          text: "Frederiksberg"
        }, {
          lng: 55.673722,
          lat: 12.531816,
          text: "Frederiksberg"
        }, {
          lng:55.671979,
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
        }],
        tooltipOffset: 35,
        mapCenter: [9.887118,55.870596],
        mapStyle: "height: 400px;"
      }
    },
    watch: {
      password(input) {
        console.log("input: ", input);
        if (input.length >= 5) {
          this.showPassword = true;
        } else if (input.length <= 5){
          this.showPassword = false;
        } else {
          console.log("Something happened, the world exploded!");
        }
      }
    }
  }
</script>


<style lang="scss">
  .cool-map #map {
    height: 960px !important;
  }
</style>