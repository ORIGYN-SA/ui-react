import React from "react";
import { useSnackBarContext } from './useSnackContext';
import ErrorIcon from "../../icons/Error";
import Button from "../Button";
export const Component1 = () => {
  const {addSnackBar}=useSnackBarContext();  

  const handleClick = () => {
   addSnackBar({
      message: "This is a snackbar1",
      layout: "oneLine",
    });
  };

  return <Button onClick={handleClick}>Stack one line snack!</Button>;
};


export const Component2 = () => {
  const {addSnackBar}=useSnackBarContext();   

  const handleClick = () => {
   addSnackBar({
      message: "This is a snackbar with icon2",
      layout: "oneLineIcon",
      icon: <ErrorIcon />,
    });
  };

  return <Button onClick={handleClick}>Stack icon snack!</Button>;
};

export const Component3 = () => {
  const {addSnackBar}=useSnackBarContext();   

  const handleClick = () => {
   addSnackBar({
      message: "This is a snackbar with action3",
      layout: "oneLineButton",
      action: () => alert("You clicked me"),
      actionText: "Click me",
    });
  };

  return <Button onClick={handleClick}>Stack button snack!</Button>;
}

export const Component4 = () => {
  const {addSnackBar}=useSnackBarContext();   

  const handleClick = () => {
   addSnackBar({
      message: "This is a snackbar with action and two lines - This is a snackbar with action and two lines - This is a snackbar with action and two lines - This is a snackbar with action and two lines",
      layout: "twoLinesButton",
      action: () => alert("You clicked me"),
      actionText: "Click me",
    });
  };

  return <Button onClick={handleClick}>Stack two lines button snack!</Button>;
}

export const Component5 = () => {
  const {addSnackBar}=useSnackBarContext();   

  const handleClick = () => {
   addSnackBar({
      message: "This is a snackbar with action and two lines - This is a snackbar with action and two lines - This is a snackbar with action and two lines - This is a snackbar with action and two lines",
      layout: "twoLinesButton",
      action: () => alert("You clicked me"),
      actionText: "Click me",
      snackPosition: "bottom-right",
    });
  };

  return <Button onClick={handleClick}>This is a Snack stacked in a different position!</Button>;
}
