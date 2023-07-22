import React from "react";

interface ButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "sm" | "base";
  variant: "filled" | "outlined" | "ghost";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  size,
  variant,
  fullWidth,
  children,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={`${fullWidth ? "w-full" : ""} ${
        size === "sm" ? "py-1 px-3" : size === "base" ? "py-3 px-6" : ""
      } font-medium ${
        variant === "filled"
          ? "text-white bg-primary"
          : variant === "outlined"
          ? "text-primary border-2 border-primary"
          : variant === "ghost"
          ? "text-primary bg-primary bg-opacity-5"
          : ""
      } rounded-md`}
    >
      <span>{children}</span>
    </button>
  );
};

export default ButtonComponent;
