import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { useSnackBarContext } from "./useSnackContext";
import { Styles } from "./SnackStyles";
import { Layouts } from "./Layouts";
import { Positions } from "./Positions";

const SnackContainerTopLeft = styled.div`
  position: fixed;
  top: ${Positions["top-left"].top};
  bottom: ${Positions["top-left"].bottom};
  left: ${Positions["top-left"].left};
  right: ${Positions["top-left"].right};
  z-index: 1000;
  text-align: ${Positions["top-left"].align};
`;
const SnackContainerTopRight = styled.div`
  position: fixed;
  top: ${Positions["top-right"].top};
  bottom: ${Positions["top-right"].bottom};
  left: ${Positions["top-right"].left};
  right: ${Positions["top-right"].right};
  z-index: 1000;
  text-align: ${Positions["top-right"].align};
`;
const SnackContainerBottomLeft = styled.div`
  position: fixed;
  top: ${Positions["bottom-left"].top};
  bottom: ${Positions["bottom-left"].bottom};
  left: ${Positions["bottom-left"].left};
  right: ${Positions["bottom-left"].right};
  z-index: 1000;
  text-align: ${Positions["bottom-left"].align};
`;
const SnackContainerBottomRight = styled.div`
  position: fixed;
  top: ${Positions["bottom-right"].top};
  bottom: ${Positions["bottom-right"].bottom};
  left: ${Positions["bottom-right"].left};
  right: ${Positions["bottom-right"].right};
  z-index: 1000;
  text-align: ${Positions["bottom-right"].align};
`;

export const Snack = () => {
  const { snackBarArray, isOpen, providerPosition } = useSnackBarContext();

  const containerRef = useRef(null);

  if (!isOpen && snackBarArray.length === 0) return null;
  return ReactDOM.createPortal(
    <>
      <SnackContainerTopRight>
        {snackBarArray.map((snack, index) =>
          (providerPosition === "top-right" &&
            snack.snackPosition === undefined) ||
          snack.snackPosition == "top-right" ? (
            <Styles key={index}>{Layouts[snack.layout](snack)}</Styles>
          ) : null
        )}
      </SnackContainerTopRight>
      <SnackContainerTopLeft>
        {snackBarArray.map((snack, index) =>
          (providerPosition === "top-left" &&
            snack.snackPosition === undefined) ||
          snack.snackPosition == "top-left" ? (
            <Styles key={index}>{Layouts[snack.layout](snack)}</Styles>
          ) : null
        )}
      </SnackContainerTopLeft>
      <SnackContainerBottomLeft>
        {snackBarArray.map((snack, index) =>
          (providerPosition === "bottom-left" &&
            snack.snackPosition === undefined) ||
          snack.snackPosition == "bottom-left" ? (
            <Styles key={index}>{Layouts[snack.layout](snack)}</Styles>
          ) : null
        )}
      </SnackContainerBottomLeft>
      <SnackContainerBottomRight>
        {snackBarArray.map((snack, index) =>
          (providerPosition === "bottom-right" &&
            snack.snackPosition === undefined) ||
          snack.snackPosition == "bottom-right" ? (
            <Styles key={index}>{Layouts[snack.layout](snack)}</Styles>
          ) : null
        )}
      </SnackContainerBottomRight>
    </>,
    document.body
  );
};
