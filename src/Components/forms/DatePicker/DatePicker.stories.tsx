import React from "react";
import { ComponentMeta } from "@storybook/react";

import { DatePicker } from "./DatePicker";
import { Grid } from "../../layout/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/DatePicker",
  component: DatePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof DatePicker>;

export const ActiveAndDisabled = () => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <Grid numCols={12} gap={32} css={{ marginTop: 0 }}>
      <Grid.Col span={{ base: 12 }}>
        <DatePicker
          label="Date"
          inputValue={inputValue}
          onInputChange={setInputValue}
          placeholderText="dd/mm/aaaa"
          required
        />
      </Grid.Col>
    </Grid>
  );
};
