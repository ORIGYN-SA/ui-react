import React,{useContext} from 'react';
import { useSnackBarContext } from './useSnackContext';
import {Styles} from './SnackStyles'; 
import {Layouts} from './Layouts';
export const Snack = (props) => {
  const { snackBar,snackBarArray, isOpen } = useSnackBarContext();
  console.log(snackBar);
  console.log(isOpen);
  console.log(snackBarArray);
  return (
      (isOpen && snackBar) ? (
    <Styles>
      {Layouts[snackBar.layout](snackBar)}
    </Styles>
      ) : (
        <></>
      )

   
  );
};
