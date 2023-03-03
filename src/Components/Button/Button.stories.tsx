import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Overview = Template.bind({});

Overview.args = {
  children: "My button",
  variantColor: "primary",
};

export const SingleColorButtons = () => {
  return (
    <Button variantColor="primary">helo, world</Button>
    // <div className="flex flex-wrap gap-2">
    //   <Button variantColor="primary">primary</Button>
    //   <Button variantColor="secondary">secondary</Button>
    //   <Button variantColor="success">success</Button>
    //   <Button variantColor="info">info</Button>
    //   <Button variantColor="dark">dark</Button>
    //   <Button variantColor="light">light</Button>
    //   <Button variantColor="danger">danger</Button>
    //   <Button variantColor="warning">warning</Button>
    // </div>
  );
};
