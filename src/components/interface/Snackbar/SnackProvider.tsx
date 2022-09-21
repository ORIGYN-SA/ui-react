import React,{ createContext, useState, useRef } from "react";
import type { ReactNode } from "react";
import type { layoutType } from "./Layouts";
import { Snack } from "./Snack";

export type SnackBarProps = {
  layout: layoutType;
  message: string;
  icon?: JSX.Element;
  actionText?: string;
  action?: Function;
  durationms?: number;
  position?: string;
};

export type ContextType = {
  snackBar: SnackBarProps | undefined;
  isOpen?: boolean;
  snackBarArray?: SnackBarProps[];
  createSnackBar: (snackbar: SnackBarProps) => void;
  addSnackBar: (snackbar: SnackBarProps) => void;
  closeSnackBar?: () => void;
};

export const SnackContext = createContext<ContextType>(
  undefined
);


const SnackProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [snackBar, setSnackBar] = useState<SnackBarProps>(undefined);
    const [snackBarArray, setSnackBarArray] = useState<SnackBarProps[]>([]);

    const addSnackBar = (snackbar: SnackBarProps) => {
      setSnackBarArray((prev) => [...prev, snackbar]);
    };

    let timeout = useRef(0);

    const createSnackBar = (snackbar: SnackBarProps) => {
      setSnackBar(snackbar);
      setIsOpen(true);
    };
    const closeSnackBar = () => {
      setSnackBar(undefined);
      setIsOpen(false);
    };

 
  return (
    <SnackContext.Provider value={{
      isOpen,
      snackBar,
      snackBarArray,
      createSnackBar,
      closeSnackBar,
      addSnackBar
    }}>
      {children}
      <Snack />
    </SnackContext.Provider>
  );
};

export default SnackProvider;
