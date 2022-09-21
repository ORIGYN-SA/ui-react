import React,{ createContext, useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import type { layoutType } from "./Layouts";
import { Snack } from "./Snack";

export type SnackBarProps = {
  layout: layoutType;
  message: string;
  icon?: JSX.Element;
  actionText?: string;
  action?: Function;
  position?: string;
};

export type ContextType = {
  snackBar: SnackBarProps | undefined;
  isOpen?: boolean;
  snackBarArray?: SnackBarProps[];
  durationms?: number;
  addSnackBar: (snackbar: SnackBarProps) => void;
};

export const SnackContext = createContext<ContextType>(
  undefined
);


const SnackProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [snackBar, setSnackBar] = useState<SnackBarProps>(undefined);
    const [snackBarArray, setSnackBarArray] = useState<SnackBarProps[]>([]);

    const addSnackBar = (snackbar: SnackBarProps) => {
      setIsOpen(true);
      setSnackBarArray((prev) => [...prev, snackbar]);
    };

    useEffect(() => {
      if(snackBarArray.length > 0){
        const timer = setTimeout(() => {
          setSnackBarArray((prev) => prev.slice(1));
        }, 2000);
        return () => clearTimeout(timer);
      }
    },[snackBarArray])
 
  return (
    <SnackContext.Provider value={{
      isOpen,
      snackBar,
      snackBarArray,
      addSnackBar
    }}>
      {children}
      <Snack/>
    </SnackContext.Provider>
  );
};

export default SnackProvider;
