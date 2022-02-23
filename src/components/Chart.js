import React from "react";

const Chart = () => {
  return (
    <div>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Single Line Chart</h6>
              <canvas id="line-chart"></canvas>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Multiple Line Chart</h6>
              <canvas id="salse-revenue"></canvas>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Single Bar Chart</h6>
              <canvas id="bar-chart"></canvas>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Multiple Bar Chart</h6>
              <canvas id="worldwide-sales"></canvas>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Pie Chart</h6>
              <canvas id="pie-chart"></canvas>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Doughnut Chart</h6>
              <canvas id="doughnut-chart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chart;
