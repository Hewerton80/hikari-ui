import React from "react";
import { Card } from ".";
import { Grid } from "../../../ui/layout/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "layout/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />
const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Voluptates ullam quod, modi accusamus exercitationem molestiae voluptas 
quas tempore eum alias sapiente pariatur consequatur ratione, 
assumenda dolore maiores magnam? In, cupiditate!
`;
export const ImageCard = () => {
  const imgs = [
    "https://static.escolakids.uol.com.br/2019/07/paisagem-natural.jpg",
    "https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg",
  ];
  return (
    <Grid gap={32}>
      {imgs.map((img, i) => (
        <Grid.Col span={{ base: 12, md: 6 }} key={img}>
          <Card>
            <Card.Img src={img} alt={String(i)} />
            <Card.Body>
              <p>{lorem}</p>
            </Card.Body>
            <Card.Footer>
              <Card.Link asChild>
                <a href="/#">Read More</a>
              </Card.Link>
            </Card.Footer>
          </Card>
        </Grid.Col>
      ))}
      {imgs.map((img, i) => (
        <Grid.Col span={{ base: 12, md: 6 }} key={img}>
          <Card key={img}>
            <Card.Body>
              <p>{lorem}</p>
            </Card.Body>
            <Card.Footer variantStyle="center">
              <Card.Link asChild>
                <a href="/#">Read More</a>
              </Card.Link>
            </Card.Footer>
            <Card.Img variantStyle="bottom" src={img} alt={String(i)} />
          </Card>
        </Grid.Col>
      ))}
      {imgs.map((img, i) => (
        <Grid.Col span={{ base: 12, md: 6 }} key={img}>
          <Card key={img}>
            <Card.Img variantStyle="top" src={img} alt={String(i)} />
            <Card.Body>
              <p>{lorem}</p>
            </Card.Body>
            <Card.Footer variantStyle="right">
              <Card.Link asChild>
                <a href="/#">Read More</a>
              </Card.Link>
            </Card.Footer>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export const ColorsCard = () => {
  const variantColorCard = [
    "Default",
    "Primary",
    "Success",
    "Secondary",
    "Info",
    "Danger",
    "Dark",
    "Warning",
  ];

  return (
    <Grid gap={32}>
      {variantColorCard.map((variant) => (
        <Grid.Col span={{ base: 12, md: 6 }} key={variant}>
          <Card variantStyle={variant.toLowerCase() as any}>
            <Card.Header>
              <Card.Title>{variant}</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>{lorem}</p>
            </Card.Body>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};
