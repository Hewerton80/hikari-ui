import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { ButtonGroup } from "../../../../src/Components/layout/ButtonGroup";

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
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Button variantColor="primary">primary</Button>
      <Button variantColor="secondary">secondary</Button>
      <Button variantColor="success">success</Button>
      <Button variantColor="info">info</Button>
      <Button variantColor="dark">dark</Button>
      <Button variantColor="danger">danger</Button>
      <Button variantColor="warning">warning</Button>
    </div>
  );
};

export const OutlinedButtons = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Button variantColor="primary" variantStyle="outlined">
        primary
      </Button>
      <Button variantColor="secondary" variantStyle="outlined">
        secondary
      </Button>
      <Button variantColor="success" variantStyle="outlined">
        success
      </Button>
      <Button variantColor="info" variantStyle="outlined">
        info
      </Button>
      <Button variantColor="dark" variantStyle="outlined">
        dark
      </Button>
      <Button variantColor="danger" variantStyle="outlined">
        danger
      </Button>
      <Button variantColor="warning" variantStyle="outlined">
        warning
      </Button>
    </div>
  );
};

export const RoundedButtons = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      <Button variantColor="primary" rounded>
        primary
      </Button>
      <Button variantColor="secondary" rounded>
        secondary
      </Button>
      <Button variantColor="success" rounded>
        success
      </Button>
      <Button variantColor="info" rounded>
        info
      </Button>
      <Button variantColor="dark" rounded>
        dark
      </Button>
      <Button variantColor="danger" rounded>
        danger
      </Button>
      <Button variantColor="warning" rounded>
        warning
      </Button>
    </div>
  );
};

export const TextedButtons = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Button variantColor="primary" variantStyle="texted">
        primary
      </Button>
      <Button variantColor="secondary" variantStyle="texted">
        secondary
      </Button>
      <Button variantColor="success" variantStyle="texted">
        success
      </Button>
      <Button variantColor="info" variantStyle="texted">
        info
      </Button>
      <Button variantColor="dark" variantStyle="texted">
        dark
      </Button>
      <Button variantColor="danger" variantStyle="texted">
        danger
      </Button>
      <Button variantColor="warning" variantStyle="texted">
        warning
      </Button>
    </div>
  );
};

export const DisabledButton = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Button variantColor="primary" disabled>
        primary
      </Button>
      <Button variantColor="secondary" disabled>
        secondary
      </Button>
      <Button variantColor="success" disabled>
        success
      </Button>
      <Button variantColor="info" disabled>
        info
      </Button>
      <Button variantColor="dark" disabled>
        dark
      </Button>
      <Button variantColor="danger" disabled>
        danger
      </Button>
      <Button variantColor="warning" disabled>
        warning
      </Button>
    </div>
  );
};

export const LoadButton = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Button variantColor="primary" isLoading>
        primary
      </Button>
      <Button variantColor="secondary" isLoading>
        secondary
      </Button>
      <Button variantColor="success" isLoading>
        success
      </Button>
      <Button variantColor="info" isLoading>
        info
      </Button>
      <Button variantColor="dark" isLoading>
        dark
      </Button>
      <Button variantColor="danger" isLoading>
        danger
      </Button>
      <Button variantColor="warning" isLoading>
        warning
      </Button>
    </div>
  );
};

export const SizeButtons = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
      }}
    >
      <Button variantColor="danger" size="lg">
        size lg
      </Button>
      <Button variantColor="success" size="md">
        size md
      </Button>
      <Button variantColor="primary" size="sm">
        size sm
      </Button>
    </div>
  );
};

export const GroupButtons = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <ButtonGroup vertical>
        <Button variantColor="primary" variantStyle="outlined">
          Top
        </Button>
        <Button variantColor="primary" variantStyle="outlined">
          Middle
        </Button>
        <Button variantColor="primary" variantStyle="outlined">
          Bottom
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variantColor="primary">Left</Button>
        <Button variantColor="primary">Middle</Button>
        <Button variantColor="primary">Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variantColor="primary" variantStyle="outlined">
          Left
        </Button>
        <Button variantColor="primary" variantStyle="outlined">
          Middle
        </Button>
        <Button variantColor="primary" variantStyle="outlined">
          Right
        </Button>
      </ButtonGroup>
    </div>
  );
};
