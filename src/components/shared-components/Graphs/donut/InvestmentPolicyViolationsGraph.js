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
    'صندوق سندى',
    'صندوق نماء',
    'صندوق ثراء',
    'صندوق الخير',
    'صندوق الحكمة',
  ],
  datasets: [{
    data: [8, 6, 10, 6, 30],
    backgroundColor: [
      '#299CDB',
      '#F7B84B',
      '#405189',
      '#0AB39C',
      '#F06548',
    ],
    borderColor: [
      '#299CDB',
      '#F7B84B',
      '#405189',
      '#0AB39C',
      '#F06548',
    ],
    borderWidth: [
      '4',
      '4',
      '4',
      '4',
      '4',
    ],
    borderRadius: 5,
    borderAlign: 'center'
  }]
};

const options = {
  cutout: 105,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: '#fff',
      align: 'right',
      font: {
        size: 18,
        family: 'Cairo'
      }
    },
  },
  elements: {
    arc: {
      borderWidth: 4
    }
  },
};

const plugins = [{
  beforeDraw: function(chart) {
    var width = chart.width,
      height = chart.height,
      ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 200).toFixed(2);
      ctx.font = fontSize + "em Cairo";
      ctx.textBaseline = "top";
      var text = "50 مخالفة",
      textX = Math.round((width - ctx.measureText(text).width) / 1),
      textY = height / 2;
      textX = textX - 10;
      textY = textY - 10
      ctx.fillText(text, textX, textY);
      ctx.save();
  },
  ChartDataLabels
}]

export default function InvestmentPolicyViolationsGraph() {
  return (
    <div style={{ width: '340px', height: '340px' }}>
      <Doughnut data={data} options={options} plugins={plugins} />
    </div>
  )
}
