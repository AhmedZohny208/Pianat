import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    }
  },
  scales: {
    xAxis: {
      reverse: true,
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: 'Cairo',
          size: 18
        },
        color: '#92929D',
        padding: 10
      }
    },
    myScale: {
      position: 'right',
      min: 0,
      max: 40000,
      grid: {
        lineWidth: 3,
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
}

const labels = ['صندوق اسهام', 'صندوق اعمار', 'صندوق انماء', 'صندوق بناء'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [5000, 28000, 32000, 11000],
      borderRadius: 7,
      // backgroundColor: ["#5541D7", "#5541D7", "#5541D7", "#5541D7"],
      backgroundColor(c) {
        const value = c.raw;
        let alpha = (10 + value) / 11000;
        console.log(alpha)
        return `rgba(85, 65, 215, ${alpha})`
      },
      borderSkipped: false,
      barThickness: 19,
    }
  ],
};

export default function ActiveCashFlow() {
  return (
    <Bar options={options} data={data} />
  )
}
