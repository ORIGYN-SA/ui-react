import React, {useState} from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button from '../../components/interface/Button';
import Grid from "../../components/layout/Grid";
import Modal from "../../components/interface/Modal";
import { useStepper } from "../../components/interface/Stepper/Stepper";
import Flex from "../../components/layout/Flex";
import HR from "../../components/interface/HR/HR";

export default {
  title: "Pages/Purchase Item",
  component: Modal,
} as Meta;

const Template: Story = (args) => {
  const [isOpened, setIsOpened] = useState(false);
  const [StepperHeader, StepperContent] = useStepper([
    {
      label: 'SELECT SHARE', content:
        <Flex flexFlow="column">
          <p><b>available shares</b></p>
          <HR />
        </Flex>
    },
    {label: 'CONFIRM', content: "Step 2"},
    {label: 'PAYMENT', content: "Step 3"}
  ]);

  const closeModal = () => {
    setIsOpened(false);
  }
  const openModal = () => {
    setIsOpened(true);
  }

  return (
    <div>
      <Button onClick={openModal}>Buy item</Button>
      <Modal
        isOpened={isOpened}
        closeModal={closeModal}
      >
        <>
          <Flex justify="space-between">
            <h2>Buy Shares</h2>
            <Flex>{StepperHeader}</Flex>
            <div></div>
          </Flex>
          <br/>
          <h4>Select a share of the Artwork</h4>
          <br/>
          <Grid columns={2} gap={80}>
            <Flex flexFlow="column" gap={15}>
              <img src="http://placehold.jp/526x325.png" alt=""/>
              <h3>Nude Woman leaning on pillows</h3>
              <h4>Pablo Picasso</h4>
              <HR marginBottom={16} marginTop={16} />
              <Flex justify="space-between">
                <Flex flexFlow="column">
                  <p>Total value</p>
                  <p><b>ICP 1,000,000.00</b></p>
                </Flex>
                <Flex flexFlow="column">
                  <p>Total shares</p>
                  <p><b>10,000</b></p>
                </Flex>
                <div></div>
              </Flex>
            </Flex>
            {StepperContent}
          </Grid>
        </>
      </Modal>
    </div>
  );
}

export const Default = Template.bind({});
Default.args = { title: 'Buy Shares'};
