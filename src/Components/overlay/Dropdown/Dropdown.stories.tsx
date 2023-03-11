import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Dropdown } from ".";
import { Button } from "../../forms/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "overlay/Dropdown",
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Example = () => {
  return (
    <Dropdown>
      <Dropdown.Toogle asChild>
        <button> click-me</button>
      </Dropdown.Toogle>
      <Dropdown.Menu>
        <Dropdown.Item>tteste</Dropdown.Item>
        <Dropdown.Item>tteste</Dropdown.Item>
        <Dropdown.Item>tteste</Dropdown.Item>
        <Dropdown.Item>tteste</Dropdown.Item>
        <Dropdown.Item>tteste</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
