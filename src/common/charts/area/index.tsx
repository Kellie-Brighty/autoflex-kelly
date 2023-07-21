import {
  Area,
  AreaChart,
  CartesianGrid,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import React, { useEffect, useRef, useState } from "react";
import { BaseAxisProps } from "recharts/types/util/types";

export interface AreaChartDatum {
  x: string;
  y: number;
}

interface AreaChartComponentProps {
  data: AreaChartDatum[];
}

const XTick: BaseAxisProps["tick"] = ({ x, y, payload }) => (
  <Text x={x} y={y + 16} textAnchor={"middle"} fontSize={13}>
    {payload.value}
  </Text>
);

const YTick: BaseAxisProps["tick"] = ({ x, y, payload }) => (
  <Text x={x - 24} y={y + 4} textAnchor={"middle"} fontSize={13}>
    {payload.value}
  </Text>
);

const AreaChartComponent: React.FC<AreaChartComponentProps> = ({ data }) => {
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
    <div
      ref={chartContainerRef}
      className={"w-full h-auto max-h-64"}
      style={{ aspectRatio: "16 / 6" }}
    >
      <AreaChart width={chartSize.width} height={chartSize.height} data={data}>
        <defs>
          <linearGradient id={"colorY"} x1={"0"} y1={"0"} x2={"0"} y2={"1"}>
            <stop offset={"5%"} stopColor={"#2563EB"} stopOpacity={0.1} />
            <stop offset={"95%"} stopColor={"#2563EB"} stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey={"x"} axisLine={false} tick={XTick} />
        <YAxis axisLine={false} tick={YTick} />
        <CartesianGrid strokeWidth={0.5} />

        <Tooltip />
        <Area
          type={"natural"}
          dataKey={"y"}
          stroke={"#2563EB"}
          strokeWidth={2}
          fill={"url(#colorY)"}
          fillOpacity={1}
        />
      </AreaChart>
    </div>
  );
};

export default AreaChartComponent;
