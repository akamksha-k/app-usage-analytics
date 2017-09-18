import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Component } from "react";
const data = {
  labels: ["2 Sections Complete", "1 Section In Review", " 5 Section In Progress"],
  datasets: [
    {
      data: [2, 1, 5],
      pointStyle: "circle",
      backgroundColor: ["#3566ea", "#55a1e8", "#1eaaf1"],
      hoverBackgroundColor: ["#3566ea", "#55a1e8", "#1eaaf1"]
    }
  ]
};
const options = {
  responsive: true,
  legend: {
    position: "right"
  }
};

export class ChartDoughnut extends Component {
  render() {
    return (
      <div>
        <Doughnut data={data} options={options} />
      </div>
    );
  }
}
