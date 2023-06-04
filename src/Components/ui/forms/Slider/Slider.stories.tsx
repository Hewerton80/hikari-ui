import React from "react";
import { Slider } from ".";
import { Box } from "../../layout/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "forms/Slider",
  component: Slider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />

export const DefaultTab = () => {
  return (
    <Box css={{ display: "flex", maxWidth: 500, width: "100%" }}>
      <Slider>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  );
};
