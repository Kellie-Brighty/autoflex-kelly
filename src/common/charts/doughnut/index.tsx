import { Cell, Legend, Pie, PieChart, PieProps, Tooltip } from "recharts";
import React, { useEffect, useRef, useState } from "react";
import generateRandomBrightPastelHex from "../../../utils/generateRandomBlueShadeHex";

const DoughnutChartComponent: React.FC<PieProps> = ({
  data,
  dataKey,
  nameKey,
}) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (
      chartContainerRef.current?.clientWidth &&
      chartContainerRef.current?.clientHeight
    ) {
      setChartSize({
        width: chartContainerRef.current?.clientWidth,
        height: chartContainerRef.current?.clientHeight,
      });
    }
  }, []);

  return (
    <div ref={chartContainerRef} className={"w-full h-full max-h-96"}>
      <PieChart width={chartSize.width} height={chartSize.height}>
        <Tooltip />
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          outerRadius={chartSize.width / 2.5}
          innerRadius={chartSize.width / 5}
          label={false}
        >
          {data?.map((entry, index) => (
            <Cell key={index} fill={generateRandomBrightPastelHex()} />
          ))}
        </Pie>

        <Legend />
      </PieChart>
    </div>
  );
};

export default DoughnutChartComponent;
