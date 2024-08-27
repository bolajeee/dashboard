import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Title,
    Tooltip,
    plugins
} from 'chart.js';
import { barChartData } from "../../data/dummy";

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,  
    PointElement,
    LineElement,
    Legend,
    Title,
    Tooltip
);

const BarChart = () => {
    const barChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "This a graph representing my Expenses" 
        }}
  };

  return <Bar options={barChartOptions} data={barChartData} />;
};

export default BarChart;
