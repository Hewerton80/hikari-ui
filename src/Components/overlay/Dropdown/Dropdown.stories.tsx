import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Dropdown } from ".";
import { Button } from "../../forms/Button";
import { Badge } from "../../dataDisplay/Badge";
import { Alert } from "../../feedback/Alert";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "overlay/Dropdown",
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

const Btoonteste = ({ children }: { children: React.ReactNode }) => {
  return <button>{children}</button>;
};
export const Example = () => {
  return (
    <Dropdown>
      <Dropdown.Toogle>
        {/* <Alert variantStyle="danger"> click-me</Alert> */}
        <Button> click-me</Button>
        {/* <p> click-me</p> */}
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
