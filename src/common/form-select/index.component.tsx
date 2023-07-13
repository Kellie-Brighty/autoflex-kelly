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
    <div className={"flex flex-col gap-2"}>
      <span className={"font-medium"}>{label}</span>
      <select
        {...selectProps}
        className={
          "p-3 text-gray-dark font-medium bg-gray-light border border-gray-main rounded-md focus:outline-none"
        }
      >
        {children}
      </select>
    </div>
  );
};

export default FormSelectComponent;
