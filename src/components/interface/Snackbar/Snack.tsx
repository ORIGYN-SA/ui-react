import React, { useRef} from "react";
import { useSnackBarContext } from "./useSnackContext";
import { Styles } from "./SnackStyles";
import { Layouts } from "./Layouts";

export const Snack = (props) => {
  
  const { snackBar, snackBarArray, isOpen } = useSnackBarContext();
  const snackRef = useRef(null);
  console.log(snackBar);
  console.log(isOpen);
  console.log(snackBarArray);
  return isOpen && snackBarArray.length > 0 ? (
    <div>
      {snackBarArray.map((snack) => (
        <Styles ref={snackRef} key={snackBarArray.indexOf(snack)}>
        {Layouts[snack.layout](snack)}
        </Styles>
      ))}
    </div>
  ) : null;
};
