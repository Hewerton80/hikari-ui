import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Box } from ".";
import { Text } from "../../../ui/typography/Text";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "layout/Box",
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Example = () => {
  return (
    <Box
      as="main"
      css={{ display: "flex", flexDirection: "column", spaceY: 12 }}
    >
      <Box
        css={{
          display: "flex",
          height: 150,
          maxWidth: 400,
          width: "100%",
          shadow: "lg",
          overflow: "hidden",
          borderRadius: 10,
          padding: 16,
          spaceX: 8,
        }}
      >
        <Box
          css={{
            display: "flex",
            flex: "25%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#844fc1",
          }}
        >
          <Text css={{ color: "#ffffff" }}>Box 1</Text>
        </Box>
        <Box
          css={{
            display: "flex",
            flex: "25%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f39915",
          }}
        >
          <Text css={{ color: "#ffffff" }}>Box 2</Text>
        </Box>
        <Box
          css={{
            display: "flex",
            flex: "50%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#21bf06",
          }}
        >
          <Text css={{ color: "#ffffff" }}>Box 3</Text>
        </Box>
      </Box>
      <Box
        css={{
          display: "flex",
          height: 150,
          maxWidth: 400,
          width: "100%",
          shadow: "lg",
          overflow: "hidden",
          borderRadius: 10,
          justifyContent: "space-between",
          padding: 16,
          spaceX: 8,
        }}
      >
        <Box
          css={{
            display: "flex",
            width: 150,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#dc3545",
          }}
        >
          <Text css={{ color: "#ffffff" }}>Box 4</Text>
        </Box>
        <Box
          css={{
            display: "flex",
            width: 150,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#3b86d1",
          }}
        >
          <Text css={{ color: "#ffffff" }}>Box 5</Text>
        </Box>
      </Box>
    </Box>
  );
};
