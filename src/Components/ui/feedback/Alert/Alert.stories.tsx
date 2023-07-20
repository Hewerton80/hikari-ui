import React from "react";

import { Alert } from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Feedback/Alert",
  component: Alert.Root,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

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
    <div className="flex flex-col gap-2">
      <Alert.Root variantStyle="success">
        <Alert.Title>Hi! success</Alert.Title>
        <Alert.Description>{lorem}</Alert.Description>
      </Alert.Root>
      <Alert.Root variantStyle="info">
        <Alert.Title>Hi! info</Alert.Title>
        <Alert.Description>{lorem}</Alert.Description>
      </Alert.Root>
      <Alert.Root variantStyle="danger">
        <Alert.Title>Hi! danger</Alert.Title>
        <Alert.Description>{lorem}</Alert.Description>
      </Alert.Root>
      <Alert.Root variantStyle="warning">
        <Alert.Title>Hi! warning</Alert.Title>
        <Alert.Description>{lorem}</Alert.Description>
      </Alert.Root>
    </div>
  );
};
