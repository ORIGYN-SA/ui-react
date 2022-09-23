import React, { createContext, useState, useRef, useEffect, FC } from "react";
import type { layoutType } from "./Layouts";
import type { positionType } from "./Positions";
import { Positions } from "./Positions";
import { Snack } from "./Snack";

export type SnackBarProps = {
  layout: layoutType;
  message: string;
  icon?: JSX.Element;
  actionText?: string;
  action?: Function;
};

export type containerPosition = {
  top: string;
  right: string;
  bottom: string;
  left: string;
  align: string;
};


export type ContextType = {
  isOpen: boolean;
  snackBarArray?: SnackBarProps[];
  addSnackBar: (snackbar: SnackBarProps) => void;
  snackPosition : containerPosition;
};
export const SnackContext = createContext<ContextType>(
  undefined
);
export type SnackProviderProps = {
  durationms?: number;
  maxSnack?: number;
  position?: positionType;
};

const SnackProvider: React.FC<SnackProviderProps> = ({ children, durationms, maxSnack, position }) => {

  durationms = durationms || 4000;
  maxSnack = maxSnack || 3;
  position = position || "top-right";

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [snackBarArray, setSnackBarArray] = useState<SnackBarProps[]>([]);
  const [queue, setQueue] = useState<SnackBarProps[]>([]);
  const [snackPosition, setSnackPosition] = useState<containerPosition>();

  const addSnackBar = (snackbar: SnackBarProps) => {
    setIsOpen(true);
    if (snackBarArray.length >= maxSnack) {
      setQueue((prev) => [...prev, snackbar]);
    } else {
      setSnackBarArray((prev) => [...prev, snackbar]);
    }
  };

  useEffect(() => {
    setSnackPosition(Positions[position]);
  }, [position]);

  useEffect(() => {
    if (snackBarArray.length > 0) {
      const timer = setTimeout(() => {
        if ((queue.length > 0) && (snackBarArray.length < maxSnack)) {
          setSnackBarArray((prev) => [...prev, queue[0]]);
          queue.shift();
        } else {
          setSnackBarArray((prev) => prev.slice(1));
        }
      }, durationms);
      return () => clearTimeout(timer);
    }
  }, [snackBarArray])

  return (
    <SnackContext.Provider value={{
      isOpen,
      snackBarArray,
      addSnackBar,
      snackPosition
    }}
    >
      {children}
      <Snack />
    </SnackContext.Provider>
  );
};

export default SnackProvider;
