import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
const { Doughnut } = require("react-chartjs-2");
import ChartDoughnut from './ChartDoughnut';

describe("Component: ChartDoughnut", () => {
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

  const wrapp = shallow(<Doughnut data={data} options={options} />);
  it("Check for existence of Line", () => {
        
        const ChartComponent = wrapp.find('<ChartComponent type="doughnut"');
        assert.equal(ChartComponent.length, 0);
      
  });
});
