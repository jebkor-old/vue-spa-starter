<template>
  <div>
    <div id="highcharts-wrapper"></div>
  </div>
</template>

<script lang="ts">
  import Highcharts from "highcharts";
  import Moment from "moment";

  export default {
    name: "highcharts",
    props: {
      options: {
        required: true
      },
      series: {
        required: true
      }
    },
    mounted() {
      Highcharts.chart("highcharts-wrapper", this.generateOptions());
    },
    methods: {
      generateOptions() {
        let options = {
          chart: {
            type: 'area'
          },
          title: {
            text: 'Historic and Estimated Worldwide Population Distribution by Region'
          },
          subtitle: {
            text: 'Source: Wikipedia.org'
          },
          xAxis: {
            categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
            tickmarkPlacement: 'on',
            title: {
              enabled: false
            }
          },
          yAxis: {
            title: {
              text: 'Percent'
            }
          },
          tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
            split: true
          },
          plotOptions: {
            area: {
              stacking: 'percent',
              lineColor: '#ffffff',
              lineWidth: 1,
              marker: {
                lineWidth: 1,
                lineColor: '#ffffff'
              }
            }
          },
          series: this.generateSeries(this.series)
        }

        return options;
      },
      // generateOptions() {
      //   let options = {
      //     chart: {
      //       margin: [150, 0, 0, 0]
      //     },
      //     title: {
      //       text: "euirgn"
      //     },
      //     xAxis: {
      //       categories: [
      //         Moment().startOf("day"),
      //         Moment().startOf("day").add(5, "hours"),
      //         Moment().startOf("day").add(10, "hours"),
      //         Moment().startOf("day").add(15, "hours"),
      //         Moment().startOf("day").add(20, "hours"),
      //         Moment().endOf("day")
      //       ],
      //       crosshair: true,
      //       gridLineWidth: 1,
      //       minorGridLineWidth: 1,
      //       type: "datetime",
      //       minPadding: 0,
      //       maxPadding: 0,
      //       labels: {
      //         formatter: function () {
      //           return Moment(this.value).format("MMM");
      //         },
      //         y: -15,
      //         x: 60
      //       },
      //       offset: 5,
      //       lineWidth: 0
      //     },
      //     yAxis: [{ // Primary yAxis, the visible labels
      //       gridLineWidth: 0,
      //       type: "datetime",
      //       title: {
      //         enabled: false,
      //         text: 'kWh',
      //         style: {
      //           color: "#000000"
      //         }
      //       },
      //       labels: {
      //         enabled: true,
      //         format: "{value}",
      //         formatter: function (e) {
      //           if (this.isLast) {
      //             return this.value + " kWh";
      //           } else {
      //             return this.value;
      //           }

      //         },
      //         style: {
      //           color: "#333333"
      //         },
      //         x: 10,
      //         y: -10,
      //         align: "left"
      //       },
      //       offset: 0,
      //       opposite: false
      //     }, { // Secondary yAxis
      //       gridLineWidth: 0,
      //       title: {
      //         enabled: false,
      //         text: 'Rainfall',
      //         style: {
      //           color: Highcharts.getOptions().colors[0]
      //         }
      //       },
      //       labels: {
      //         enabled: true,
      //         format: '{value} kwh',
      //         x: 150,
      //         y: 0,
      //         style: {
      //           color: Highcharts.getOptions().colors[0],
      //         }
      //       }
      //     }],
      //     tooltip: {
      //       shared: true
      //     },
      //     plotOptions: {
      //       area: {
      //         stacking: 'percent',
      //         lineColor: '#ffffff',
      //         lineWidth: 1,
      //         marker: {
      //           lineWidth: 1,
      //           lineColor: '#ffffff'
      //         },
      //         pointPlacement: "on"
      //       }
      //     },
      //     legend: {
      //       enabled: true,
      //       layout: 'vertical',
      //       align: 'right',
      //       verticalAlign: 'top',
      //       x: 0,
      //       y: 0,
      //       floating: true,
      //       style: {

      //       }
      //     },
      //     credits: {
      //       enabled: false
      //     },
      //     series: this.generateSeries(this.series)
      //   };
      //   console.log(options);
      //   return options;
      // },

      generateSeries(series: any) {
        let output = [];
        let _serie = {};

        for (const key in series) {
          if (series.hasOwnProperty(key)) {
            const element = series[key];

            _serie = {
              name: element.name,
              data: element.data
            };

            output.push(_serie);

          }
        }
        console.log("_series: ", output);
        return output;
      }
    }
  }
</script>

<style scoped>
</style>