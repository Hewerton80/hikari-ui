import React from "react";
import { Breadcrumbs, BreadcrumbLink } from ".";
import { Box } from "../../../ui/layout/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "navigation/Breadcrumbs",
  component: BreadcrumbLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />

export const BasicExample = () => {
  return (
    <Box css={{ display: "flex", flexDirection: "column", spaceY: "$2" }}>
      <Breadcrumbs>
        <Breadcrumbs.Link href="/#">Home</Breadcrumbs.Link>
      </Breadcrumbs>
      <Breadcrumbs>
        <Breadcrumbs.Link href="/#">Home</Breadcrumbs.Link>
        <Breadcrumbs.Link href="/#">Library</Breadcrumbs.Link>
      </Breadcrumbs>
      <Breadcrumbs>
        <Breadcrumbs.Link href="/#">Home</Breadcrumbs.Link>
        <Breadcrumbs.Link href="/#">Library</Breadcrumbs.Link>
        <Breadcrumbs.Link href="/#">Data</Breadcrumbs.Link>
      </Breadcrumbs>
    </Box>
  );
};
const CustomLink = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  return <a {...props}>{children}</a>;
};

export const AsChild = () => {
  return (
    <Box css={{ display: "flex", flexDirection: "column", spaceY: "$2" }}>
      <Breadcrumbs>
        <Breadcrumbs.Link href="/#" asChild>
          <CustomLink> Home </CustomLink>
        </Breadcrumbs.Link>
      </Breadcrumbs>
      <Breadcrumbs>
        <Breadcrumbs.Link href="/#" asChild>
          <CustomLink> Home </CustomLink>
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href="/#" asChild>
          <CustomLink> Library </CustomLink>
        </Breadcrumbs.Link>
      </Breadcrumbs>
      <Breadcrumbs>
        <Breadcrumbs.Link href="/#" asChild>
          <CustomLink> Home </CustomLink>
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href="/#" asChild>
          <CustomLink> Library </CustomLink>
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href="/#" asChild>
          <CustomLink> Data </CustomLink>
        </Breadcrumbs.Link>
      </Breadcrumbs>
    </Box>
  );
};
