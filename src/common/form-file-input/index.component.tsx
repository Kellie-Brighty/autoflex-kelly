import React from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

interface FormFileInputComponent
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helper?: string | React.ReactNode;
}
const FormFileInputComponent: React.FC<FormFileInputComponent> = ({
  label,
  helper,
  ...inputProps
}) => {
  return (
    <div className={"space-y-2"}>
      {label && <span className={"font-medium"}>{label}</span>}

      <div
        className={
          "flex items-center gap-2 bg-gray-light border border-gray-main rounded-md overflow-hidden"
        }
      >
        <input
          type={"file"}
          {...inputProps}
          className={
            "flex-1 px-3 text-gray-dark font-medium bg-transparent focus:outline-none"
          }
        />

        <button
          className={
            "p-3 flex items-center gap-2 text-white font-medium bg-primary border-none"
          }
        >
          <CloudArrowUpIcon className={"w-5 h-5"} />
          <span>Upload</span>
        </button>
      </div>

      <div className={"text-sm text-gray-dark"}>{helper}</div>
    </div>
  );
};

export default FormFileInputComponent;
