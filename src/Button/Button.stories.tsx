import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { ButtonGroup } from "../Components/ui/layout/ButtonGroup";
import { FiUpload } from "react-icons/fi";
import { AiTwotoneEdit } from "react-icons/ai";
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
  variantStyle: "primary",
};

export const variantStyles = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <Button variantStyle="primary">primary</Button>
        <Button variantStyle="secondary">secondary</Button>
        <Button variantStyle="success">success</Button>
        <Button variantStyle="info">info</Button>
        <Button variantStyle="dark">dark</Button>
        <Button variantStyle="danger">danger</Button>
        <Button variantStyle="warning">warning</Button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <Button variantStyle="primary-outlined">primary-outlined</Button>
        <Button variantStyle="secondary-outlined">secondary-outlined</Button>
        <Button variantStyle="success-outlined">success-outlined</Button>
        <Button variantStyle="info-outlined">info-outlined</Button>
        <Button variantStyle="dark-outlined">dark-outlined</Button>
        <Button variantStyle="danger-outlined">danger-outlined</Button>
        <Button variantStyle="warning-outlined">warning-outlined</Button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <Button variantStyle="primary-texted">primary-texted</Button>
        <Button variantStyle="secondary-texted">secondary-texted</Button>
        <Button variantStyle="success-texted">success-texted</Button>
        <Button variantStyle="info-texted">info-texted</Button>
        <Button variantStyle="dark-texted">dark-texted</Button>
        <Button variantStyle="danger-texted">danger-texted</Button>
        <Button variantStyle="warning-texted">warning-texted</Button>
      </div>
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
        justifyContent: "center",
      }}
    >
      <Button variantStyle="primary" rounded>
        primary
      </Button>
      <Button variantStyle="secondary" rounded>
        secondary
      </Button>
      <Button variantStyle="success" rounded>
        success
      </Button>
      <Button variantStyle="info" rounded>
        info
      </Button>
      <Button variantStyle="dark" rounded>
        dark
      </Button>
      <Button variantStyle="danger" rounded>
        danger
      </Button>
      <Button variantStyle="warning" rounded>
        warning
      </Button>
    </div>
  );
};

export const DisabledButton = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        justifyContent: "center",
      }}
    >
      <Button variantStyle="primary" disabled>
        primary
      </Button>
      <Button variantStyle="secondary" disabled>
        secondary
      </Button>
      <Button variantStyle="success" disabled>
        success
      </Button>
      <Button variantStyle="info" disabled>
        info
      </Button>
      <Button variantStyle="dark" disabled>
        dark
      </Button>
      <Button variantStyle="danger" disabled>
        danger
      </Button>
      <Button variantStyle="warning" disabled>
        warning
      </Button>
    </div>
  );
};

export const LoadButton = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Button variantStyle="primary" isLoading>
          primary
        </Button>
        <Button variantStyle="secondary" isLoading>
          secondary
        </Button>
        <Button variantStyle="success" isLoading>
          success
        </Button>
        <Button variantStyle="info" isLoading>
          info
        </Button>
        <Button variantStyle="dark" isLoading>
          dark
        </Button>
        <Button variantStyle="danger" isLoading>
          danger
        </Button>
        <Button variantStyle="warning" isLoading>
          warning
        </Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Button variantStyle="primary-outlined" isLoading>
          primary-outlined
        </Button>
        <Button variantStyle="secondary-outlined" isLoading>
          secondary-outlined
        </Button>
        <Button variantStyle="success-outlined" isLoading>
          success-outlined
        </Button>
        <Button variantStyle="info-outlined" isLoading>
          info-outlined
        </Button>
        <Button variantStyle="dark-outlined" isLoading>
          dark-outlined
        </Button>
        <Button variantStyle="danger-outlined" isLoading>
          danger-outlined
        </Button>
        <Button variantStyle="warning-outlined" isLoading>
          warning-outlined
        </Button>
      </div>
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
      <Button variantStyle="danger" size="lg">
        size lg
      </Button>
      <Button variantStyle="success" size="md">
        size md
      </Button>
      <Button variantStyle="primary" size="sm">
        size sm
      </Button>
    </div>
  );
};

export const GroupButtons = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <ButtonGroup vertical>
        <Button variantStyle="primary-outlined">Top</Button>
        <Button variantStyle="primary-outlined">Middle</Button>
        <Button variantStyle="primary-outlined">Bottom</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variantStyle="primary">Left</Button>
        <Button variantStyle="primary">Middle</Button>
        <Button variantStyle="primary">Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variantStyle="primary-outlined">Left</Button>
        <Button variantStyle="primary-outlined">Middle</Button>
        <Button variantStyle="primary-outlined">Right</Button>
      </ButtonGroup>
    </div>
  );
};

export const ButtonWithTextAndIcon = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Button variantStyle="danger" leftIcon={<FiUpload />}>
        Uploads
      </Button>
      <Button variantStyle="success" rightIcon={<AiTwotoneEdit />}>
        Edit
      </Button>
    </div>
  );
};

export const BlockButtons = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 8, width: 800 }}
    >
      <Button variantStyle="danger" fullWidth>
        Block Buttons
      </Button>
      <Button variantStyle="success" fullWidth>
        Block Buttons
      </Button>
      <Button variantStyle="primary" fullWidth>
        Block Buttons
      </Button>
    </div>
  );
};
