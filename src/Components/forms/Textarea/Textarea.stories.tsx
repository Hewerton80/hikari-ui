import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Textarea } from ".";
import { Grid } from "../../layout/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Textarea",
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Textarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />

// export const Overview = Template.bind({})

export const ActiveAndDisabled = () => {
  const [description, setDescription] = React.useState("");
  const [bio, setBio] = React.useState("");
  return (
    // <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Grid numCols={12} rowGap={32} columnGap={32}>
      <Grid.Col span={{ base: 12 }}>
        <Textarea
          value={description}
          label="Description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Textarea"
          required
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12 }}>
        <Textarea
          value={bio}
          label="Bio"
          onChange={(e) => setBio(e.target.value)}
          placeholder="Textarea (disabled)"
          required
          disabled
        />
      </Grid.Col>
    </Grid>
  );
};

export const Validations = () => {
  const [description, setDescription] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [About, setAbout] = React.useState("");
  return (
    <Grid numCols={12} rowGap={32} columnGap={32}>
      {/* <FormLabel required>Description:</FormLabel> */}
      <Grid.Col span={{ base: 12 }}>
        <Textarea
          value={description}
          label="Description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Lorem Lorem"
          state="success"
          feedbackText="Looks good!"
          required
        />
      </Grid.Col>
      {/* <FormLabel required>Bio:</FormLabel> */}
      <Grid.Col span={{ base: 12 }}>
        <Textarea
          value={bio}
          label="Bio"
          onChange={(e) => setBio(e.target.value)}
          placeholder="Lorem Lorem"
          state="warning"
          feedbackText="this is requied"
          required
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12 }}>
        {/* <FormLabel required>About:</FormLabel> */}
        <Textarea
          value={About}
          label="About"
          onChange={(e) => setAbout(e.target.value)}
          placeholder="Lorem Lorem"
          state="danger"
          feedbackText="this is requied"
          required
        />
      </Grid.Col>
    </Grid>
  );
};
