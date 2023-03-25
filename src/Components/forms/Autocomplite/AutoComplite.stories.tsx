import React from "react";
import { ComponentMeta } from "@storybook/react";
import { useDebouncedCallback } from "use-debounce";
import { Autocomplite, IAutoCompliteOption } from ".";
import { Grid } from "../../layout/Grid";
import axios from "axios";
// import FormGroup from '../FormGroup'
// import FormLabel from '../FormLabel'
// import { Card, CardBody, CardHeader, CardTitle } from '../../layout/Card'
// import { useDebouncedCallback } from 'use-debounce'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "forms/Autocomplite",
  component: Autocomplite,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Autocomplite>;

export const SingleValue = () => {
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
      <Grid gap={32}>
        <Grid.Col span={{ base: 12 }}>
          <Autocomplite
            label="Profile"
            value={profile}
            onChange={setProfile}
            // onChangeSingleValue={setProfile}
            options={profileOptions}
            placeholder="Select profile..."
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <Autocomplite
            label="Gender"
            isDisabled
            value={gender}
            onChangeSingleValue={setGender}
            options={genderOptions}
            placeholder="Select Gender..."
          />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export const MultValues = () => {
  const [teches, setTechs] = React.useState<IAutoCompliteOption[]>([]);

  const techOptions = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "JS", label: "JAVASCRIPT" },
  ];

  return (
    <div style={{ width: 356 }}>
      <Grid>
        <Grid.Col span={{ base: 12 }}>
          <Autocomplite
            label="Techs"
            value={teches}
            isMulti
            options={techOptions}
            onChange={(newValues) => setTechs(newValues)}
            // onChange={(newValues) => setTechs(newValues)}
            // onChangeMultValue={(newValues) => setTechs(newValues)}
            placeholder="Select teches..."
          />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export const Validations = () => {
  const [profile, setProfile] =
    React.useState<IAutoCompliteOption | null>(null);
  const [gender, setGender] = React.useState<IAutoCompliteOption | null>(null);
  const [tech, setTech] = React.useState<IAutoCompliteOption | null>(null);

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
  const techOptions = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "JS", label: "JAVASCRIPT" },
  ];

  return (
    <div style={{ width: 356 }}>
      <Grid gap={32}>
        <Grid.Col span={{ base: 12 }}>
          <Autocomplite
            label="Profile:"
            value={profile}
            options={profileOptions}
            onChangeSingleValue={setProfile}
            placeholder="Select profile..."
            state="success"
            feedbackText="Looks good!"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <Autocomplite
            label="Gender:"
            value={gender}
            options={genderOptions}
            onChangeSingleValue={setGender}
            placeholder="Select gender..."
            state="warning"
            feedbackText="this is requied"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <Autocomplite
            label="Tech:"
            value={tech}
            options={techOptions}
            onChangeSingleValue={setTech}
            placeholder="Select tech..."
            state="danger"
            feedbackText="this is requied"
          />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export interface cardImage {
  id: number;
  image_url: string;
  image_url_small: string;
}
interface ICard {
  id?: number | string;
  name?: string;
  fname?: string; // queryparan
  has_effect?: boolean; // queryparan
  type?: string;
  desc?: string;
  atk?: number | string;
  def?: number | string;
  level?: number | string;
  scale?: string;
  race?: string;
  attribute?: string;
  card_images?: cardImage[];
}

export const SigleValueAsync = () => {
  const [cardValue, setCardValue] =
    React.useState<IAutoCompliteOption | null>(null);
  const [responseCards, setResponseCards] = React.useState<ICard[]>([]);
  const [currentCardInfo, setCurrentCardInfo] =
    React.useState<ICard | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState(false);

  const autocompliteCardOptions = React.useMemo<IAutoCompliteOption[]>(() => {
    return responseCards.map((card) => ({
      value: String(card?.id),
      label: String(card?.name),
    }));
  }, [responseCards]);

  const handleFetchData = useDebouncedCallback(
    React.useCallback(async (newValue: string) => {
      console.log("newValue", newValue);
      try {
        const { data: dataCards } = await axios.get(
          "https://db.ygoprodeck.com/api/v7/cardinfo.php",
          {
            params: { fname: newValue, num: 8, page: 1, offset: 0 },
          }
        );
        setResponseCards(dataCards?.data);
      } catch (error) {}
      setIsLoading(false);
    }, []),
    1000
  );

  const handleChangeInputText = React.useCallback(
    (newValue: string) => {
      if (!newValue.trim()) return;
      setIsLoading(true);
      handleFetchData(newValue);
    },
    [handleFetchData]
  );

  const handleSelectOptions = React.useCallback(
    (option: IAutoCompliteOption | null) => {
      if (!option) return;
      setCardValue(option);
      const indexCard = responseCards.findIndex(
        (card) => String(card?.id) === option.value
      );
      if (indexCard >= 0) {
        setCurrentCardInfo(responseCards[indexCard]);
      }
    },
    [responseCards]
  );

  return (
    <div style={{ width: 356 }}>
      <Grid gap={32}>
        <Grid.Col span={{ base: 12 }}>
          <Autocomplite
            label="YU-GI-OH CARD:"
            value={cardValue}
            options={autocompliteCardOptions}
            onChangeSingleValue={handleSelectOptions}
            onInputChange={handleChangeInputText}
            placeholder="Search for a yuguioh card..."
            isLoading={isLoading}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          {currentCardInfo &&
            currentCardInfo?.card_images?.map((img) => (
              <img
                key={img?.id}
                src={img?.image_url}
                alt={img?.image_url}
                width={172}
              />
            ))}
        </Grid.Col>
      </Grid>
    </div>
  );
};
