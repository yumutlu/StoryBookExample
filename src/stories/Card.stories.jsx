import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    numberOfchildren: { type: "number", defaultValue: 4 },
  },
};
const Template = ({ numberOfchildren, ...args }) => (
  <Card {...args}>
    {[...Array(numberOfchildren).keys()].map((n) => (
      <div
        style={{
          width: "200px",
          height: "300px",
          backgroundImage: "linear-gradient(white,azure)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Card>
);

export const Horizantal = Template.bind({});
Horizantal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  spacing: 2,
  wrap: false,
};

export const Nospacing = Template.bind({});
Nospacing.args = {
  direction: "row",
  spacing: 0,
  wrap: false,
};

export const WrapOverFloww = Template.bind({});
WrapOverFloww.args = {
  numberOfchildren: 40,
  direction: "row",
  spacing: 0,
  wrap: true,
};

export const Empty = Template.bind({});
Empty.args = {
  numberOfchildren: 0,
  direction: "row",
  spacing: 0,
  wrap: false,
};
