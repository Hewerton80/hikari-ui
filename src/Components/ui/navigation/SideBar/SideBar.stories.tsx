import React, { useState } from "react";
import { SideBar, SideBarItem } from ".";
import {
  VscOrganization,
  VscPerson,
  VscBook,
  VscGroupByRefType,
  VscTag,
  VscHome,
  VscPackage,
  VscArrowLeft,
  VscArrowRight,
} from "react-icons/vsc";
import { Box } from "../../layout/Box";
import { IconButton } from "../../forms/IconButton";

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
  const [isCollapsed, setIsCollapsed] = useState(false);

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
    <Box css={{ display: "flex", width: "100%", minHeight: "100vh", gap: 8 }}>
      <SideBar collapsed={isCollapsed}>
        <SideBar.Menu items={items} />
      </SideBar>
      <IconButton
        onClick={() => setIsCollapsed(!isCollapsed)}
        icon={isCollapsed ? <VscArrowRight /> : <VscArrowLeft />}
      />
    </Box>
  );
};
