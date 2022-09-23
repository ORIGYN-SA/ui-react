import React,{ useRef } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { useSnackBarContext } from "./useSnackContext";
import { Styles } from "./SnackStyles";
import { Layouts } from "./Layouts";

export const Snack = () => {
  const { snackBarArray, isOpen,snackPosition } = useSnackBarContext();
  const SnackContainer=styled.div`
  position: fixed;
  top: ${snackPosition?.top};
  bottom: ${snackPosition?.bottom};
  left: ${snackPosition?.left};
  right: ${snackPosition?.right};
  z-index: 1000;
  text-align: ${snackPosition?.align};
`;
  const containerRef = useRef(null);
  if(!isOpen && snackBarArray.length===0) return null;
  return  ReactDOM.createPortal(
    <SnackContainer ref={containerRef}>
         {snackBarArray.map((snack,index) => (
           <Styles key={index}>
           {Layouts[snack.layout](snack)}
           </Styles>
         ))}
      </SnackContainer>
       , document.body)
}


