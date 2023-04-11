import React from "react";
import { ComponentMeta } from "@storybook/react";
import { useDebouncedCallback } from "use-debounce";
import { Select, SelectOption } from ".";
import { Grid } from "../../../ui/layout/Grid";
import { Box } from "../../../ui/layout/Box";
import axios from "axios";
import { ActionMeta } from "react-select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "forms/Select",
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Select>;

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

  const [profile, setProfile] = React.useState<SelectOption | null>(null);
  const [gender, setGender] = React.useState<SelectOption | null>(null);

  return (
    <Box css={{ width: 356 }}>
      <Grid gap={32}>
        <Grid.Col span={{ base: 12 }}>
          <Select
            label="Profile"
            value={profile}
            onChange={setProfile}
            options={profileOptions}
            placeholder="Select profile..."
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <Select
            label="Gender"
            isDisabled
            value={gender}
            onChange={setGender}
            options={genderOptions}
            placeholder="Select Gender..."
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export const Validations = () => {
  const [profile, setProfile] = React.useState<SelectOption>(null);
  const [gender, setGender] = React.useState<SelectOption>(null);
  const [tech, setTech] = React.useState<SelectOption>(null);

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
    <Box css={{ width: 356 }}>
      <Grid gap={32}>
        <Grid.Col span={{ base: 12 }}>
          <Select
            label="Profile:"
            value={profile}
            options={profileOptions}
            onChange={setProfile}
            placeholder="Select profile..."
            state="success"
            feedbackText="Looks good!"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <Select
            label="Gender:"
            value={gender}
            options={genderOptions}
            onChange={setGender}
            placeholder="Select gender..."
            state="warning"
            feedbackText="this is requied"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <Select
            label="Tech:"
            value={tech}
            options={techOptions}
            onChange={setTech}
            placeholder="Select tech..."
            state="danger"
            feedbackText="this is requied"
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export const SingleValueWithAutocomplite = () => {
  const profileOptions = [
    { value: "admin", label: "Admin" },
    { value: "blogger", label: "Blogger" },
    { value: "customer", label: "Customer" },
  ];

  const [profile, setProfile] = React.useState<SelectOption>(null);

  return (
    <Box css={{ width: 356 }}>
      <Grid gap={32}>
        <Grid.Col span={{ base: 12 }}>
          <Select
            label="Profile"
            value={profile}
            onChange={setProfile}
            options={profileOptions}
            isAutocomplite
            placeholder="Select profile..."
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export const MultValuesWithAutocomplite = () => {
  const [teches, setTechs] = React.useState<SelectOption[]>([]);

  const techOptions = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "JS", label: "JAVASCRIPT" },
  ];

  return (
    <Box css={{ width: 356 }}>
      <Grid>
        <Grid.Col span={{ base: 12 }}>
          <Select
            label="Techs"
            value={teches}
            isMulti
            isAutocomplite
            options={techOptions}
            onChange={setTechs}
            placeholder="Select teches..."
          />
        </Grid.Col>
      </Grid>
    </Box>
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

export const SigleValueWitchAutocompliteAsync = () => {
  const [cardValue, setCardValue] = React.useState<SelectOption>(null);
  const [responseCards, setResponseCards] = React.useState<ICard[]>([]);
  const [currentCardInfo, setCurrentCardInfo] =
    React.useState<ICard | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState(false);

  const autocompliteCardOptions = React.useMemo<SelectOption[]>(() => {
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
    (option: SelectOption) => {
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
    <Box css={{ width: 356 }}>
      <Grid gap={32}>
        <Grid.Col span={{ base: 12 }}>
          <Select
            label="YU-GI-OH CARD:"
            value={cardValue}
            options={autocompliteCardOptions}
            onChange={handleSelectOptions}
            onInputChange={handleChangeInputText}
            isAutocomplite
            placeholder="Search for a yuguioh card..."
            isLoading={isLoading}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <Box
            css={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            {currentCardInfo &&
              currentCardInfo?.card_images?.map((img) => (
                <img
                  key={img?.id}
                  src={img?.image_url}
                  alt={img?.image_url}
                  width={172}
                />
              ))}
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export const MultValueAutocompliteAsync = () => {
  const [cardValue, setCardValue] = React.useState<SelectOption[]>([]);
  const [responseCards, setResponseCards] = React.useState<ICard[]>([]);
  const [currentCardInfo, setCurrentCardInfo] = React.useState<ICard[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const autocompliteCardOptions = React.useMemo<SelectOption[]>(() => {
    return responseCards.map((card) => ({
      value: String(card?.id),
      label: String(card?.name),
    }));
  }, [responseCards]);

  const handleFetchData = useDebouncedCallback(
    React.useCallback(async (newValue: string) => {
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
  const handleChangeOptions = React.useCallback(
    (newOptions: SelectOption[], actionMeta: ActionMeta<SelectOption>) => {
      if (!newOptions) return;
      setCardValue(newOptions);
      if (actionMeta.action === "select-option") {
        const indexCard = responseCards.findIndex(
          (card) => String(card?.id) === actionMeta?.option?.value
        );
        if (indexCard >= 0) {
          setCurrentCardInfo((currentInfo) => [
            ...currentInfo,
            responseCards[indexCard],
          ]);
        }
      } else if (actionMeta.action === "remove-value") {
        setCurrentCardInfo(([...currentInfo]) => {
          const indexCard = currentInfo.findIndex(
            (currentInfo) =>
              String(currentInfo?.id) === actionMeta?.removedValue?.value
          );
          currentInfo.splice(indexCard, 1);
          return currentInfo;
        });
      }
    },
    [responseCards]
  );

  return (
    <Box css={{ width: 356 }}>
      <Grid gap={32}>
        <Grid.Col span={{ base: 12 }}>
          <Select
            label="YU-GI-OH CARD:"
            value={cardValue}
            options={autocompliteCardOptions}
            isMulti
            isAutocomplite
            onChange={handleChangeOptions}
            onInputChange={handleChangeInputText}
            placeholder="Search for a yuguioh card..."
            isLoading={isLoading}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <Box
            css={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            {currentCardInfo?.map((cardInfo) => (
              <img
                key={cardInfo?.card_images?.[0]?.id}
                src={cardInfo?.card_images?.[0]?.image_url}
                alt={cardInfo?.card_images?.[0]?.image_url}
                width={172}
              />
            ))}
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
