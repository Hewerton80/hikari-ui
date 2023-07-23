import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonGroup } from "../../layout/ButtonGroup";
// import { FiUpload } from "react-icons/fi";
// import { AiTwotoneEdit } from "react-icons/ai";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Forms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

// export const Overview = Template.bind({});

export const Overview: Story = {
  args: {
    children: "My button",
    variantStyle: "primary",
  },
};

export const VariantStyles = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-wrap gap-2 justify-center">
        {/* {Object.keys(buttonVariants.style).map((key) => (
          <Button key={key} variantStyle={key as ButtonVariantStyle}>
            {key}
          </Button>
        ))} */}
        <Button variantStyle="primary">primary</Button>
        <Button variantStyle="secondary">secondary</Button>
        <Button variantStyle="success">success</Button>
        <Button variantStyle="info">info</Button>
        <Button variantStyle="dark">dark</Button>
        <Button variantStyle="light">light</Button>
        <Button variantStyle="danger">danger</Button>
        <Button variantStyle="warning">warning</Button>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <Button variantStyle="primary-outlined">primary-outlined</Button>
        <Button variantStyle="secondary-outlined">secondary-outlined</Button>
        <Button variantStyle="success-outlined">success-outlined</Button>
        <Button variantStyle="info-outlined">info-outlined</Button>
        <Button variantStyle="dark-outlined">dark-outlined</Button>
        <Button variantStyle="light-outlined">light-outlined</Button>
        <Button variantStyle="danger-outlined">danger-outlined</Button>
        <Button variantStyle="warning-outlined">warning-outlined</Button>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <Button variantStyle="primary-ghost">primary-ghost</Button>
        <Button variantStyle="secondary-ghost">secondary-ghost</Button>
        <Button variantStyle="success-ghost">success-ghost</Button>
        <Button variantStyle="info-ghost">info-ghost</Button>
        <Button variantStyle="dark-ghost">dark-ghost</Button>
        <Button variantStyle="light-ghost">light-ghost</Button>
        <Button variantStyle="danger-ghost">danger-ghost</Button>
        <Button variantStyle="warning-ghost">warning-ghost</Button>
      </div>
      {/* <div className="flex flex-wrap gap-2 justify-center">
        <Button variantStyle="primary-link">primary-link</Button>
        <Button variantStyle="secondary-link">secondary-link</Button>
        <Button variantStyle="success-link">success-link</Button>
        <Button variantStyle="info-link">info-link</Button>
        <Button variantStyle="dark-link">dark-link</Button>
        <Button variantStyle="light-link">light-link</Button>
        <Button variantStyle="danger-link">danger-link</Button>
        <Button variantStyle="warning-link">warning-link</Button>
      </div> */}
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
//         justifyContent: "center",
//       }}
//     >
//       <Button variantStyle="primary" rounded>
//         primary
//       </Button>
//       <Button variantStyle="secondary" rounded>
//         secondary
//       </Button>
//       <Button variantStyle="success" rounded>
//         success
//       </Button>
//       <Button variantStyle="info" rounded>
//         info
//       </Button>
//       <Button variantStyle="dark" rounded>
//         dark
//       </Button>
//       <Button variantStyle="light" rounded>
//         light
//       </Button>
//       <Button variantStyle="danger" rounded>
//         danger
//       </Button>
//       <Button variantStyle="warning" rounded>
//         warning
//       </Button>
//     </div>
//   );
// };

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
      <Button variantStyle="light" disabled>
        light
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
        <Button variantStyle="light" isLoading>
          light
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
        <Button variantStyle="light-outlined" isLoading>
          light-outlined
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
//       <Button variantStyle="danger" size="lg">
//         size lg
//       </Button>
//       <Button variantStyle="success" size="md">
//         size md
//       </Button>
//       <Button variantStyle="primary" size="sm">
//         size sm
//       </Button>
//     </div>
//   );
// };

// export const GroupButtons = () => {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
//       <ButtonGroup vertical>
//         <Button variantStyle="primary-outlined">Top</Button>
//         <Button variantStyle="primary-outlined">Middle</Button>
//         <Button variantStyle="primary-outlined">Bottom</Button>
//       </ButtonGroup>
//       <ButtonGroup>
//         <Button variantStyle="primary">Left</Button>
//         <Button variantStyle="primary">Middle</Button>
//         <Button variantStyle="primary">Right</Button>
//       </ButtonGroup>
//       <ButtonGroup>
//         <Button variantStyle="primary-outlined">Left</Button>
//         <Button variantStyle="primary-outlined">Middle</Button>
//         <Button variantStyle="primary-outlined">Right</Button>
//       </ButtonGroup>
//     </div>
//   );
// };

// export const ButtonWithTextAndIcon = () => {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
//       <Button variantStyle="danger" leftIcon={<FiUpload />}>
//         Uploads
//       </Button>
//       <Button variantStyle="success" rightIcon={<AiTwotoneEdit />}>
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
//       <Button variantStyle="danger" fullWidth>
//         Block Buttons
//       </Button>
//       <Button variantStyle="success" fullWidth>
//         Block Buttons
//       </Button>
//       <Button variantStyle="primary" fullWidth>
//         Block Buttons
//       </Button>
//     </div>
//   );
// };
