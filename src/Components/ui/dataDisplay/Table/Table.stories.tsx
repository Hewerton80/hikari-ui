import React from "react";
import { Table } from ".";
import { Avatar } from "../Avatar";
import { format } from "date-fns";
import { Badge } from "../Badge";
import { IconButton } from "../../forms/IconButton";
import { FaPen, FaRegEye, FaTrash } from "react-icons/fa";
import { Box } from "../../layout/Box";
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
  const users = [
    {
      id: "bffd973e-3d4f-4c6d-8bf5-ea2b16a8e2fe",
      firstName: "Hilton",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/324.jpg",
      birthDate: "2022-04-22T07:26:46.692Z",
      job: "Principal Accounts Specialist",
      lastName: "Glover",
    },
    {
      id: "9985bf0b-40b4-4a60-a259-f3a37677c13d",
      firstName: "Adelia",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/557.jpg",
      birthDate: "2022-10-27T16:46:28.593Z",
      job: "Dynamic Accounts Producer",
      lastName: "Green",
    },
    {
      id: "7f63b982-405a-4472-bf12-33d4e04fd901",
      firstName: "Carli",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1017.jpg",
      birthDate: "2022-06-03T01:01:51.596Z",
      job: "Direct Division Director",
      lastName: "Hayes",
    },
    {
      id: "65b8d356-91ff-43f9-9ce6-35c103ab6324",
      firstName: "Claudie",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/251.jpg",
      birthDate: "2022-12-06T21:02:20.335Z",
      job: "Central Solutions Administrator",
      lastName: "Konopelski",
    },
    {
      id: "cae66a87-d01a-4e8f-a919-4c4fc49d1ffb",
      firstName: "Carli",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/655.jpg",
      birthDate: "2022-08-05T07:48:00.630Z",
      job: "District Communications Engineer",
      lastName: "Witting",
    },
    {
      id: "ca549f16-2c1f-4513-8f95-e8b7eae83830",
      firstName: "Shaun",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/237.jpg",
      birthDate: "2023-02-18T22:50:25.152Z",
      job: "Forward Program Facilitator",
      lastName: "Heaney",
    },
    {
      id: "6b589a0e-9b8c-47ca-a6a1-bfbcfd49ce96",
      firstName: "Elliot",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
      birthDate: "2023-02-05T15:22:39.189Z",
      job: "Direct Functionality Facilitator",
      lastName: "Kovacek",
    },
    {
      id: "e1ed01e3-c791-49fe-89d3-705047ca3cf4",
      firstName: "Connie",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/255.jpg",
      birthDate: "2023-03-21T07:06:29.254Z",
      job: "Senior Tactics Officer",
      lastName: "Howe",
    },
    {
      id: "32440b9d-d617-455c-b506-02f30da96d54",
      firstName: "Queenie",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/153.jpg",
      birthDate: "2022-11-13T00:38:18.385Z",
      job: "Principal Data Consultant",
      lastName: "Heidenreich",
    },
    {
      id: "02193a0e-c217-4885-a015-d07d444f64fa",
      firstName: "Fletcher",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/505.jpg",
      birthDate: "2022-11-18T07:04:13.860Z",
      job: "Internal Markets Planner",
      lastName: "Roob",
    },
  ];

  return (
    <Table.Container>
      <Table>
        <Table.Head>
          <Table.Roll>
            <Table.HeadCell> </Table.HeadCell>
            <Table.HeadCell> Name </Table.HeadCell>
            <Table.HeadCell> Job </Table.HeadCell>
            <Table.HeadCell> status </Table.HeadCell>
            <Table.HeadCell> Birth Date </Table.HeadCell>
            <Table.HeadCell> </Table.HeadCell>
          </Table.Roll>
        </Table.Head>
        <Table.Body>
          {users.map(
            ({ firstName, lastName, avatar, job, id, birthDate }, i) => (
              <Table.Roll key={id}>
                <Table.Data>
                  <Avatar
                    src={avatar}
                    alt={firstName}
                    nameInities={[firstName[0], lastName[0]]}
                  />
                </Table.Data>
                <Table.Data>
                  {firstName} {lastName}
                </Table.Data>
                <Table.Data>{job}</Table.Data>
                <Table.Data>
                  <Badge variantStyle={i % 2 ? "success" : "danger"}>
                    {i % 2 ? "Active" : "Pending"}
                  </Badge>
                </Table.Data>
                <Table.Data>
                  {format(new Date(birthDate), "dd/MM/yyyy")}
                </Table.Data>
                <Table.Data>
                  <Box
                    css={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton
                      variantStyle="primary"
                      icon={<FaPen />}
                      size="sm"
                    />
                    <IconButton icon={<FaRegEye />} size="sm" />
                    <IconButton
                      variantStyle="danger"
                      icon={<FaTrash />}
                      size="sm"
                    />
                  </Box>
                </Table.Data>
              </Table.Roll>
            )
          )}
        </Table.Body>
      </Table>
    </Table.Container>
  );
};
