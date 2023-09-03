import React from "react";
import { Tooltip } from ".";
import { Box } from "../../../ui/layout/Box";
import { Text } from "../../../ui/typography/Text";
import { Button } from "../../forms/Button";
import { twMerge } from "tailwind-merge";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "overlay/Tooltip",
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

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
    <>
      <div className=" gap-4 grid grid-cols-12">
        {orientations.map((orientation, i) => (
          <React.Fragment key={orientation}>
            {i === 4 && <div className="col-span-12 md:col-span-4" />}
            <div className="col-span-12 md:col-span-4">
              <Tooltip orientation={orientation as any} content={orientation}>
                <Button fullWidth size="sm">
                  {orientation}
                </Button>
              </Tooltip>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export const VariantColorsTooltips = () => {
  return (
    <Box className="flex flex-wrap gap-2">
      <Tooltip content="primary" variantStyle="primary">
        <Button variantStyle="info-link">primary</Button>
      </Tooltip>
      <Tooltip content="secondary" variantStyle="secondary">
        <Button variantStyle="info-link">secondary</Button>
      </Tooltip>
      <Tooltip content="success" variantStyle="success">
        <Button variantStyle="info-link">success</Button>
      </Tooltip>
      <Tooltip content="danger" variantStyle="danger">
        <Button variantStyle="info-link">danger</Button>
      </Tooltip>
      <Tooltip content="warning" variantStyle="warning">
        <Button variantStyle="info-link">warning</Button>
      </Tooltip>
      <Tooltip content="dark" variantStyle="dark">
        <Button variantStyle="info-link">dark</Button>
      </Tooltip>
      <Tooltip content="info" variantStyle="info">
        <Button variantStyle="info-link">info</Button>
      </Tooltip>
    </Box>
  );
};

export const SizesTooltipes = () => {
  const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit eligendi ipsum numquam, rerum doloremque fugiat tempora dicta libero, asperiores quasi autem, delectus aperiam sequi explicabo doloribus expedita cupiditate veritatis.`;
  return (
    <Box css={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
      <Tooltip content={lorem} size="sm">
        <Button variantStyle="info-link">sm width</Button>
      </Tooltip>
      <Tooltip content={lorem} size="md">
        <Button variantStyle="info-link">md width</Button>
      </Tooltip>
      <Tooltip content={lorem} size="lg">
        <Button variantStyle="info-link">lg width</Button>
      </Tooltip>
      <Tooltip content={lorem} size="auto">
        <Button variantStyle="info-link">auto</Button>
      </Tooltip>
    </Box>
  );
};

export const CustomStyle = () => {
  const customTooltipContent = (
    <Box
      className={twMerge(
        "animate-rotate-y flex items-center justify-center",
        "p-4 h-40 w-40 rounded-lg bg-blue-500"
      )}
    >
      <em className="text-white line-through text-center">
        My Custom Style 🎉🎊🪂
      </em>
    </Box>
  );

  return <Tooltip content={customTooltipContent}>Custom Style</Tooltip>;
};
