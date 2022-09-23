import React, { useRef} from "react";
import { useSnackBarContext } from "./useSnackContext";
import { Styles } from "./SnackStyles";
import { Layouts } from "./Layouts";

export const Snack = () => {
  const { snackBarArray, isOpen} = useSnackBarContext();
  const snackRef = useRef(null);
  return isOpen && snackBarArray.length > 0 ? (
    <div>
      {snackBarArray.map((snack,index) => (
        <Styles ref={snackRef} key={index}>
        {Layouts[snack.layout](snack)}
        </Styles>
      ))}
    </div>
  ) : null;
};
