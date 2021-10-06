import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button from "../../interface/Button";
import Lots from "./Lots";

export default {
  title: "Components/Interface/Lots",
  component: Lots,
} as Meta;
const options = [
  { value: "80000", label: "80000" },
  { value: "75000", label: "75000" },
  { value: "70000", label: "70000" },
  { value: "65000", label: "65000" },
  { value: "60000", label: "60000" },
];

const Template: Story = (args) => {
  const [lots, setLots] = useState([
    {
      quantity: 0,
      fractionPrice: 0,
      lotPrice: 0,
    },
  ]);
  const handleDeleteLot = (currentIndex: number) => {
    const copyLots = [...lots];
    const newLots = copyLots.filter((elem, index) => {
      return index !== currentIndex;
    });
    setLots(newLots);
  };

  const handleAddLot = () => {
    const copyLots = [...lots];
    const newLots = [
      ...copyLots,
      {
        quantity: 0,
        fractionPrice: 0,
        lotPrice: 0,
      },
    ];
    setLots(newLots);
  };
  return (
    <div>
      <Lots
        quantityOptions={options}
        fractionPriceOptions={options}
        lotPriceOptions={options}
        lots={lots}
        handleDeleteLot={handleDeleteLot}
        handleAddLot={handleAddLot}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { title: "Buy Shares" };
