import React, { useState } from "react";
import { Slider } from ".";
import { Box } from "../../layout/Box";
import { Text } from "../../typography/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "forms/Slider",
  component: Slider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />

export const DefaultSlides = () => {
  return (
    <Box
      css={{
        display: "flex",
        width: 500,
        flexDirection: "column",
        gap: 32,
      }}
    >
      <Box css={{ display: "flex" }}>
        <Slider>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
      <Box css={{ display: "flex", height: 100 }}>
        <Slider orientation="vertical">
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    </Box>
  );
};

export const ControledSlide = () => {
  const [progress, setProgress] = useState(0);

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        width: 500,
        gap: 32,
      }}
    >
      <Slider
        value={[progress]}
        min={0}
        max={100}
        onValueChange={(progressValue) => setProgress(progressValue[0])}
      >
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Text>progress: {progress}</Text>
    </Box>
  );
};

export const ControledSlideRange = () => {
  const [range, setRange] = useState([0, 50]);

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        width: 500,
        gap: 32,
      }}
    >
      <Slider
        value={range}
        min={0}
        max={100}
        onValueChange={(rangeValue) => setRange(rangeValue)}
      >
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Text>range: {`[${range[0]}, ${range[1]}]`}</Text>
    </Box>
  );
};
