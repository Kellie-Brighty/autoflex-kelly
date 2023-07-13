import React from "react";

interface FormCheckboxComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormCheckboxComponent: React.FC<FormCheckboxComponentProps> = ({
  label,
  ...inputProps
}) => {
  return (
    <div className={"flex items-center gap-2"}>
      <input
        type={"checkbox"}
        {...inputProps}
        className={
          "p-3 text-gray-dark font-medium bg-gray-light border border-gray-main rounded-md focus:outline-none"
        }
      />
      <span className={"font-medium"}>{label}</span>
    </div>
  );
};

export default FormCheckboxComponent;
