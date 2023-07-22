import { ArrowRightIcon, TruckIcon } from "@heroicons/react/24/outline";
import React from "react";

interface AgentVehicleCardComponent {
  carName: string;
  plateNumber: string;
  registrationName: string;
  color: string;
  premium: number;
}

const AgentVehicleCardComponent: React.FC<AgentVehicleCardComponent> = ({
  carName,
  plateNumber,
  registrationName,
  color,
  premium,
}) => {
  return (
    <div
      className={
        "col-span-12 lg:col-span-4 xl:col-span-3 p-6 space-y-6 bg-white rounded-md"
      }
    >
      <div className={"space-y-3"}>
        <TruckIcon className={"w-8 h-8"} />
        <h3 className={"text-lg font-medium"}>{carName}</h3>
      </div>

      <div className={"space-y-3"}>
        <div className={"grid grid-cols-12 items-center gap-2"}>
          <span className={"col-span-7 text-sm text-gray-dark"}>
            Plate Number
          </span>

          <span className={"col-span-5 text-sm font-medium text-right"}>
            {plateNumber}
          </span>
        </div>

        <div className={"grid grid-cols-12 items-center gap-2"}>
          <span className={"col-span-7 text-sm text-gray-dark"}>
            Registration Name
          </span>

          <span
            className={"col-span-5 text-sm font-medium text-right truncate"}
          >
            {registrationName}
          </span>
        </div>

        <div className={"grid grid-cols-12 items-center gap-2"}>
          <span className={"col-span-7 text-sm text-gray-dark"}>Color</span>

          <span
            className={"col-span-5 text-sm font-medium text-right truncate"}
          >
            {color}
          </span>
        </div>
      </div>

      <div className={"w-full h-0.5 bg-gray-main"} />

      <div className={"flex items-center justify-between gap-2"}>
        <h1 className={"text-2xl font-grotesk font-bold"}>
          ₦{premium.toLocaleString()}
        </h1>

        <ArrowRightIcon className={"w-5 h-5 text-gray-dark"} />
      </div>
    </div>
  );
};

export default AgentVehicleCardComponent;
