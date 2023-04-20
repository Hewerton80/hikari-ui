import React from "react";
import { AppBar } from ".";
import { FaBars } from "react-icons/fa";
import { Box } from "../../layout/Box";
import { Avatar } from "../../dataDisplay/Avatar";
import { Dropdown } from "../../overlay/Dropdown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "navigation/AppBar",
  component: AppBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const AppBarWithMenu = () => {
  return (
    <AppBar>
      <AppBar.Tool css={{ justifyContent: "space-between" }}>
        <Box as="span" css={{ display: "flex", cursor: "pointer" }}>
          <FaBars size={20} color="#ffffff" />
        </Box>
        <Box css={{ display: "flex" }}>
          <Dropdown>
            <Dropdown.Toogle>
              <Avatar
                src="https://github.com/hewerton80.png"
                nameInities={["h", "a"]}
              />
            </Dropdown.Toogle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <a href="/#">Profile</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/#">Account</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/#">Logout</a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Box>
      </AppBar.Tool>
    </AppBar>
  );
};
