import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button from "../Button";
import Modal, { ModalProps } from "./Modal";

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
        <div>hello, am just a div</div>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { title: "Buy Shares", mode: 'dark',
width: '400px', height: '400px', paddingTop: '20px', paddingRight: '20px', paddingBottom: '20px', paddingLeft: '20px' };
