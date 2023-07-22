import React from "react";
import {
  CheckIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

interface SubscriberTransactionStatusChipComponentProps {
  type: "success" | "pending" | "failed";
}

const subscriberTransactionChipTypeMap = {
  success: "Successful",
  pending: "Pending",
  failed: "Failed",
};

const SubscriberTransactionStatusChipComponent: React.FC<
  SubscriberTransactionStatusChipComponentProps
> = ({ type }) => {
  const Icon =
    type === "success"
      ? CheckIcon
      : type === "pending"
      ? ClockIcon
      : type === "failed"
      ? ExclamationTriangleIcon
      : null;

  return (
    <div
      className={`py-1 px-3 inline-flex items-center justify-center gap-2 ${
        type === "success"
          ? "text-green-500 font-medium bg-green-500"
          : type === "pending"
          ? "text-yellow-500 font-medium bg-yellow-500"
          : type === "failed"
          ? "text-red-500 font-medium bg-red-500"
          : ""
      } bg-opacity-10 rounded-md`}
    >
      {Icon && <Icon className={"w-5 h-5"} />}
      <span>{subscriberTransactionChipTypeMap[type]}</span>
    </div>
  );
};

export default SubscriberTransactionStatusChipComponent;
