import React from "react";

interface DialogComponentProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DialogComponent: React.FC<DialogComponentProps> = ({
  show,
  onClose,
  children,
}) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed top-0 left-0 ${
          show ? "z-10 bg-background bg-opacity-25" : "-z-10"
        } w-full h-screen backdrop-blur transition-colors duration-150`}
      />

      <div
        className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${
          show ? "z-20 opacity-100" : "-z-20 opacity-0"
        } w-11/12 max-h-[91.67%] max-w-4xl bg-white shadow rounded-md 
        transition-opacity duration-150 overflow-y-auto overflow-x-hidden`}
      >
        {children}
      </div>
    </>
  );
};

export default DialogComponent;
