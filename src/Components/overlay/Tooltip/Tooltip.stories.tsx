import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Tooltip } from ".";
import { Box } from "../../layout/Box";
import { Text } from "../../typography/Text";
import { Button } from "../../forms/Button";
import { Grid } from "../../layout/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "overlay/Tooltip",
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const BasicTooltip = () => {
  return (
    <Tooltip content="My Tooltip 🎉🎊🪂">Hoverme to show my tooltip 🥳</Tooltip>
  );
};

export const Orientation = () => {
  const orientations = [
    "top-start",
    "top-center",
    "top-right",
    "left",
    "right",
    "bottom-start",
    "bottom-center",
    "bottom-right",
  ];
  return (
    <Grid gap={16} numCols={12}>
      {orientations.map((orientation, i) => (
        <React.Fragment key={orientation}>
          {i === 4 && <Grid.Col span={{ base: 12, md: 4 }} />}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Tooltip orientation={orientation as any} content={orientation}>
              <Button fullWidth size="sm">
                {orientation}
              </Button>
            </Tooltip>
          </Grid.Col>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export const VariantColorsTooltips = () => {
  return (
    <Box css={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
      <Tooltip content="primary" variantStyle="primary">
        <Button variantStyle="info-texted">primary</Button>
      </Tooltip>
      <Tooltip content="secondary" variantStyle="secondary">
        <Button variantStyle="info-texted">secondary</Button>
      </Tooltip>
      <Tooltip content="success" variantStyle="success">
        <Button variantStyle="info-texted">success</Button>
      </Tooltip>
      <Tooltip content="danger" variantStyle="danger">
        <Button variantStyle="info-texted">danger</Button>
      </Tooltip>
      <Tooltip content="warning" variantStyle="warning">
        <Button variantStyle="info-texted">warning</Button>
      </Tooltip>
      <Tooltip content="dark" variantStyle="dark">
        <Button variantStyle="info-texted">dark</Button>
      </Tooltip>
      <Tooltip content="info" variantStyle="info">
        <Button variantStyle="info-texted">info</Button>
      </Tooltip>
    </Box>
  );
};

export const SizesTooltipes = () => {
  const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit eligendi ipsum numquam, rerum doloremque fugiat tempora dicta libero, asperiores quasi autem, delectus aperiam sequi explicabo doloribus expedita cupiditate veritatis.`;
  return (
    <Box css={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
      <Tooltip content={lorem} size="sm">
        <Button variantStyle="info-texted">sm width</Button>
      </Tooltip>
      <Tooltip content={lorem} size="md">
        <Button variantStyle="info-texted">md width</Button>
      </Tooltip>
      <Tooltip content={lorem} size="lg">
        <Button variantStyle="info-texted">lg width</Button>
      </Tooltip>
      <Tooltip content={lorem} size="auto">
        <Button variantStyle="info-texted">auto</Button>
      </Tooltip>
    </Box>
  );
};

export const CustomStyle = () => {
  const customContent = (
    <Box
      css={{
        display: "flex",
        padding: 16,
        size: 150,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3b86d1",
      }}
    >
      <Text
        as="em"
        css={{
          color: "#ffffff",
          textDecoration: "line-through",
          textAlign: "center",
        }}
      >
        My Custom Style 🎉🎊🪂
      </Text>
    </Box>
  );

  return <Tooltip content={customContent}>Custom Style</Tooltip>;
};
