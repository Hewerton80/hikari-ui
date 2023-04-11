import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Grid } from ".";
import { Box } from "../../../ui/layout/Box";
import { Text } from "../../../ui/typography/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "layout/Grid",
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Grid>;

export const BasicBrid = () => {
  const innerBoxCss = {
    display: "flex",
    backgroundColor: "#76838f",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  };
  const textCss = { color: "#fff" };
  return (
    <Box
      css={{
        width: 780,
        padding: 16,
        borderRadius: 10,
        backgroundColor: "#000",
      }}
    >
      <Grid columnGap={16} rowGap={16}>
        <Grid.Col span={{ base: 8 }}>
          <Box css={innerBoxCss}>
            <Text css={textCss}>base=8</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 4 }}>
          <Box css={innerBoxCss}>
            <Text css={textCss}>base=4</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 4 }}>
          <Box css={innerBoxCss}>
            <Text css={textCss}>base=4</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 8 }}>
          <Box css={innerBoxCss}>
            <Text css={textCss}>base=8</Text>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export const GridWithMultipleBreakpoints = () => {
  const innerBoxCss = {
    display: "flex",
    backgroundColor: "#76838f",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  };
  const textCss = { color: "#fff" };
  return (
    <Box
      css={{
        width: 780,
        padding: 16,
        borderRadius: 10,
        backgroundColor: "#000",
      }}
    >
      <Grid columnGap={16} rowGap={16}>
        <Grid.Col span={{ base: 6, md: 8 }}>
          <Box css={innerBoxCss}>
            <Text css={textCss}>base=6 md=8</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 4 }}>
          <Box css={innerBoxCss}>
            <Text css={textCss}>base=6 md=4</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 4 }}>
          <Box css={innerBoxCss}>
            <Text css={textCss}>base=6 md=4</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 8 }}>
          <Box css={innerBoxCss}>
            <Text css={textCss}>base=6 md=8</Text>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
