import React, {useState} from "react"
import styled from 'styled-components';
import Modal from 'react-modal';
import Container from '../../layout/Container';
import Flex from "../../layout/Flex";

import CloseIcon from "../../icons/Close";

export type ModalProps = {
  isOpened: boolean;
  closeModal: () => void;
  title: string | React.ReactNode;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    boxShadow: '0px 10px 15px -3px rgba(26, 32, 44, 0.1), 0px 4px 6px -2px rgba(26, 32, 44, 0.05)',
  },
};

const ProductCard = ({isOpened, title, closeModal}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpened}
      style={customStyles}
      onRequestClose={closeModal}
    >
      <Container size="md" padding="45px 40px">
        <Flex justify="space-between">
          <h2>{title}</h2>
          <CloseIcon onClick={closeModal} />
        </Flex>
      </Container>
    </Modal>
  )
}

export default ProductCard;
