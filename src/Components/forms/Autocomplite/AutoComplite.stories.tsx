import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Autocomplite, IAutoCompliteOption } from ".";
import { Grid } from "../../layout/Grid";
// import FormGroup from '../FormGroup'
// import FormLabel from '../FormLabel'
// import { Card, CardBody, CardHeader, CardTitle } from '../../layout/Card'
// import { useDebouncedCallback } from 'use-debounce'
// import axios from 'axios'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "forms/Autocomplite",
  component: Autocomplite,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Autocomplite>;

export const ActiveAndDisabled = () => {
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

  const [profile, setProfile] =
    React.useState<IAutoCompliteOption | null>(null);
  const [gender, setGender] = React.useState<IAutoCompliteOption | null>(null);

  return (
    <div style={{ width: 356 }}>
      <Grid>
        <Grid.Col span={{ base: 12 }}>
          <Autocomplite
            value={profile}
            onChangeSingleValue={setProfile}
            options={profileOptions}
            placeholder="Select profile..."
          />
        </Grid.Col>
        {/* </FormGroup>
            <FormGroup>
              <FormLabel required>Gender:</FormLabel> */}
        {/* <Autocomplite
        value={gender}
        options={genderOptions}
        onChange={setGender}
        placeholder="Select gender..."
        isDisabled
      /> */}
        {/* </FormGroup> */}
        {/* </div> */}
      </Grid>
    </div>
  );
};

export const Mult = () => {
  const [profiles, setProfiles] = React.useState<IAutoCompliteOption[]>([]);

  const profilesOptions = [
    { value: "admin", label: "Admin" },
    { value: "blogger", label: "Blogger" },
    { value: "customer", label: "Customer" },
  ];

  return (
    <div style={{ width: 356 }}>
      <Grid>
        <Grid.Col span={{ base: 12 }}>
          <Autocomplite
            value={profiles}
            isMulti
            options={profilesOptions}
            onChangeMultValue={(newValues) => setProfiles(newValues)}
            placeholder="Select profiles..."
          />
        </Grid.Col>
        {/* </FormGroup>
            <FormGroup>
              <FormLabel required>Gender:</FormLabel> */}
        {/* <Autocomplite
        value={gender}
        options={genderOptions}
        onChange={setGender}
        placeholder="Select gender..."
        isDisabled
      /> */}
        {/* </FormGroup> */}
        {/* </div> */}
      </Grid>
    </div>
  );
};
