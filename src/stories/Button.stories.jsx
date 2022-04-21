import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "md",
};
export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press me",
  size: "md",
};
export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "sm",
};
export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "lg",
};
export const LogLabel = Template.bind({});
LogLabel.args = {
  backgroundColor: "red",
  label: "Press me Press meP ress me Press me",
  size: "md",
};
