import React, { useContext } from "react";
import { SnackContext, ContextType } from "./SnackProvider";

export const useSnackBarContext = (): ContextType => {
  const context = useContext(SnackContext);

  if (context === undefined) {
    throw new Error(
      "useSnackBarContext must be used within a SnackBarProvider"
    );
  }

  return context;
};
