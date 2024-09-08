import {Category, Inject, StackingColumnSeries, Tooltip} from '@syncfusion/ej2-react-charts'
import { Legend } from 'chart.js';
import { IgrSparkline } from "igniteui-react-charts";

const SparkLineChart = ({ height, width, data, currentColor }) => {
  return (
    <div className="container sample">
      <div className="container">
        <IgrSparkline
          height={height}
          width={width}
          displayType="Line"
          dataSource={data}
          minimum={2}
          maximum={10}
          valueMemberPath="yval"
          labelMemberPath="x"
          toolTipType="item"
          showDefaultTooltip="true"
          color={currentColor}
        />
        <Inject services={[StackingColumnSeries, Category, Tooltip, Legend]} />
      </div>
    </div>
  );
};

export default SparkLineChart;
