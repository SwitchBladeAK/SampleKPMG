import { ResponsivePie } from "@nivo/pie";
import React from "react";
const CustomResponsivePie = ({ data, colors, enableArcLabels }) => {
  return (
    <ResponsivePie
      data={data}
      margin={{
        top: 30,
        right: 30,
        bottom: 30,
        left: 30,
      }}
      innerRadius={0.7}
      padAngle={0}
      cornerRadius={0}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      colors={colors}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      enableArcLabels={enableArcLabels}
      enableArcLinkLabels={true}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={["#FFFFFF"]}
    />
  );
};
export default CustomResponsivePie;
