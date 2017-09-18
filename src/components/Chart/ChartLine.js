const React = require("react");
const { Line } = require("react-chartjs-2");
import { Component } from "react";

const data = {
  labels: [
    "",
    "06 June",
    "13 June",
    "20 June",
    "27 June",
    "03 July",
    "10 July",
    "17 July",
    "24 July",
    "31 July"
  ],
  datasets: [
    {
      label: "Hours Worked on",
      data: [0, 1, 1.5, 3.5, 3, 3, 5, 7, 1.5, 3.3],
      fill: false,
      pointStyle: "circle",
      borderColor : "#1eaaf1",
      backgroundColor :  "#1eaaf1",
      pointBorderColor :  "#1eaaf1",
      pointBackgroundColor : "#1eaaf1",
      pointBorderWidth : 1
     
    }
  ]
};

const options = {
  responsive: true,
  hover: {
    mode: "dataset"
  },

  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          show: true,
          labelString: "Month"
        }
      }
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          show: true,
          labelString: "Value"
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 10
        }
      }
    ]
  }
};
export class ChartLine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
   return <Line data={data} options={options} />;
  }
}
