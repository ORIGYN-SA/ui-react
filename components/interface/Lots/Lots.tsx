import React from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import Select from "../Inputs/Select";
import { numberWithCommas } from "../../../utils/index";

const Col = styled.div`
  ${({ maxWidth, padding }: any) => `
    max-width: ${maxWidth ? maxWidth : "100%"};
    width: 100%;
    padding: ${padding ? padding : "0 10px"};
  `}
`;
const Square = styled(Flex)`
  min-width: 40px;
  height: 40px;
  background-color: #000000;
  color: white;
  font-weight: 600;
  font-size: 15px;
`;
const ErrorMessage = styled.p`
  color: #e42932;
  font-weight: 400;
  font-size: 15px;
  padding-left: 64px;
  padding-top: 10px;
`;

const StyledLotRow = styled(Flex)`
  background-color: #f5f5f5;
  padding: 5px;
  border: 1px solid #151515;
  margin: 5px 0;
`;
const CloseIcon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    content: " ";
    height: 16px;
    width: 2px;
    background-color: #333;
    left: 50%;
    top: 50%;
  }
  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const AddLot = styled.button`
  font-weight: 700;
  background: transparent;
  outline: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
`;

const Lots = ({
  error,
  lots,
  setLots,
  handleAddLot,
  handleDeleteLot,
  quantityOptions,
  fractionPriceOptions,
  lotPriceOptions,
  handleChangeLotValue,
}) => {
  return (
    <>
      <Flex fullWidth style={{ padding: "15px 5px", textAlign: "center" }}>
        <Col padding="0" maxWidth="40px">
          <span>Lot</span>
        </Col>
        <Col maxWidth="200px">
          <span>Quantity</span>
        </Col>
        <Col maxWidth="200px">
          <span>Price per Fraction</span>
        </Col>
        <Col maxWidth="200px">
          <span>Lot Price</span>
        </Col>
        <Col maxWidth="20px"></Col>
      </Flex>
      {lots.map((lot, i) => (
        <LotRow
          key={i}
          index={i}
          handleDeleteLot={handleDeleteLot}
          quantityOptions={quantityOptions}
          fractionPriceOptions={fractionPriceOptions}
          lotPriceOptions={lotPriceOptions}
          quantity={lot.quantity}
          fractionPrice={lot.fractionPrice}
          lotPrice={lot.lotPrice}
          handleChangeLotValue={handleChangeLotValue}
        />
      ))}

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <AddLot onClick={handleAddLot}>+ ADD LOT</AddLot>
    </>
  );
};

const LotRow = ({
  index,
  handleDeleteLot,
  quantityOptions = [],
  fractionPriceOptions = [],
  lotPriceOptions = [],
  quantity,
  fractionPrice,
  lotPrice,
  handleChangeLotValue,
}) => {
  return (
    <StyledLotRow>
      <Square align="center" justify="center">
        {index + 1}
      </Square>
      <div
        style={{
          display: "contents",
        }}
      >
        <Col maxWidth="200px">
          <Select
            height="40px"
            options={quantityOptions}
            selectedOption={quantity}
            handleChange={(event) =>
              handleChangeLotValue(index, event, "quantity")
            }
          />
        </Col>
        <Col maxWidth="200px">
          <Select
            height="40px"
            options={fractionPriceOptions}
            selectedOption={fractionPrice}
            handleChange={(event) =>
              handleChangeLotValue(index, event, "fractionPrice")
            }
          />
        </Col>
        <Col maxWidth="200px">
          <Select
            height="40px"
            options={lotPriceOptions}
            selectedOption={lotPrice}
            handleChange={(event) =>
              handleChangeLotValue(index, event, "lotPrice")
            }
          />
        </Col>
      </div>

      <Col maxWidth="40px">
        <CloseIcon onClick={() => handleDeleteLot(index)} />
      </Col>
    </StyledLotRow>
  );
};

export default Lots;
