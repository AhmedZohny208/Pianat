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
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(ChartDataLabels);

export const options = {
  indexAxis: 'y',
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    datalabels: {
      color: '#fff',
      anchor: 'start',
      offset: -80,
      align: 'start',
      font: {
        size: 18,
        family: 'Cairo'
      }
    },
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
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        font: {
          family: 'Cairo',
          size: 16,
          weight: 500
        },
        color: '#000',
        padding: 10,
        align: 'end'
      }
    }
  },
};

const labels = ['القطاع التكنولوجى', 'القطاع السياحى', 'القطاع العقارى', 'القطاع الصحى'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [300, 260, 200, 180],
      borderRadius: 6.7,
      backgroundColor: ["#002044", "#299CDB", "#0AB39C", "#F06548"],
      borderSkipped: false,
      barThickness: 32
    }
  ],
};

const plugins = [{ ChartDataLabels }]

export default function ForeignInvestmentsAmount() {
  return (
    <div style={{ height: '290px' }}>
      <Bar options={options} data={data} plugins={plugins} />
    </div>
  )
}
