import Vue from "vue";
import Moment from "moment";
import Highcharts from "highcharts";

export class ChartService {
    public getChartOptions(output?: any) {
        let series= {};
        Object.keys(output.series).forEach(function(k, v) {
          console.log("orin: ", output.series[k].name);
            series = {
              name: output.series[k].name,
              type: output.series[k].type,
              data: output.series[k].data
            }
        });


        let arr = [];
        // ## Highcharts options ##
        let options = {
            chart: {
                margin: [150, 0, 0, 0]
            },
            title: {
                text: ""
            },
            xAxis: {
                categories: [
                  Moment().startOf("day"),
                  Moment().startOf("day").add(5, "hours"),
                  Moment().startOf("day").add(10, "hours"),
                  Moment().startOf("day").add(15, "hours"),
                  Moment().startOf("day").add(20, "hours"),
                  Moment().endOf("day")
                ],
                crosshair: true,
                gridLineWidth: 1,
                minorGridLineWidth: 1,
                type: "datetime",
                minPadding: 0,
                maxPadding: 0,
                labels: {
                    formatter: function () {
                        return Moment(this.value).format("MMM");
                    },
                    y: -15,
                    x: 60
                },
                offset: 5,
                lineWidth: 0
            },
            yAxis: [{ // Primary yAxis, the visible labels
                gridLineWidth: 0,
                type: "datetime",
                title: {
                    enabled: false,
                    text: 'kWh',
                    style: {
                        color: "#000000"
                    }
                },
                labels: {
                    enabled: true,
                    format: "{value}",
                    formatter: function(e) {
                        if (this.isLast) {
                            return this.value + " kWh";
                        } else {
                            return this.value;
                        }
                        
                    },
                    style: {
                        color: "#333333"
                    },
                    x: 10,
                    y: -10,
                    align: "left"
                },
                offset: 0,
                opposite: false
            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    enabled: false,
                    text: 'Rainfall',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    enabled: true,
                    format: '{value} kwh',
                    x: 150,
                    y: 0,
                    style: {
                        color: Highcharts.getOptions().colors[0],
                    }
                }
            }],
            tooltip: {
                shared: true
            },
            plotOptions: {
                area: {
                  stacking: 'percent',
                  lineColor: '#ffffff',
                  lineWidth: 1,
                  marker: {
                      lineWidth: 1,
                      lineColor: '#ffffff'
                  },
                  pointPlacement: "on"
                }
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: 0,
                y: 0,
                floating: true,
                style: {

                }
            },
            credits: {
                enabled: false
            },
            series: series
        };
        return options;
    }
}

export default new ChartService();