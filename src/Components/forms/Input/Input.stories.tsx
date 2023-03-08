import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Input } from "./Input";
import { Grid, Col } from "../../layout/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Feedback/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Input>;

export const Example = () => {
  const [email, setEmail] = React.useState("");
  return (
    <Grid numCols={12} rowGap={32} columnGap={32}>
      <Col span={{ base: 12, lg: 4 }}>
        <Input
          id="name"
          placeholder="Fulano da silva"
          label="Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Col>
      <Col span={{ base: 12, lg: 4 }}>
        <Input
          placeholder="Fulano da silva"
          label="Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Col>
      <Col span={{ base: 12, lg: 4 }}>
        <Input placeholder="Fulano da silva" label="Name" value={email} />
      </Col>
    </Grid>
  );
};
