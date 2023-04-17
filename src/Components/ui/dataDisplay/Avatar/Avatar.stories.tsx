import React from "react";
import { Avatar } from ".";
import { Box } from "../../layout/Box";
import { colors } from "../../../../styles/colors";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DataDisplay/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const SimpleAvatar = () => {
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 8,
        backgroundColor: colors.primary,
        py: 8,
        px: 16,
        borderRadius: 8,
        width: "100%",
      }}
    >
      <Avatar
        src="https://github.com/jailson-souza.png"
        nameInities={["j", "s"]}
      />
      <Avatar
        src="https://github.com/hewerton80.png"
        nameInities={["h", "a"]}
      />
      <Avatar nameInities={["h", "a"]} />
    </Box>
  );
};
