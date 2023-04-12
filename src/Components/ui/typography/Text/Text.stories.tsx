import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Text } from ".";
import { Box } from "../../../ui/layout/Box";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "typography/Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Example = () => {
  return (
    <Box css={{ display: "flex", flexDirection: "column", spaceY: 12 }}>
      <Text as="p" css={{ fontSize: "2rem" }}>
        In love with React & Next
      </Text>

      <Text as="p">(P) In love with React & Next</Text>

      <Text as="span">(Span) In love with React & Next</Text>

      <Text as="p" css={{ fontWeight: "bold" }}>
        In love with React & Next
      </Text>

      <Text as="em" css={{ fontFamily: "monospace" }}>
        In love with React & Next
      </Text>

      <Text as="b" css={{ color: "#dc3545" }}>
        In love with React & Next
      </Text>

      <Text as="address" css={{ textDecoration: "underline" }}>
        In love with React & Next
      </Text>

      <Text as="p" css={{ textDecoration: "line-through" }}>
        In love with React & Next
      </Text>
    </Box>
  );
};
export const Heading = () => {
  return (
    <Box css={{ display: "flex", flexDirection: "column", spaceY: 12 }}>
      <Text as="h1">H1 🎉🥳🎊🪂</Text>
      <Text as="h2">H2 🎉🥳🎊🪂</Text>
      <Text as="h3">H3 🎉🥳🎊🪂</Text>
      <Text as="h4">H4 🎉🥳🎊🪂</Text>
      <Text as="h5">H5 🎉🥳🎊🪂</Text>
      <Text as="h6">H6 🎉🥳🎊🪂</Text>
    </Box>
  );
};
