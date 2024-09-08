import React from "react";
import { IgrSparkline } from "igniteui-react-charts";
import { IgrPropertyEditorPropertyDescription } from "igniteui-react-layouts";

const SparkLineChart = ({ height, width, data }) => {
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
          toolTipType="ToolTip" 
        />
        <IgrPropertyEditorPropertyDescription
          propertyPath="ToolTipType"
          name="ToolTipTypeEditor"
          primitiveValue="ToolTip" 
        />
      </div>
    </div>
  );
};

export default SparkLineChart;
