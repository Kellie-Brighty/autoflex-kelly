import React from "react";

interface remarksComponentProps {
  type: "gains" | "loss";
}

const remarksChipTypeMap = {
  gains: "Gains",
  loss: "Loss",
};

const RemarkChipsComponent: React.FC<remarksComponentProps> = ({ type }) => {
  return (
    <span
      className={`py-1 px-3 ${
        type === "gains"
          ? "text-green-500 font-medium bg-green-500"
          : type === "loss"
          ? "text-red-500 font-medium bg-red-500"
          : ""
      } bg-opacity-10 rounded-md`}
    >
      {remarksChipTypeMap[type]}
    </span>
  );
};

export default RemarkChipsComponent;
