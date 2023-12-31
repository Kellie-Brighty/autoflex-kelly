import DashboardStatistics from "@/components/admin/DashboardStatistics";
import AdminLayout from "@/layouts/admin/index.layout";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BaseAxisProps } from "recharts/types/util/types";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import FormSelectComponent from "@/common/form-select/index.component";
import DoughnutChartComponent from "@/common/charts/doughnut";

const data = [
  {
    name: "January",
    active: 262307,
    abandoned: 217661,
    awaiting: 333693,
    expired: 131646,
    pending: 222350,
  },
  {
    name: "February",
    active: 202413,
    abandoned: 351957,
    awaiting: 295258,
    expired: 322906,
    pending: 350220,
  },
  {
    name: "March",
    active: 166823,
    abandoned: 169874,
    awaiting: 224667,
    expired: 147465,
    pending: 132064,
  },
  {
    name: "April",
    active: 122003,
    abandoned: 288313,
    awaiting: 264540,
    expired: 334444,
    pending: 318945,
  },
  {
    name: "May",
    active: 112230,
    abandoned: 157325,
    awaiting: 115809,
    expired: 309721,
    pending: 164869,
  },
  {
    name: "June",
    active: 286450,
    abandoned: 214372,
    awaiting: 355097,
    expired: 188296,
    pending: 318167,
  },
];

const pieData = [
  { name: "Subscribers", value: 21993 },
  { name: "Agents", value: 324904 },
];

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

export default function AdminOverview() {
  return (
    <AdminLayout
      title={"Welcome back Admin 👋"}
      caption={"Monday, 05 Agust 2022"}
    >
      <div className={"grid grid-cols-12 gap-8"}>
        <div className={"col-span-12"}>
          <DashboardStatistics
            title={"Dashboard Statistics"}
            firstBoxImageUrl={"/assets/admin/active-policies.png"}
            firstBoxTitle={"Active Policies"}
            firstBoxPrice={"40,555"}
            secondBoxImageUrl={"/assets/admin/active-renewals.png"}
            secondBoxTitle={"Awaiting Renewals"}
            secondBoxPrice={"40,555"}
            thirdBoxImageUrl={"/assets/admin/deactivated-policies.png"}
            thirdBoxTitle={"Deactivated Policies"}
            thirdBoxPrice={"40,555"}
            fourthBoxImageUrl={"/assets/admin/expired-policies.png"}
            fourthBoxTitle={"Expired Policies"}
            fourthBoxPrice={"40,555"}
          />
        </div>

        <div className={"col-span-12 xl:col-span-8"}>
          <div className={"w-full p-6 space-y-6 bg-white rounded-md"}>
            <div className={"flex items-center justify-between gap-3"}>
              <div className={"flex items-center gap-2"}>
                <h3 className={"text-lg font-medium"}>Policy Statistics</h3>
                <InformationCircleIcon className={"w-5 h-5 text-gray-dark"} />
              </div>

              <FormSelectComponent>
                <option>This Year</option>
                <option>This Year</option>
                <option>This Year</option>
              </FormSelectComponent>
            </div>

            <ResponsiveContainer
              width={"100%"}
              height={"100%"}
              className={"max-h-96 aspect-video"}
            >
              <BarChart data={data}>
                <XAxis dataKey={"name"} axisLine={false} tick={XTick} />
                <YAxis axisLine={false} tick={YTick} />
                <CartesianGrid strokeWidth={0.5} />

                <Tooltip />

                <Bar dataKey={"active"} fill={"rgb(34 197 94)"} />
                <Bar dataKey={"abandoned"} fill={"rgb(99 102 241)"} />
                <Bar dataKey={"awaiting"} fill={"rgb(234 179 8)"} />
                <Bar dataKey={"expired"} fill={"rgb(239 68 68)"} />
                <Bar dataKey={"pending"} fill={"rgb(24 27 146)"} />

                <Legend />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={"col-span-12 xl:col-span-4"}>
          <div
            className={
              "w-full h-full p-6 flex flex-col justify-between bg-white rounded-md"
            }
          >
            <div className={"flex items-center justify-between gap-3"}>
              <div className={"flex items-center gap-2"}>
                <h3 className={"text-lg font-medium"}>User Statistics</h3>
              </div>

              <FormSelectComponent>
                <option>This Year</option>
                <option>This Year</option>
                <option>This Year</option>
              </FormSelectComponent>
            </div>

            <DoughnutChartComponent
              data={pieData}
              dataKey={"value"}
              nameKey={"name"}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
