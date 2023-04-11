import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Badge } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DataDisplay/Badge",
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const DefaultBadges = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Badge variantStyle="info">Info</Badge>
      <Badge variantStyle="primary">primary</Badge>
      <Badge variantStyle="danger">danger</Badge>
      <Badge variantStyle="success">success</Badge>
      <Badge variantStyle="warning">warning</Badge>
      <Badge variantStyle="dark">dark</Badge>
    </div>
  );
};
