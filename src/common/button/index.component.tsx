import React from "react";

interface ButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "filled" | "outlined";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  variant,
  fullWidth,
  children,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={`${fullWidth ? "w-full" : ""} py-3 px-6 font-medium ${
        variant === "filled"
          ? "text-white bg-primary"
          : "text-primary border-2 border-primary"
      } rounded-md`}
    >
      <span>{children}</span>
    </button>
  );
};

export default ButtonComponent;
