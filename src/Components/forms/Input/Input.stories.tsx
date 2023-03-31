import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Input } from "./Input";
import { Grid } from "../../layout/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Input>;

export const ActiveAndDisabled = () => {
  const [name, setName] = React.useState("");
  return (
    <Grid numCols={12} gap={32}>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Input
          id="name"
          placeholder="Fulano da silva"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Input
          disabled
          placeholder="Fulano@email.com"
          defaultValue="Fulano@email.com"
          label="Email"
        />
      </Grid.Col>
    </Grid>
  );
};

export const Masks = () => {
  const [cpf, setCpg] = React.useState("");
  const [cnpj, setCnpj] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [phone, setPhone] = React.useState("");
  return (
    <Grid numCols={12} gap={32}>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Input
          label="CPF"
          mask="cpf"
          value={cpf}
          onChange={(e) => setCpg(e.target.value)}
          required
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Input
          label="CNPJ"
          mask="cnpj"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          required
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Input
          label="Cep"
          mask="cep"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Input
          label="Phone"
          mask="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </Grid.Col>
    </Grid>
  );
};

export const Validations = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  return (
    <Grid numCols={12} gap={32}>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Lorem Lorem"
          state="success"
          feedbackText="Looks good!"
          required
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Lorem Lorem"
          state="warning"
          feedbackText="this is requied"
          required
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Input
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Lorem Lorem"
          state="danger"
          feedbackText="this is requied"
          required
        />
      </Grid.Col>
    </Grid>
  );
};
