import React from "react";
import { Avatar } from ".";
import { AppBar } from "../../navigation/AppBar";

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
    <AppBar>
      <AppBar.Tool css={{ gap: 8, justifyContent: "center" }}>
        <Avatar
          src="https://github.com/jailson-souza.png"
          nameInities={["j", "s"]}
        />
        <Avatar
          src="https://github.com/hewerton80.png"
          nameInities={["h", "a"]}
        />
        <Avatar nameInities={["h", "a"]} />
      </AppBar.Tool>
    </AppBar>
  );
};
