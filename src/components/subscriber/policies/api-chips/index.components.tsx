import React from "react";

interface apiChipsProps {
  type: "delivered" | "not_delivered";
}

const apiChipsTypeMap = {
  delivered: "Delivered",
  not_delivered: "Not delivered",
};

const ApiStatusChips: React.FC<apiChipsProps> = ({ type }) => {
  return (
    <span
      className={`py-1 px-3 ${
        type === "delivered"
          ? "text-green-500 font-medium bg-green-500"
          : type === "not_delivered"
          ? "text-red-500 font-medium bg-red-500"
          : ""
      } bg-opacity-10 rounded-md`}
    >
      {apiChipsTypeMap[type]}
    </span>
  );
};

export default ApiStatusChips;
