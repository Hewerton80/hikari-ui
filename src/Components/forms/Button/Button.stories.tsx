import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { ButtonGroup } from "../../../../src/Components/layout/ButtonGroup";
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
  variantStyle: "primary-contained",
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Button variantStyle="primary-contained">primary-contained</Button>
        <Button variantStyle="secondary-contained">secondary-contained</Button>
        <Button variantStyle="success-contained">success-contained</Button>
        <Button variantStyle="info-contained">info-contained</Button>
        <Button variantStyle="dark-contained">dark-contained</Button>
        <Button variantStyle="danger-contained">danger-contained</Button>
        <Button variantStyle="warning-contained">warning-contained</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Button variantStyle="primary-outlined">primary-outlined</Button>
        <Button variantStyle="secondary-outlined">secondary-outlined</Button>
        <Button variantStyle="success-outlined">success-outlined</Button>
        <Button variantStyle="info-outlined">info-outlined</Button>
        <Button variantStyle="dark-outlined">dark-outlined</Button>
        <Button variantStyle="danger-outlined">danger-outlined</Button>
        <Button variantStyle="warning-outlined">warning-outlined</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
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

// export const RoundedButtons = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: 8,
//       }}
//     >
//       <Button variantStyle="primary-contained" rounded>
//         primary-contained
//       </Button>
//       <Button variantStyle="secondary-contained" rounded>
//         secondary-contained
//       </Button>
//       <Button variantStyle="success-contained" rounded>
//         success-contained
//       </Button>
//       <Button variantStyle="info-contained" rounded>
//         info-contained
//       </Button>
//       <Button variantStyle="dark-contained" rounded>
//         dark-contained
//       </Button>
//       <Button variantStyle="danger-contained" rounded>
//         danger-contained
//       </Button>
//       <Button variantStyle="warning-contained" rounded>
//         warning-contained
//       </Button>
//     </div>
//   );
// };

// export const TextedButtons = () => {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
//       <Button variantStyle="primary-contained" variantStyle="texted">
//         primary-contained
//       </Button>
//       <Button variantStyle="secondary-contained" variantStyle="texted">
//         secondary-contained
//       </Button>
//       <Button variantStyle="success-contained" variantStyle="texted">
//         success-contained
//       </Button>
//       <Button variantStyle="info-contained" variantStyle="texted">
//         info-contained
//       </Button>
//       <Button variantStyle="dark-contained" variantStyle="texted">
//         dark-contained
//       </Button>
//       <Button variantStyle="danger-contained" variantStyle="texted">
//         danger-contained
//       </Button>
//       <Button variantStyle="warning-contained" variantStyle="texted">
//         warning-contained
//       </Button>
//     </div>
//   );
// };

// export const DisabledButton = () => {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
//       <Button variantStyle="primary-contained" disabled>
//         primary-contained
//       </Button>
//       <Button variantStyle="secondary-contained" disabled>
//         secondary-contained
//       </Button>
//       <Button variantStyle="success-contained" disabled>
//         success-contained
//       </Button>
//       <Button variantStyle="info-contained" disabled>
//         info-contained
//       </Button>
//       <Button variantStyle="dark-contained" disabled>
//         dark-contained
//       </Button>
//       <Button variantStyle="danger-contained" disabled>
//         danger-contained
//       </Button>
//       <Button variantStyle="warning-contained" disabled>
//         warning-contained
//       </Button>
//     </div>
//   );
// };

// export const LoadButton = () => {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
//       <Button variantStyle="primary-contained" isLoading>
//         primary-contained
//       </Button>
//       <Button variantStyle="secondary-contained" isLoading>
//         secondary-contained
//       </Button>
//       <Button variantStyle="success-contained" isLoading>
//         success-contained
//       </Button>
//       <Button variantStyle="info-contained" isLoading>
//         info-contained
//       </Button>
//       <Button variantStyle="dark-contained" isLoading>
//         dark-contained
//       </Button>
//       <Button variantStyle="danger-contained" isLoading>
//         danger-contained
//       </Button>
//       <Button variantStyle="warning-contained" isLoading>
//         warning-contained
//       </Button>
//     </div>
//   );
// };

// export const SizeButtons = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         gap: 8,
//         alignItems: "flex-start",
//       }}
//     >
//       <Button variantStyle="danger-contained" size="lg">
//         size lg
//       </Button>
//       <Button variantStyle="success-contained" size="md">
//         size md
//       </Button>
//       <Button variantStyle="primary-contained" size="sm">
//         size sm
//       </Button>
//     </div>
//   );
// };

// export const GroupButtons = () => {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
//       <ButtonGroup vertical>
//         <Button variantStyle="primary-contained" variantStyle="outlined">
//           Top
//         </Button>
//         <Button variantStyle="primary-contained" variantStyle="outlined">
//           Middle
//         </Button>
//         <Button variantStyle="primary-contained" variantStyle="outlined">
//           Bottom
//         </Button>
//       </ButtonGroup>
//       <ButtonGroup>
//         <Button variantStyle="primary-contained">Left</Button>
//         <Button variantStyle="primary-contained">Middle</Button>
//         <Button variantStyle="primary-contained">Right</Button>
//       </ButtonGroup>
//       <ButtonGroup>
//         <Button variantStyle="primary-contained" variantStyle="outlined">
//           Left
//         </Button>
//         <Button variantStyle="primary-contained" variantStyle="outlined">
//           Middle
//         </Button>
//         <Button variantStyle="primary-contained" variantStyle="outlined">
//           Right
//         </Button>
//       </ButtonGroup>
//     </div>
//   );
// };

// export const ButtonWithTextAndIcon = () => {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
//       <Button variantStyle="danger-contained" leftIcon={<FiUpload />}>
//         Uploads
//       </Button>
//       <Button variantStyle="success-contained" rightIcon={<AiTwotoneEdit />}>
//         Edit
//       </Button>
//     </div>
//   );
// };

// export const BlockButtons = () => {
//   return (
//     <div
//       style={{ display: "flex", flexDirection: "column", gap: 8, width: 800 }}
//     >
//       <Button variantStyle="danger-contained" fullWidth>
//         Block Buttons
//       </Button>
//       <Button variantStyle="success-contained" fullWidth>
//         Block Buttons
//       </Button>
//       <Button variantStyle="primary-contained" fullWidth>
//         Block Buttons
//       </Button>
//     </div>
//   );
// };
