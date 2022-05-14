import React from 'react'
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2'

Chart.register(
  Tooltip, Title, ArcElement, Legend,
)
Chart.register(ChartDataLabels);

const data = {
  labels: [
    'اسهم البنوك',
    'اسهم الشركات المقيدة',
    'اسهم شركات القطاع الصحى',
    'اسهم الشركات العقارية',
  ],
  datasets: [{
    data: [50.2, 75.3, 45.4, 10.5],
    backgroundColor: [
      '#405189',
      '#299CDB',
      '#0AB39C',
      '#F06548'
    ],
    borderColor: [
      '#405189',
      '#299CDB',
      '#0AB39C',
      '#F06548'
    ],
    borderWidth: [
      '0',
      '0',
      '0',
      '0'
    ],
    borderRadius: 0,
    borderAlign: 'center'
  }]
};

const options = {
  cutout: 75,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: '#fff',
      align: 'right',
      offset: 10,
      font: {
        size: 18,
        family: 'Cairo'
      }
    },
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  },
};

const plugins = [{
  beforeDraw: function(chart) {
    var width = chart.width,
      height = chart.height,
      ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 200).toFixed(3);
      ctx.font = fontSize + "em Cairo";
      ctx.textBaseline = "top";
      var text = "2394",
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;
      textY = textY - 10;
      textX = textX + 40;
      fontSize = 4
      ctx.fillText(text, textX, textY);
      ctx.save();
  },
  ChartDataLabels
}]

export default function EquityFundTransactions() {
  return (
    <div style={{ width: '254px', height: '254px' }}>
      <Doughnut data={data} options={options} plugins={plugins} />
    </div>
  )
}
