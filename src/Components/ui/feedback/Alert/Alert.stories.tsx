import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Alert } from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Feedback/Alert",
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

// export const Overview = Template.bind({})

// Overview.args = {
//   children: 'Button',
// }

export const DefaultAlerts = () => {
  const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Exercitationem`;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Alert variantStyle="primary">
        Hi! <b>primary</b> {lorem}
      </Alert>
      <Alert variantStyle="secondary">
        Hi! <b>secondary</b> {lorem}
      </Alert>
      <Alert variantStyle="success">
        Hi! <b>success</b> {lorem}
      </Alert>
      <Alert variantStyle="info">
        Hi! <b>info</b> {lorem}
      </Alert>
      <Alert variantStyle="danger">
        Hi! <b>danger</b> {lorem}
      </Alert>
      <Alert variantStyle="warning">
        Hi! <b>warning</b> {lorem}
      </Alert>
    </div>
  );
};
