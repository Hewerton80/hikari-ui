import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertRoot } from "./Alert";

const meta = {
  title: "Feedback/Alert",
  component: AlertRoot,
} satisfies Meta<typeof AlertRoot>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {
  args: {
    children: "My button",
  },
};

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
