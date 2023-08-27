import React from "react";
import { Badge } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DataDisplay/Badge",
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const DefaultBadges = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variantStyle="info">Info</Badge>
      <Badge variantStyle="primary">primary</Badge>
      <Badge variantStyle="secondary">secondary</Badge>
      <Badge variantStyle="danger">danger</Badge>
      <Badge variantStyle="success">success</Badge>
      <Badge variantStyle="warning">warning</Badge>
      <Badge variantStyle="dark">dark</Badge>
    </div>
  );
};
