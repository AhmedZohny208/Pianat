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
  elements: {
    point:{
      radius: 0
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    xAxis: {
      display: false,
      reverse: true,
      grid: {
        display: false
      }
    },
    myScale: {
      position: 'right',
      min: 0,
      max: 30000,
      grid: {
        lineWidth: 2,
        drawTicks: false,
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

export const data = {
  labels: labels,
  datasets: [{
    data: [10000, 12000, 15000, 25000, 20000, 16000, 28000, 22000, 24000, 26000, 20000, 14000],
    fill: true,
    backgroundColor: 'rgba(0, 32, 68, 0.25)',
    borderColor: '#000',
    tension: 0.5
  }]
};

export function MedicalGraph() {
  return <Line options={options} data={data} />;
}