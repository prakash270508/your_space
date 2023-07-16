import React from 'react'
import { Bar } from "react-chartjs-2";
import {Chart , BarElement , CategoryScale, LinearScale , Tooltip, Legend} from 'chart.js'

Chart.register(
    BarElement , CategoryScale, LinearScale , Tooltip, Legend
)

export default function Bargraph() {

    const data = {
        labels: ["Total Students","Left Students", "Contining Students", "Inactive User"],
        datasets: [
          {
            label: "Number of Students",
            data: [20000, 5000, 10000, 5000],
            backgroundColor: ["#ff6900", "red", "green" , "#ffc800"],
          },
        ],
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1000,
              max: 40,
            },
          },
        },
        plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
      };

  return <Bar data={data} options={options} />;
}
