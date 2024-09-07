import {
  SparklineComponent,
  SparklineTooltip,
  Inject,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={5}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 5 }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;