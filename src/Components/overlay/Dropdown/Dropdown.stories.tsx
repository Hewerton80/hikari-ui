import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Dropdown } from ".";
import { Button } from "../../forms/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import { Grid } from "../../layout/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "overlay/Dropdown",
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Example = () => {
  const menuItens = ["Action", "Another action", "Something else"];
  return (
    <Dropdown>
      <Dropdown.Toogle>
        <Button rightIcon={<IoMdArrowDropdown />}> Dropdown</Button>
      </Dropdown.Toogle>
      <Dropdown.Menu>
        {menuItens.map((item) => (
          <Dropdown.Item key={item}>
            <p>{item}</p>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
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
  const menuItens = ["Action ", "Another action", "Something else Something"];
  return (
    <Grid gap={16} numCols={12}>
      {orientations.map((orientation, i) => (
        <React.Fragment key={orientation}>
          {i === 4 && <Grid.Col span={{ base: 12, md: 4 }} />}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Dropdown>
              <Dropdown.Toogle>
                <Button fullWidth size="sm" rightIcon={<IoMdArrowDropdown />}>
                  {orientation}
                </Button>
              </Dropdown.Toogle>
              <Dropdown.Menu orientation={orientation as any}>
                {menuItens.map((item) => (
                  <Dropdown.Item key={item}>
                    <p>{item}</p>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Col>
        </React.Fragment>
      ))}
    </Grid>
  );
};
