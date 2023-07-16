import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

export interface Step {
  stepIndex: number;
  stepLabel: string;
  stepStatus: "pending" | "in-progress" | "completed";
}

interface StepsComponentProps {
  steps: Step[];
}

const StepsComponent: React.FC<StepsComponentProps> = ({ steps }) => {
  return (
    <div className={"w-full flex items-center justify-center gap-3"}>
      {steps.map((step, index) => (
        <div
          key={step.stepIndex}
          className={`relative ${
            index === steps.length - 1 ? "" : "flex-1"
          } flex flex-col gap-2`}
        >
          <div
            className={`w-max aspect-square p-3 flex items-center justify-center ${
              step.stepStatus === "pending"
                ? "text-gray-dark border border-gray-main"
                : step.stepStatus === "in-progress"
                ? "text-white bg-indigo-500"
                : step.stepStatus === "completed"
                ? "text-white bg-green-500"
                : ""
            } rounded-full`}
          >
            {step.stepStatus === "completed" ? (
              <CheckIcon className={"w-8 h-8"} />
            ) : (
              <span className={"text-2xl font-bold"}>{step.stepIndex}</span>
            )}
          </div>

          {index < steps.length - 1 ? (
            <div
              className={`absolute top-7 left-16 -translate-y-1/2 w-[calc(100%-56px)] h-0.5 ${
                steps[index + 1].stepStatus === "pending"
                  ? "bg-gray-main"
                  : steps[index + 1].stepStatus === "in-progress"
                  ? "bg-indigo-500"
                  : steps[index + 1].stepStatus === "completed"
                  ? "bg-green-500"
                  : ""
              }`}
            />
          ) : (
            <></>
          )}

          <div>
            <span className={"text-sm text-gray-dark"}>
              Step {step.stepIndex}
            </span>
            <span className={"hidden xl:block font-medium"}>
              {step.stepLabel}
            </span>
          </div>

          <span
            className={`w-max p-2 text-sm font-medium ${
              step.stepStatus === "pending"
                ? "text-gray-dark border border-gray-main"
                : step.stepStatus === "in-progress"
                ? "text-indigo-500 bg-indigo-500"
                : step.stepStatus === "completed"
                ? "text-green-500 bg-green-500"
                : ""
            } bg-opacity-10 rounded-md`}
          >
            {step.stepStatus === "pending"
              ? "Pending"
              : step.stepStatus === "in-progress"
              ? "In Progress"
              : step.stepStatus === "completed"
              ? "Completed"
              : ""}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StepsComponent;
