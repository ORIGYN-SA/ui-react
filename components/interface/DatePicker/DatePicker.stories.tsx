import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import DatePicker, { DatePickerProps } from "./DatePicker";

export default {
  title: "Components/Interface/DatePicker",
  component: DatePicker,
} as Meta;

const Template: Story<DatePickerProps> = (args) => {
  const [startDate, setStartDate] = useState(null);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      {...args}
    />
  );
};

export const YearPicker = Template.bind({});
YearPicker.args = {
  dateFormat: "yyyy",
  showYearPicker: true,
  placeholderText: "YYYY",
};

export const MonthPicker = Template.bind({});
MonthPicker.args = {
  placeholderText: "MM",
  showMonthsPicker: true,
  dateFormat: "MM",
  showMonthYearPicker: true,
  hideHeader: true
};
export const DayPicker = Template.bind({});
DayPicker.args = {
  placeholderText: "DD",
  showMonthsPicker: true,
  dateFormat: "dd",
};
