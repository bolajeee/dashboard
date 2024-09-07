import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const LineChartComponent = ({ width, height, data, id, currentColor }) => {
  return (
    <LineChart
      id={id}
      width={width}
      height={height}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="repSpent" stroke={currentColor} />
    </LineChart>
  );
};

export default LineChartComponent;
