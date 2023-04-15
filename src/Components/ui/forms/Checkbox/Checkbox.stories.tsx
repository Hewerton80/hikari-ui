import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { Checkbox } from ".";
import { Box } from "../../../ui/layout/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "forms/Checkbox",
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const BasicCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Box
      css={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 32 }}
    >
      <Checkbox checked={checked} onCheckedChange={setChecked} />
      <Checkbox checked={true} disabled />
      <Checkbox checked={false} disabled />
    </Box>
  );
};

export const Position = () => {
  return (
    <Box
      css={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 32 }}
    >
      <Checkbox label="Left" labelOrientation="left" />
      <Checkbox label="Top" labelOrientation="top" />
      <Checkbox label="Right" labelOrientation="right" />
    </Box>
  );
};
