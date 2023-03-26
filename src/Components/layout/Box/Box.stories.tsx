import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Box } from ".";
import { Text } from "../../typography/Text";
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
    <Box display="flex" flexDirection="column" spaceY={32} as="main">
      <Box
        display="flex"
        maxWidth={400}
        height={150}
        width="100%"
        overflow="hidden"
        borderRadius={10}
        padding={16}
        shadow="lg"
        spaceX={8}
      >
        <Box
          display="flex"
          flex={"25%"}
          alignItems="center"
          justifyContent="center"
          backgroundColor="#844fc1"
        >
          <Text color="#ffffff">Box 1</Text>
        </Box>
        <Box
          display="flex"
          flex={"25%"}
          alignItems="center"
          justifyContent="center"
          backgroundColor="#f39915"
        >
          <Text color="#ffffff">Box 2</Text>
        </Box>
        <Box
          display="flex"
          flex={"50%"}
          alignItems="center"
          justifyContent="center"
          backgroundColor="#21bf06"
        >
          <Text color="#ffffff">Box 3</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        maxWidth={400}
        height={150}
        width="100%"
        borderRadius={10}
        marginBottom={32}
        overflow="hidden"
        justifyContent="space-between"
        shadow="lg"
        padding={16}
        spaceX={8}
      >
        <Box
          display="flex"
          width={150}
          alignItems="center"
          justifyContent="center"
          backgroundColor="#dc3545"
        >
          <Text color="#ffffff">Box 1</Text>
        </Box>
        <Box
          display="flex"
          width={150}
          alignItems="center"
          justifyContent="center"
          backgroundColor="#3b86d1"
        >
          <Text color="#ffffff">Box 3</Text>
        </Box>
      </Box>
    </Box>
  );
};
