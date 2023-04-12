import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Tab } from ".";
import { Box } from "../../../ui/layout/Box";
import { Text } from "../../../ui/typography/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "navigation/Tab",
  component: Tab.Provider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Tab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />

export const DefaultTab = () => {
  return (
    <Box css={{ width: 524 }}>
      <Tab.Provider defaultValue={1}>
        <Tab.List>
          <Tab value={1}>Tab 1 🎨</Tab>
          <Tab value={2}>Tab 2 🔥</Tab>
          <Tab value={3}>Tab 3 🚀</Tab>
          <Tab value={4}>Tab 4 ⚡</Tab>
        </Tab.List>
        <Box css={{ display: "flex" }}>
          <Tab.Content value={1}>
            <Text>Content 1 🎨</Text>
          </Tab.Content>
          <Tab.Content value={2}>
            <Text>Content 2 🔥</Text>
          </Tab.Content>
          <Tab.Content value={3}>
            <Text>Content 3 🚀</Text>
          </Tab.Content>
          <Tab.Content value={4}>
            <Text>Content 4 ⚡</Text>
          </Tab.Content>
        </Box>
      </Tab.Provider>
    </Box>
  );
};
