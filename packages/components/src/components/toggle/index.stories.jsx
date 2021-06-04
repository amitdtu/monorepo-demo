import React from "react";
import Toggle from ".";

export default {
  title: "Toggle",
  component: Toggle,
  argTypes: {
    bg: {
      control: { type: "select", options: ["primary", "secondary"] },
    },
    size: {
      control: { type: "select", options: ["sm", "md", "lg"] },
    },
  },
};

const Template = (args) => <Toggle {...args} />;

let isEnable = true;
export const ToggleComp = Template.bind({});
ToggleComp.args = {
  isChecked: isEnable,
  bg: "primary",
  size: "md",
};

ToggleComp.storyName = "Toggle";
