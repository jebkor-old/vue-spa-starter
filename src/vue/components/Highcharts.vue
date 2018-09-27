<template>
  <div>
    <div id="highcharts-wrapper"></div>
  </div>
</template>

<script lang="ts">
  import Highcharts from "highcharts";
  import ChartService from "../../ts/services/ChartService";

  export default {
    name: "highcharts",
    props: {
      options: {
        required: true
      }
    },
    mounted() {
      let options = ChartService.getChartOptions(this.options);
      Highcharts.chart("highcharts-wrapper", options);
      console.log("options: ", this.options);
    }
  }
</script>

<style scoped>
</style>