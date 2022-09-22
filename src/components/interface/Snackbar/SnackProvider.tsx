import React, { createContext, useState, useRef, useEffect, FC } from "react";
import type { ReactNode } from "react";
import type { layoutType } from "./Layouts";
import { Snack } from "./Snack";

export type SnackBarProps = {
  layout: layoutType;
  message: string;
  icon?: JSX.Element;
  actionText?: string;
  action?: Function;
};

export type ContextType = {
  isOpen: boolean;
  snackBarArray?: SnackBarProps[];
  addSnackBar: (snackbar: SnackBarProps) => void;
};
export const SnackContext = createContext<ContextType>(
  undefined
);
export type SnackProviderProps = {
  durationms?: number;
  maxSnack?: number;
  position?: string;
};

const SnackProvider: React.FC<SnackProviderProps> = ({ children, durationms, maxSnack, position }) => {

  durationms = durationms || 4000;
  maxSnack = maxSnack || 3;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [snackBarArray, setSnackBarArray] = useState<SnackBarProps[]>([]);

  const addSnackBar = (snackbar: SnackBarProps) => {
    setIsOpen(true);
    setSnackBarArray((prev) => [...prev, snackbar]);
    if (snackBarArray.length >= maxSnack) {
      setSnackBarArray((prev) => prev.slice(snackBarArray.length - maxSnack + 1));
    };
  };

  useEffect(() => {
    if (snackBarArray.length > 0) {
      const timer = setTimeout(() => {
        setSnackBarArray((prev) => prev.slice(1));
      }, durationms);
      return () => clearTimeout(timer);
    }
  }, [snackBarArray])

  return (
    <SnackContext.Provider value={{
      isOpen,
      snackBarArray,
      addSnackBar,
    }}
    >
      {children}
      <Snack />
    </SnackContext.Provider>
  );
};

export default SnackProvider;
