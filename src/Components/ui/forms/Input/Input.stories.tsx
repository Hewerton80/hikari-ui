import React, { useState } from "react";
import { Input } from "./Input";
import { Grid } from "../../../ui/layout/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

export const ActiveAndDisabled = () => {
  const [name, setName] = useState("");
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
        <Input disabled defaultValue="Fulano@email.com" label="Email" />
      </Grid.Col>
    </Grid>
  );
};

export const Masks = () => {
  const [cpf, setCpg] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [phone, setPhone] = useState("");
  const [creditCard, setCreditCard] = useState("");
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
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Input
          label="Credit Card"
          mask="creditCard"
          value={creditCard}
          onChange={(e) => setCreditCard(e.target.value)}
          required
        />
      </Grid.Col>
    </Grid>
  );
};

export const Validations = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
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
