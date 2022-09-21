import React from "react";
import { useSnackBarContext } from './useSnackContext';
import ErrorIcon from "../../icons/Error";
export const Component1 = () => {
  const {createSnackBar,addSnackBar}=useSnackBarContext();  

  const handleClick = () => {
   addSnackBar({
      message: "This is a snackbar",
      layout: "oneLine",
      durationms: 5000,
      position: "bottom",
    });
  };

  return <button onClick={handleClick}>show</button>;
};


export const Component2 = () => {
  const {createSnackBar,addSnackBar}=useSnackBarContext();   

  const handleClick = () => {
   addSnackBar({
      message: "This is a snackbar with icon",
      layout: "oneLineIcon",
      durationms: 5000,
      position: "bottom",
      icon: <ErrorIcon />,
    });
  };

  return <button onClick={handleClick}>show</button>;
};


