import { ResponsiveBar } from "@nivo/bar";
import getLabelName from "../../ui-components/SharedFunction";

export const CustomResponsiveBar = ({
  xLabel,
  yLabel,
  data,
  layout,
  enableGridY = false,
  margin,
  keys,
  indexBy,
  legends,
  colors,
  labelTextColor,
  padding,
}) => {
  const mg =
    margin !== null && margin !== undefined
      ? margin
      : layout === "horizontal"
      ? { top: 10, right: 10, bottom: 60, left: 95 }
      : {
          top: 10,
          right: 60,
          bottom: 60,
          left: 60,
        };
  return (
    <ResponsiveBar
      padding={0.4}
      data={data}
      keys={keys !== null && keys !== undefined ? keys : ["Data"]}
      indexBy={indexBy !== null && indexBy !== undefined ? indexBy : "label"}
      layout={layout}
      margin={mg}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={colors !== null && colors !== undefined ? colors : ["#3F51B5"]}
      groupMode="grouped"
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: getLabelName(xLabel),
        legendPosition: "middle",
        legendOffset: 32,
        format: (values) => {
          return values.length > 10 ? values.substring(0, 10) + "..." : values;
        },
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: getLabelName(yLabel),
        legendPosition: "middle",
        legendOffset: layout === "horizontal" ? -90 : -40,
        format: (values) => {
          return values.length > 10 ? values.substring(0, 10) + "..." : values;
        },
      }}
      enableLabel={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={
        labelTextColor !== null && labelTextColor !== undefined
          ? labelTextColor
          : ["#FFFFFF"]
      }
      role="application"
      enableGridY={enableGridY}
      legends={legends !== null && legends !== undefined ? legends : []}
    />
  );
};
