import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Switch } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "forms/Switch",
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Example = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Switch label="Show Box" checked={checked} onCheckedChange={setChecked} />
  );
};
