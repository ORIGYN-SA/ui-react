import React, { useContext } from "react";
import { SnackContext, ContextType } from "./SnackProvider";

export const useSnackBarContext = (): ContextType => {
  const context = useContext(SnackContext);

  if (context === undefined) {
    throw new Error(
      "ERROR : Looks that SnackBarProvider is not defined"
    );
  }

  return context;
};
