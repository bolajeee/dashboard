import { Line } from "react-chartjs-2";

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import { lineChartData } from "../../data/dummy";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip
);

const LineChart = () => {
     const lineChartOptions = {
       responsive: true,
       plugins: {
         legend: {
           position: "bottom",
         },
         title: {
           display: true,
           text: "This a graph representing my Weekly Expenses and Budget",
         },
       },
     };

  return <Line options={lineChartOptions} data={lineChartData} />;
};

export default LineChart;
