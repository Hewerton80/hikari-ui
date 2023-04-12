import React from "react";
import { ComponentMeta } from "@storybook/react";

import { DatePicker } from "./DatePicker";
import { Grid } from "../../../ui/layout/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/DatePicker",
  component: DatePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof DatePicker>;

export const BasicExample = () => {
  const [date, setDate] = React.useState<Date>(null);
  return (
    <Grid numCols={12} gap={32} css={{ marginTop: 0 }}>
      <Grid.Col span={{ base: 12 }}>
        <DatePicker
          label="Date"
          selectedDate={date}
          onChange={setDate}
          required
        />
      </Grid.Col>
    </Grid>
  );
};

export const DateWithTime = () => {
  const [date, setDate] = React.useState<Date>(null);
  return (
    <Grid numCols={12} gap={32} css={{ marginTop: 0 }}>
      <Grid.Col span={{ base: 12 }}>
        <DatePicker
          label="Date"
          showTimeSelect
          selectedDate={date}
          onChange={(date) => {
            console.log("date", date.toString());
            setDate(date);
          }}
          required
        />
      </Grid.Col>
    </Grid>
  );
};

export const Range = () => {
  const [dateRange, setDateRange] = React.useState<Date[]>([null, null]);
  const [startDate, endDate] = React.useMemo(() => dateRange, [dateRange]);
  return (
    <Grid numCols={12} gap={32} css={{ marginTop: 0 }}>
      <Grid.Col span={{ base: 12 }}>
        <DatePicker
          label="Date"
          selectedDate={startDate}
          startDate={startDate}
          endDate={endDate}
          onChangeRange={setDateRange}
          selectsRange
          required
        />
      </Grid.Col>
    </Grid>
  );
};
