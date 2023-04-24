import React from "react";
import { SideBar, SideBarItem } from ".";
import {
  VscOrganization,
  VscPerson,
  VscBook,
  VscGroupByRefType,
  VscTag,
  VscHome,
  VscPackage,
  VscOutput,
} from "react-icons/vsc";
import { Box } from "../../layout/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "navigation/SideBar",
  component: SideBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />
const CustomLink = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  return <a {...props}>{children}</a>;
};

export const SideBarWithMenu = () => {
  const items: SideBarItem[] = [
    {
      icon: <VscPackage />,
      text: "Courses",
      as: CustomLink,
      subItems: [
        { text: "CSS", href: "/#", as: CustomLink },
        { text: "HTML", href: "/#", as: CustomLink },
        { text: "Javascript", href: "/#", as: CustomLink },
      ],
    },
    { icon: <VscHome />, href: "/#", text: "Home" },
    { icon: <VscPerson />, href: "/#", text: "Users", as: CustomLink },
  ];
  return (
    <Box css={{ width: "100%", minHeight: "100vh" }}>
      <SideBar>
        <SideBar.Menu items={items} />
      </SideBar>
    </Box>
  );
};
