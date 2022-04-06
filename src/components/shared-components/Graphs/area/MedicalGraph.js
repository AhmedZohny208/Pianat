import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point:{
      radius: 0
    }
  },
  plugins: {
    legend: {
      display: false
    },
    datalabels: {
      display: false
    },
  },
  scales: {
    xAxis: {
      display: false,
      reverse: true,
      grid: {
        display: false,
      }
    },
    myScale: {
      position: 'right',
      min: 0,
      max: 30000,
      grid: {
        lineWidth: 2,
        drawTicks: false,
        drawBorder: false,
        color: '#E1E1FB'
      },
      ticks: {
        font: {
          size: 20,
          weight: 600,
          family: 'Cairo'
        },
        color: '#92929D',
        callback: function(value, index, values) {
          return value + ' جم';
        },
        stepSize: 10000,
        padding: 20
      }
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemper', 'October', 'November', 'December'];

let width, height, gradient;
function getGradient(ctx, chartArea) {
  // const chartWidth = chartArea.right - chartArea.left;
  // const chartHeight = chartArea.bottom - chartArea.top;
  const chartWidth = 852.6000671386719;
  const chartHeight = 226;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, 258, 0, 32);
    gradient.addColorStop(0, 'rgba(0, 32, 68, 0)');
    gradient.addColorStop(1, 'rgba(0, 32, 68, 0.25)');
  }

  return gradient;
}

export const data = {
  labels: labels,
  datasets: [{
    data: [10000, 12000, 15000, 25000, 20000, 16000, 28000, 22000, 24000, 26000, 20000, 14000],
    fill: true,
    // backgroundColor: '#000',
    backgroundColor: function(context) {
      const chart = context.chart;
      const {ctx, chartArea} = chart;
      return getGradient(ctx, chartArea);
    },
    borderColor: '#002044',
    tension: 0.7
  }]
};

export function MedicalGraph() {
  return (
    <div style={{ height: '290px' }}>
      <Line options={options} data={data} />
    </div>
  );
}

// bottom: 258
// height: 226
// left: 1.5
// right: 854.1000671386719
// top: 32
// width: 852.6000671386719