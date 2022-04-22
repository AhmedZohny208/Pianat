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
    'مخالفات نسب الاستثمار',
    'مخالفات نظم الرقابة',
    'مخالفات الالتزام بالقيود الاستثمارية',
    'مخالفات الحوكمة',
    'مخالفات عرض القوائم المالية'
  ],
  datasets: [{
    data: [34, 20, 75, 10, 255],
    backgroundColor: [
      '#9F203E',
      '#FFAD4C',
      '#904CFF',
      '#010324',
      '#4C6FFF',
    ],
    borderColor: [
      '#9F203E',
      '#FFAD4C',
      '#904CFF',
      '#010324',
      '#4C6FFF',
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
  // onClick: function(e) {
  //   let ctx = e.chart

  //   console.log(ctx)
  // }
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
      var text = "394 مخالفة",
      textX = Math.round((width - ctx.measureText(text).width) / 1),
      textY = height / 2;
      textY = textY - 10
      ctx.fillText(text, textX, textY);
      ctx.save();
  },
  ChartDataLabels
}]

export default function InvestmentFundViolationsGraph() {

  return (
    <div style={{ width: '340px', height: '340px' }}>
      <Doughnut id='mychart' data={data} options={options} plugins={plugins} />
    </div>
  )
}
