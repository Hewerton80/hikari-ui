import React from "react";
import { RadioGroup } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "forms/Radio",
  component: RadioGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const BasicRadio = () => {
  const [selectedoption, selectedOption] = React.useState("");
  return (
    <RadioGroup
      label="Difficulty:"
      value={selectedoption}
      onValueChange={selectedOption}
    >
      <RadioGroup.Item id="easy" value="easy" label="Easy" />
      <RadioGroup.Item id="normal" value="normal" label="Normal" />
      <RadioGroup.Item id="hard" value="hard" label="Hard" />
    </RadioGroup>
  );
};

export const Horizontal = () => {
  const [selectedoption, selectedOption] = React.useState("");
  return (
    <RadioGroup
      label="Difficulty:"
      value={selectedoption}
      onValueChange={selectedOption}
      orientation="horizonal"
    >
      <RadioGroup.Item id="easy" value="easy" label="Easy" />
      <RadioGroup.Item id="normal" value="normal" label="Normal" />
      <RadioGroup.Item id="hard" value="hard" label="Hard" />
    </RadioGroup>
  );
};

export const Disabled = () => {
  return (
    <RadioGroup label="Color:" defaultValue="red" orientation="horizonal">
      <RadioGroup.Item disabled id="red" value="red" label="Red" />
      <RadioGroup.Item disabled id="blue" value="blue" label="Blue" />
    </RadioGroup>
  );
};
