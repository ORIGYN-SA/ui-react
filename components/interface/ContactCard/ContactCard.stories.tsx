import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ContactCard, { ContactCardProps } from "./ContactCard";

export default {
  title: "Components/Interface/ContactCard",
  component: ContactCard,
} as Meta;

const Template: Story<ContactCardProps> = (args) => (
  <ContactCard {...args}></ContactCard>
);

export const Default = Template.bind({});
Default.args = {
  personalInfo: {
    name: "Rosalie Pernot",
    role: "Account Manager",
    email: "rosalie@origyn.ch",
    phone: "T +41 78 204 65 25 / T +33 6 17 86 79 83",
    company: "ORIGYN Foundation",
    address: "Rue des Usines 44",
    zip: "2000 Neuchâtel",
    country: "Switzerland",
    website: "www.origyn.ch/art",
    avatar: "http://placehold.jp/150x150.png",
  },
};
