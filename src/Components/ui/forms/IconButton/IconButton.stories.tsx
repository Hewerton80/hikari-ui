import React from "react";
import { IconButton } from ".";
import { FiUpload } from "react-icons/fi";
import { AiOutlineUserSwitch, AiTwotoneEdit } from "react-icons/ai";
import { Box } from "../../../ui/layout/Box";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "forms/IconButton",
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

const innerBoxStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  justifyContent: "center",
};
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
      <Box css={innerBoxStyle}>
        <IconButton variantStyle="primary" icon={<FiUpload />} />
        <IconButton variantStyle="secondary" icon={<FiUpload />} />
        <IconButton variantStyle="success" icon={<FiUpload />} />
        <IconButton variantStyle="info" icon={<FiUpload />} />
        <IconButton variantStyle="dark" icon={<FiUpload />} />
        <IconButton variantStyle="danger" icon={<FiUpload />} />
        <IconButton variantStyle="warning" icon={<FiUpload />} />
      </Box>
      <Box css={innerBoxStyle}>
        <IconButton variantStyle="primary-outlined" icon={<AiTwotoneEdit />} />
        <IconButton
          variantStyle="secondary-outlined"
          icon={<AiTwotoneEdit />}
        />
        <IconButton
          variantStyle="success-outlined"
          icon={<AiOutlineUserSwitch />}
        />
        <IconButton
          variantStyle="info-outlined"
          icon={<AiOutlineUserSwitch />}
        />
        <IconButton
          variantStyle="dark-outlined"
          icon={<AiOutlineUserSwitch />}
        />
        <IconButton
          variantStyle="danger-outlined"
          icon={<AiOutlineUserSwitch />}
        />
        <IconButton
          variantStyle="warning-outlined"
          icon={<AiOutlineUserSwitch />}
        />
      </Box>
      <Box css={innerBoxStyle}>
        <IconButton
          variantStyle="primary-ghost"
          icon={<AiOutlineUserSwitch />}
        />
        <IconButton
          variantStyle="secondary-ghost"
          icon={<AiOutlineUserSwitch />}
        />
        <IconButton
          variantStyle="success-ghost"
          icon={<AiOutlineUserSwitch />}
        />
        <IconButton variantStyle="info-ghost" icon={<AiOutlineUserSwitch />} />
        <IconButton variantStyle="dark-ghost" icon={<AiOutlineUserSwitch />} />
        <IconButton
          variantStyle="danger-ghost"
          icon={<AiOutlineUserSwitch />}
        />
        <IconButton
          variantStyle="warning-ghost"
          icon={<AiOutlineUserSwitch />}
        />
      </Box>
    </Box>
  );
};
