import React, {useState} from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import Container from "../../layout/Container";

import TextInput from "../../../components/interface/Inputs/TextInput";
import Button from '../../../components/interface/Button/Button';
import CloseIcon from "../../icons/Close";

export type ModalProps = {
  isOpened: boolean;
  closeModal: () => void;
  title?: string | React.ReactNode;
  mode?: string;
  width?: string;
  height?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
};

const StyledModal = styled(ReactModal)`
  &.ReactModalPortal {
   
  }
  &.ReactModal__Content {
    position: absolute;
    inset: 50% auto auto 50%;
  
    padding: 0;
    top: 50px;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, 0);
    border: none;
    box-shadow: 0px 10px 15px -3px rgba(26, 32, 44, 0.1),
      0px 4px 6px -2px rgba(26, 32, 44, 0.05);
    overflow-y: auto;
    border-radius: 24px;
    background-color: ${props => props.mode == 'light'?'#FEFEFE':'#151515'};
    color: ${props => props.mode == 'light'?'#151515':'#FEFEFE'};
    width: ${props => props.width?props.width:'100%'};
    height: ${props => props.height?props.height:'100%'};
    
    
    ${({theme}) => theme?.media?.lg} {
      max-width: calc(100% - 48px);
    }
  }
  ${({theme}) => theme?.media?.sm} {
    &.ReactModal__Content {
      inset: auto;
      left: 0;
      right: 0;
      transform: translate(0, 0);
      margin-right: 0;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100vh;
    }
  }
`;

const customStyles = {
  overlay: {
    overflow: "auto",
    background: "white",
  },
  content: {
    background: "white",
    padding: "0px",
    top: "50px",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%,0)",
    border: "none",
    boxShadow:
      "0px 10px 15px -3px rgba(26, 32, 44, 0.1), 0px 4px 6px -2px rgba(26, 32, 44, 0.05)",
    "@media (max-width: 600)": {},
  },
};

const StyledCloseBtn = styled(CloseIcon)`
  position: absolute;
  right: 34.75px;
  top: 42.75px;
  cursor: pointer;
  color: #FEFEFE;
  width: 18px;
  height: 18px;
  
  ${({theme}) => theme?.media?.sm} {
    top: 15px;
    right: 15px;
  }
`;

const Modal: React.FC<ModalProps> = ({
  isOpened,
  title,
  children,
  closeModal,
  mode,
  width,
  height,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft
}) => {
  
  return (
     <StyledModal
      isOpen={isOpened}
      onRequestClose={closeModal}
      style={{
        overlay: {
          zIndex: 10000,
          background: mode == 'light'?'#9A9A9A':'#3A3A3A',
        }
      }}
      width={width}
      height={height}
      mode={mode}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}

    >
      <Container relative size="md" padding={`${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`}>
        {title && <h2>{title}</h2>}
        {children}
       
      </Container>
    </StyledModal> 
    
  );
};

export default Modal;
