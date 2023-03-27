import React from "react";
import { ComponentMeta } from "@storybook/react";
import { IconButton } from ".";
import { FiUpload } from "react-icons/fi";
import { AiOutlineUserSwitch, AiTwotoneEdit } from "react-icons/ai";
import { Box } from "../../layout/Box";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "forms/IconButton",
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof IconButton>;

export const variantStyles = () => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
      }}
    >
      <Box
        css={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <IconButton variantStyle="primary" icon={<FiUpload />} />
        <IconButton variantStyle="secondary" icon={<FiUpload />} />
        <IconButton variantStyle="success" icon={<FiUpload />} />
        <IconButton variantStyle="info" icon={<FiUpload />} />
        <IconButton variantStyle="dark" icon={<FiUpload />} />
        <IconButton variantStyle="danger" icon={<FiUpload />} />
        <IconButton variantStyle="warning" icon={<FiUpload />} />
      </Box>
      <Box
        css={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <IconButton variantStyle="primary-outlined" icon={<AiTwotoneEdit />} />
        <IconButton
          variantStyle="secondary-outlined"
          icon={<AiTwotoneEdit />}
        />
        <IconButton variantStyle="success-outlined" icon={<AiTwotoneEdit />} />
        <IconButton variantStyle="info-outlined" icon={<AiTwotoneEdit />} />
        <IconButton variantStyle="dark-outlined" icon={<AiTwotoneEdit />} />
        <IconButton variantStyle="danger-outlined" icon={<AiTwotoneEdit />} />
        <IconButton variantStyle="warning-outlined" icon={<AiTwotoneEdit />} />
      </Box>
      <Box
        css={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <IconButton
          variantStyle="primary-texted"
          icon={<AiOutlineUserSwitch />}
        />
        <IconButton
          variantStyle="secondary-texted"
          icon={<AiOutlineUserSwitch />}
        />
        <IconButton
          variantStyle="success-texted"
          icon={<AiOutlineUserSwitch />}
        />
        <IconButton variantStyle="info-texted" icon={<AiOutlineUserSwitch />} />
        <IconButton variantStyle="dark-texted" icon={<AiOutlineUserSwitch />} />
        <IconButton
          variantStyle="danger-texted"
          icon={<AiOutlineUserSwitch />}
        />
        <IconButton
          variantStyle="warning-texted"
          icon={<AiOutlineUserSwitch />}
        />
      </Box>
    </Box>
  );
};
