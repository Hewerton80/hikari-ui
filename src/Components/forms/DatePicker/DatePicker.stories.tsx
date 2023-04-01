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
  const [date, setDate] = React.useState<Date>(null);
  return (
    <Grid numCols={12} gap={32}>
      <Grid.Col span={{ base: 12 }}>
        <DatePicker
          placeholderText="dd/mm/aaaa"
          selected={date}
          onChange={setDate}
          required
        />
      </Grid.Col>
    </Grid>
  );
};
