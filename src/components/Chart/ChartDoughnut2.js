import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Component } from "react";
const data = {
  labels: ["2 Sections Complete", "1 Section In Review", " 3 Section In Progress", '1 Sections not started'],
  datasets: [
    {
      data: [2, 1, 3,1],
      pointStyle: "circle",
      backgroundColor: ["#3566ea", "#55a1e8", "#1eaaf1","#e8f0ff"],
      hoverBackgroundColor: ["#3566ea", "#55a1e8", "#1eaaf1","#e8f0ff"]
    }
  ]
};
const options = {
  responsive: true,
  legend: {
    position: "right"
  }
};

export class ChartDoughnut2 extends Component {
  render() {
    return (
      <div>
        <Doughnut data={data} options={options} />
      </div>
    );
  }
}
