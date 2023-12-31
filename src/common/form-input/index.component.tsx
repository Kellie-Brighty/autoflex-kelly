import React from "react";

interface FormInputComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  Icon?: React.ReactNode;
  helper?: string | React.ReactNode;
}

const FormInputComponent: React.FC<FormInputComponentProps> = ({
  label,
  Icon,
  helper,
  ...inputProps
}) => {
  return (
    <div className={"space-y-2"}>
      {label && <span className={"font-medium"}>{label}</span>}

      <div
        className={
          "p-3 flex items-center gap-2 bg-gray-light border border-gray-main rounded-md"
        }
      >
        {Icon}
        <input
          {...inputProps}
          className={
            "flex-1 text-gray-dark font-medium bg-transparent focus:outline-none"
          }
        />
      </div>

      {helper && <div className={"text-sm text-gray-dark"}>{helper}</div>}
    </div>
  );
};

export default FormInputComponent;

// modal
// otp page
// plan choose page
