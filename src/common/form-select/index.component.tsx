import React from "react";

interface FormSelectComponentProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

const FormSelectComponent: React.FC<FormSelectComponentProps> = ({
  label,
  children,
  ...selectProps
}) => {
  return (
    <div className={"space-y-2"}>
      <span className={"font-medium"}>{label}</span>

      <div
        className={
          "p-3 flex items-center gap-2 bg-gray-light border border-gray-main rounded-md"
        }
      >
        <select
          {...selectProps}
          className={
            "flex-1 text-gray-dark font-medium bg-transparent focus:outline-none"
          }
        >
          {children}
        </select>
      </div>
    </div>
  );
};

export default FormSelectComponent;
