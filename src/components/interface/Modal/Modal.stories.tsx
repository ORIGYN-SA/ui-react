import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button from "../Button";
import Modal, { ModalProps } from "./Modal";
import Card from "../../interface/Card/Card";
export default {
  title: "Components/Interface/Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [isOpened, setIsOpened] = useState(false);
  const closeModal = () => {
    setIsOpened(false);
  };
  const openModal = () => {
    setIsOpened(true);
  };

  return (
    <div>
      <Button onClick={openModal}>Open modal</Button>
      <Modal title={args.title} isOpened={isOpened} closeModal={closeModal} mode={args.mode} width={args.width} height={args.height} 
      paddingTop={args.paddingTop} paddingRight={args.paddingRight} paddingBottom={args.paddingBottom} paddingLeft={args.paddingLeft}>
       {/*  <div>hello, am just a div</div> */}
       {['Lorem Ipsum', 'Lorem Ipsum'].map((item, i) => (
         <Card key={i} type="elevated" style={{width: '264px', height: '72px', display: 'inline-flex', marginRight: '10px'}}>
         <img src="" alt="" width={'40px'} height={'40px'} style={{margin: '16px'}} />
         <div style={{margin: '16px'}}>
           <p style={{fontSize: '14px', fontWeight: '600', color: '#151515' }}>{item}</p>
           <p style={{fontSize: '12px', fontWeight: '500', color: '#5F5F5F' }}>{item}</p>
         </div>
       </Card>
       ))}
       
        
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { title: "Buy Shares", mode: 'light',
width: '1000px', height: '1000px', paddingTop: '20px', paddingRight: '20px', paddingBottom: '20px', paddingLeft: '20px' };
