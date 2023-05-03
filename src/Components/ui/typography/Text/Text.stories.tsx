import React from "react";
import { Text } from ".";
import { Box } from "../../../ui/layout/Box";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "typography/Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Example = () => {
  return (
    <Box css={{ display: "flex", flexDirection: "column", spaceY: 12 }}>
      <Text css={{ fontSize: "2rem" }}>In love with React & Next</Text>

      <Text>(P) In love with React & Next</Text>

      <Text asChild>
        <span> (Span) In love with React & Next</span>
      </Text>

      <Text asChild css={{ fontWeight: "bold" }}>
        <p> In love with React & Next</p>
      </Text>

      <Text asChild css={{ fontFamily: "monospace" }}>
        <em>In love with React & Next</em>
      </Text>

      <Text asChild css={{ color: "#dc3545" }}>
        <b>In love with React & Next</b>
      </Text>

      <Text asChild css={{ textDecoration: "underline" }}>
        <address>In love with React & Next</address>
      </Text>

      <Text css={{ textDecoration: "line-through" }}>
        In love with React & Next
      </Text>
    </Box>
  );
};
export const Heading = () => {
  return (
    <Box css={{ display: "flex", flexDirection: "column", spaceY: 12 }}>
      <Text asChild>
        <h1>H1 🎉🥳🎊🪂</h1>
      </Text>
      <Text asChild>
        <h2>H2 🎉🥳🎊🪂</h2>
      </Text>
      <Text asChild>
        <h3>H3 🎉🥳🎊🪂</h3>
      </Text>
      <Text asChild>
        <h4>H4 🎉🥳🎊🪂</h4>
      </Text>
      <Text asChild>
        <h5>H5 🎉🥳🎊🪂</h5>
      </Text>
      <Text asChild>
        <h6>H6 🎉🥳🎊🪂</h6>
      </Text>
    </Box>
  );
};
