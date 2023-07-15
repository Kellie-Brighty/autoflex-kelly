import React, { createContext, useState } from "react";

interface GlobalContextInterface {
  estimateModal: boolean;
  setEstimateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialModalContext: GlobalContextInterface = {
  estimateModal: false,
  setEstimateModal: () => {},
};

export const GlobalContext = createContext(initialModalContext);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [estimateModal, setEstimateModal] = useState(false);
  return (
    <GlobalContext.Provider value={{ estimateModal, setEstimateModal }}>
      {children}
    </GlobalContext.Provider>
  );
};
