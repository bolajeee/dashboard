
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  StackingColumnSeries,
  Category,
  Tooltip,
  Legend,
} from "@syncfusion/ej2-react-charts";


const StackedChart = ({ height, width, data, YAxis, XAxis, CustomSeries }) => {
    return (
    <div>
      <ChartComponent
        primaryXAxis={XAxis}
        primaryYAxis={YAxis}
        tooltip={{ enable: true }}
        legendSettings={{ visible: true }}
              height={height}
              width={width}
      >
        <Inject services={[StackingColumnSeries, Category, Tooltip, Legend]} />
        <SeriesCollectionDirective>
          {CustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default StackedChart;
