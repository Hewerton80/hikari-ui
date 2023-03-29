import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Switch } from ".";
import { Box } from "../../../Components/layout/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "forms/Switch",
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const BasicSwitch = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Box
      css={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 32 }}
    >
      <Switch checked={checked} onCheckedChange={setChecked} />
      <Switch checked={true} disabled />
      <Switch checked={false} disabled />
    </Box>
  );
};

export const Position = () => {
  return (
    <Box
      css={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 32 }}
    >
      <Switch label="Left" labelOrientation="left" />
      <Switch label="Top" labelOrientation="top" />
      <Switch label="Right" labelOrientation="right" />
    </Box>
  );
};
