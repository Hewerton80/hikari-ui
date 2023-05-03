import React from "react";
import { Dropdown } from ".";
import { Button } from "../../forms/Button";
import { Grid } from "../../../ui/layout/Grid";
import { Box } from "../../layout/Box";
import { IconButton } from "../../forms/IconButton";
import { BiDotsVerticalRounded } from "react-icons/bi";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "overlay/Dropdown",
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Example = () => {
  const menuItens = ["Action", "Another action", "Something else"];
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Box>
        <Dropdown>
          <Dropdown.Toogle asChild>
            <Button> Dropdown</Button>
          </Dropdown.Toogle>
          <Dropdown.Menu>
            {menuItens.map((item) => (
              <Dropdown.Item key={item} asChild>
                <p>{item}</p>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Box>
      <Box>
        <Dropdown>
          <Dropdown.Toogle asChild>
            <IconButton icon={<BiDotsVerticalRounded />} />
          </Dropdown.Toogle>
          <Dropdown.Menu>
            {menuItens.map((item) => (
              <Dropdown.Item key={item} asChild>
                <p>{item}</p>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Box>
    </Box>
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
                {/* rightIcon={<IoMdArrowDropdown />} */}
                <Button fullWidth size="sm">
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
