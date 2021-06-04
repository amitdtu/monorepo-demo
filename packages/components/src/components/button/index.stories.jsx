import React from "react";
import Button from "./index";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    bg: {
      control: { type: "select", options: ["primary", "secondary"] },
    },
    size: { control: { type: "select", options: ["sm", "md", "lg"] } },
    onClick: "clicked",
  },
};

const Template = (args) => <Button {...args} />;

export const ButtonComp = Template.bind({});
ButtonComp.args = {
  children: "Button",
  bg: "primary",
  size: "lg",
  disabled: false,
  rounded: true,
};

ButtonComp.storyName = "Button";
