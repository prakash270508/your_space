import React from 'react'
import {Chart , ArcElement , Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'

Chart.register(
    ArcElement,Tooltip, Legend
)

const data = {
    labels: ["Delhi","Bangalore", "Jaipur", "Mumbai"],
    datasets: [
      {
        label: "Number of Students",
        data: [20000, 5000, 10000, 5000],
        backgroundColor: ["#ff6b6b", "#3bcf9a", "red" , "green"],
      },
    ],
  };

  const options = {
    plugins: {
        legend: {
          display: false, // Hide the legend
        },
      },
  };

export default function PiChart() {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  )
}