import {
  CheckIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type SubscriberRecentTransactionType = "success" | "pending" | "error";

export interface SubscriberRecentTransactionItemComponentProps {
  type: SubscriberRecentTransactionType;
  id: string;
  date: string;
  amount: number;
}

const SubscriberRecentTransactionItemComponent: React.FC<
  SubscriberRecentTransactionItemComponentProps
> = ({ type, id, date, amount }) => {
  const Icon =
    type === "success"
      ? CheckIcon
      : type === "pending"
      ? ClockIcon
      : type === "error"
      ? ExclamationTriangleIcon
      : null;

  return (
    <div
      className={
        "p-3 flex items-center justify-between gap-3 border-b border-gray-main"
      }
    >
      <div className={"flex items-center gap-2"}>
        <div
          className={`p-3 ${
            type === "success"
              ? "text-green-500 bg-green-500"
              : type === "pending"
              ? "text-yellow-500 bg-yellow-500"
              : type === "error"
              ? "text-red-500 bg-red-500"
              : ""
          } bg-opacity-10 rounded-full`}
        >
          {Icon && <Icon className={`w-8 h-8 text-inherit`} />}
        </div>

        <div className={"flex flex-col"}>
          <span className={"font-medium"}>
            Payment from <span className={"text-primary"}>{id}</span>
          </span>

          <span className={"text-gray-dark"}>{date}</span>
        </div>
      </div>

      <span className={"text-lg font-grotesk font-bold"}>
        ₦{amount.toLocaleString()}
      </span>
    </div>
  );
};

export default SubscriberRecentTransactionItemComponent;
