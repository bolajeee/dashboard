import React, { useEffect, useRef } from "react";
import {
  IgrCategoryChart,
  IgrCategoryChartModule,
} from "igniteui-react-charts";

IgrCategoryChartModule();

const StackedChart = ({ height, width, data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    console.log(data); // Check the data
    if (chartRef.current) {
      chartRef.current.dataSource = data;
    }
  }, [data]);

  return (
    <div>
      <IgrCategoryChart
        ref={chartRef}
        width={width}
        height={height}
        chartType="column"
        xAxisTitle="Month"
        yAxisTitle="Expense"
        isHorizontalZoomEnabled={false}
        isVerticalZoomEnabled={false}
        legend="visible"
        toolTipType="Category"
      />
    </div>
  );
};

export default StackedChart;
