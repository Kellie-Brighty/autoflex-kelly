import { ReceiptPercentIcon } from "@heroicons/react/24/outline";
import React from "react";

const SubscriberNextPremiumComponent = () => {
  return (
    <div
      className={
        "relative w-full h-full p-6 text-white bg-secondary rounded-md"
      }
    >
      <div
        className={
          "absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 w-32 h-48 rounded-full bg-white opacity-25 blur-2xl"
        }
      />

      <div className={"h-full flex flex-col justify-between"}>
        <ReceiptPercentIcon className={"w-16 h-16"} />

        <div className={"flex flex-col gap-2"}>
          <span className={"text-2xl text-white opacity-75 truncate"}>
            Your Next Premium
          </span>
          <span className={"text-4xl font-grotesk font-bold"}>₦48,574.21</span>
        </div>

        <div className={"flex items-center gap-3"}>
          <span className={"text-lg text-white opacity-75 truncate"}>
            Due Date:
          </span>
          <span className={"text-2xl font-grotesk font-bold"}>
            22nd Jul, 2023
          </span>
        </div>
      </div>

      <div
        className={
          "absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-32 h-48 rounded-full bg-white opacity-25 blur-2xl"
        }
      />
    </div>
  );
};

export default SubscriberNextPremiumComponent;
