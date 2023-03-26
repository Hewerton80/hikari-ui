import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Select } from ".";
import { Grid } from "../../layout/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "forms/Select",
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

// export const Overview = Template.bind({})

export const ActiveAndDisabled = () => {
  const [profile, setProfile] = React.useState("");
  const [gender, setGender] = React.useState("");

  const profileOptions = [
    { value: "admin", label: "Admin" },
    { value: "blogger", label: "Blogger" },
    { value: "customer", label: "Customer" },
  ];
  const genderOptions = [
    { value: "M", label: "Masculine" },
    { value: "F", label: "Feminine" },
    { value: "O", label: "Other" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Grid numCols={12} gap={32}>
        <Grid.Col span={{ base: 12 }}>
          <Select
            label="Profile"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            options={[{ value: "", label: "-" }, ...profileOptions]}
            required
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <Select
            label="Gender:"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            options={[{ value: "", label: "-" }, ...genderOptions]}
            required
            disabled
          />
        </Grid.Col>
      </Grid>
    </div>
  );
};
