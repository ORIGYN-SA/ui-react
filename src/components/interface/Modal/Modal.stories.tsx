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
      <Modal title={args.title} isOpened={isOpened} closeModal={closeModal} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { title: "Buy Shares" };
