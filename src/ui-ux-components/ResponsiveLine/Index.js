import { ResponsiveLine } from "@nivo/line";
import React from "react";
import getLabelName from "../../ui-components/SharedFunction";
const CustomResponsiveLine = ({
  xLabel,
  yLabel,
  data,
  motionConfig,
  margin,
  fill,
  enablePoints,
  defs,
  legends,
  colors,
  pointColor,
}) => {
  return (
    <ResponsiveLine
      padding={0.4}
      motionConfig={motionConfig}
      data={data}
      margin={margin}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        stacked: true,
        reverse: false,
      }}
      defs={defs && defs}
      fill={fill}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickRotation: 0,
        tickPadding: 5,
        legend: getLabelName(xLabel),
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: getLabelName(yLabel),
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enablePoints={enablePoints}
      pointSize={5}
      colors={colors}
      pointColor={pointColor}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={0.2}
      useMesh={true}
      legends={legends !== null && legends !== undefined ? legends : []}
    ></ResponsiveLine>
  );
};
export default CustomResponsiveLine;
