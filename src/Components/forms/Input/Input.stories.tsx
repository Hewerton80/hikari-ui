import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Input } from "./Input";
import { FormGroup } from "../FormGroup";
import { FormLabel } from "../FormLabel";
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
    <Grid numCols={2} columnGap={32} rowGap={32}>
      <Col>
        <FormGroup>
          <FormLabel required>Name</FormLabel>
          <Input
            placeholder="Fulano da silva"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <FormLabel required>Name</FormLabel>
          <Input
            placeholder="Fulano da silva"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <FormLabel required>Name</FormLabel>
          <Input
            placeholder="Fulano da silva"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
      </Col>
    </Grid>
  );
};
