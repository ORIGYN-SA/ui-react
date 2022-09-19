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
  type?: string;
};

const StyledModal = styled(ReactModal)`
  &.ReactModalPortal {
    background: white;
  }
  &.ReactModal__Content {
    position: absolute;
    inset: 50% auto auto 50%;
    background: white;
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
    max-height: 95vh;
    max-width: 1150px;
    width: 100%;
    
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
const StyledModal1 = styled(ReactModal)`
  &.ReactModalPortal {
    background: #151515;
    color:#FEFEFE;
  }
  &.ReactModal__Content {
    display: flex;
flex-direction: column;
align-items: flex-end;
padding: 0px;
position: relative;
margin: 0 auto;
width: 704px;
height: 774px;
background: #151515;
color:#FEFEFE;
box-shadow: 0px 1px 12px rgba(18, 18, 18, 0.08), 0px 0px 4px rgba(18, 18, 18, 0.16);
border-radius: 24px;
overflow-y: auto;
     max-height: 774px;
    max-width: 704px; 
    /* ${({theme}) => theme?.media?.lg} {
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
  } */
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
  type
}) => {
  const [amount, setAmount] = useState<string>();
  const [recipientAddress, setRecipientAddress] = useState<string>();
  const [transactionFee, setTransactionFee] = useState<string>();
  const handleChange = (evt) => { console.log(evt.target.value);
    if(evt.target.name == 'amount') {setAmount(evt.target.value);} 
    else if(evt.target.name == 'recipientAddress'){setRecipientAddress(evt.target.value)}
    else {
          setTransactionFee(evt.target.value);
    }
  };
  return (
    <>{type == 'transferOgy1'?
    <div style={{margin: '0 auto'}}>
    <StyledModal1 isOpen={isOpened}
    onRequestClose={closeModal}
    style={{
      overlay: {
        zIndex: 10000,
        background: mode == 'light'?'#9A9A9A':'#3A3A3A',
        
      }
    }}>
      <Container relative size="md" style={{padding: '88px 32px 0px 32px'}} /* smPadding="50px 12px" */>
         <h4>{'Transfer Ogy'}</h4>
         <p style={{fontSize: '14px', marginTop: '16px', color: '#9A9A9A'}}>You can only send OGY from your available balance</p>
         <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginTop: '48px'}}>
           <span><b>Amount (OGY)</b></span><span><b>Balance: 25,000,000.000 OGY </b>(Max)</span></div>
           <TextInput   name={amount} value={amount} onChange={handleChange}  style={{backgroundColor: '#151515', border: '1px solid #242424', marginTop: '8px', marginBottom: '56px'}}
            />
          <TextInput  name={recipientAddress} value={recipientAddress} onChange={handleChange} style={{backgroundColor: '#151515', border: '1px solid #242424', marginBottom: '64px'}} label={'Recipient Address'}
            />
            {/* <p  style={{ marginBottom: '8px'}} >Transaction Fee</p> */}
            <TextInput name={transactionFee} value={transactionFee} onChange={handleChange} style={{backgroundColor: '#151515', border: 'none', marginBottom: '32px'}} label={'Transaction Fee'} placeholder={'0.002 OGY'}></TextInput>
            {/* <p style={{ marginTop: '8px', padding: '17px 16px', color: '#9A9A9A', marginBottom: '16px'}}>0.002 OGY</p> */}
            
        
        {children}
       
        
      </Container>
      <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #9A9A9A', borderBottom: '1px solid #9A9A9A', /* padding: '24px', */ width: '100%'}}>
              <span style={{padding: '24px', fontSize: '14px', color: '#FEFEFE', fontWeight:'600' }}>Total Amount</span>
              <span style={{color: '#9A9A9A', padding: '24px'}}>0.002 OGY</span>
            </div>
            <Button style={{backgroundColor: '#F2F2F2', color: '#151515', margin: '24px', fontSize: '14px', padding: '9px', width: '264px',
height: '40px'}}>Transfer OGY</Button>
            <StyledCloseBtn onClick={closeModal} white />
    </StyledModal1></div>:null}
    {/* <StyledModal
      isOpen={isOpened}
      onRequestClose={closeModal}
      style={{
        overlay: {
          zIndex: 10000,
          background: mode == 'light'?'#9A9A9A':'#3A3A3A',
        }
      }}
    >
      <Container relative size="md" padding="45px 40px" smPadding="50px 12px">
        {title && <h2>{title}</h2>}
        {children}
        <StyledCloseBtn onClick={closeModal} />
      </Container>
    </StyledModal> */}
    </>
  );
};

export default Modal;
