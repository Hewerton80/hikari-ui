import React from "react";
import { Table } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DataDisplay/Table",
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const SimpleTable = () => {
  return (
    <Table>
      <Table.Head>
        <Table.Roll>
          <Table.HeadCell> Nome </Table.HeadCell>
          <Table.HeadCell> Email </Table.HeadCell>
        </Table.Roll>
      </Table.Head>
      <Table.Body>
        <Table.Roll>
          <Table.Data>Fulano</Table.Data>
          <Table.Data>Fulano@email.com</Table.Data>
        </Table.Roll>
        <Table.Roll>
          <Table.Data>Sicrano</Table.Data>
          <Table.Data>Sicrano@email.com</Table.Data>
        </Table.Roll>
        <Table.Roll>
          <Table.Data>Sicrano</Table.Data>
          <Table.Data>Sicrano@email.com</Table.Data>
        </Table.Roll>
        <Table.Roll>
          <Table.Data>Sicrano</Table.Data>
          <Table.Data>Sicrano@email.com</Table.Data>
        </Table.Roll>
      </Table.Body>
    </Table>
  );
};
