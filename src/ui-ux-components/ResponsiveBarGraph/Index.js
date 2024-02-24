import { ResponsiveBar } from "@nivo/bar";

export const ResponsiveBarGraph = ({ xLabel, yLabel, data ,layout }) => {
   return (
           <ResponsiveBar
             data={data}
             keys={["data"]}
             indexBy="label"
             layout={`$(layout)`}
             margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
             padding={0.4}
            //  minValue={0}
            //  maxValue={100}
             valueScale={{ type: "linear" }}
             indexScale={{ type: "band", round: true }}
             colors={["#3F51B5"]}
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
               legend: `${xLabel}`,
               legendPosition: "middle",
               legendOffset: 32,
               format: (values) => {
                 return values.length > 10
                   ? values.substring(0, 10) + "..."
                   : values;
               },
             }}
             axisLeft={{
               tickSize: 5,
               tickPadding: 5,
               tickRotation: 0,
               legend: `${yLabel}`,
               legendPosition: "middle",
               legendOffset: -40,
             }}
             enableLabel={true}
             labelSkipWidth={12}
             labelSkipHeight={12}
             labelTextColor={["#FFFFFF"]}
             role="application"
           />
   );
};
                    
              