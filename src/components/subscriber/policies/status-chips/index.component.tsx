import React from "react";

interface SubscriberPolicyStatusChipsComponentProps {
  type: "active" | "abandoned" | "awaiting" | "expired" | "pending";
}

const subscriberPolicyChipTypeMap = {
  active: "Active",
  abandoned: "Abandoned",
  awaiting: "Awaiting Renewal",
  expired: "Expired",
  pending: "Pending",
};

const SubscriberPolicyStatusChipsComponent: React.FC<
  SubscriberPolicyStatusChipsComponentProps
> = ({ type }) => {
  return (
    <span
      className={`py-1 px-3 ${
        type === "active"
          ? "text-green-500 font-medium bg-green-500"
          : type === "abandoned"
          ? "text-indigo-500 font-medium bg-indigo-500"
          : type === "awaiting"
          ? "text-yellow-500 font-medium bg-yellow-500"
          : type === "expired"
          ? "text-red-500 font-medium bg-red-500"
          : type === "pending"
          ? "text-yellow-500 font-medium bg-yellow-500"
          : ""
      } bg-opacity-10 rounded-md`}
    >
      {subscriberPolicyChipTypeMap[type]}
    </span>
  );
};

export default SubscriberPolicyStatusChipsComponent;
