import React from "react";
import { useSnackBarContext } from './useSnackContext';
import ErrorIcon from "../../icons/Error";
export const Component1 = () => {
  const {addSnackBar}=useSnackBarContext();  

  const handleClick = () => {
   addSnackBar({
      message: "This is a snackbar",
      layout: "oneLine",
      position: "bottom",
    });
  };

  return <button onClick={handleClick}>display simple snack</button>;
};


export const Component2 = () => {
  const {addSnackBar}=useSnackBarContext();   

  const handleClick = () => {
   addSnackBar({
      message: "This is a snackbar with icon",
      layout: "oneLineIcon",
      position: "bottom",
      icon: <ErrorIcon />,
    });
  };

  return <button onClick={handleClick}>display icon snack</button>;
};


