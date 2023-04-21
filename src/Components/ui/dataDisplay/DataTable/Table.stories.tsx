import React from "react";
import { DataTable, IColmunDataTable, IRowDataTable } from ".";
import { Avatar } from "../Avatar";
import { format } from "date-fns";
import { Badge } from "../Badge";
import { IconButton } from "../../forms/IconButton";
import { FaPen, FaRegEye, FaTrash } from "react-icons/fa";
import { Box } from "../../layout/Box";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DataDisplay/DataTable",
  component: DataTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const SimpleTable = () => {
  const users = [
    {
      id: "545fc770-e413-4445-9ac0-63a414cd612b",
      firstName: "Amparo",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/459.jpg",
      birthDate: "2022-12-18T00:28:03.826Z",
      job: "Corporate Identity Coordinator",
      lastName: "Swaniawski",
    },
    {
      id: "0834cd6c-0a26-4f15-9dd4-74e5e35df393",
      firstName: "Adriel",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/61.jpg",
      birthDate: "2022-06-03T14:47:51.724Z",
      job: "Investor Response Executive",
      lastName: "Pfeffer",
    },
    {
      id: "e93b4528-4c18-4aab-9e4e-75235d572d7b",
      firstName: "Tiffany",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/111.jpg",
      birthDate: "2023-01-10T06:01:46.567Z",
      job: "Future Infrastructure Specialist",
      lastName: "Corkery",
    },
    {
      id: "e1762467-b2ef-445a-84b6-a9c4e2aa4a1a",
      firstName: "Hillard",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/324.jpg",
      birthDate: "2023-01-27T20:19:57.418Z",
      job: "Future Implementation Director",
      lastName: "Streich",
    },
    {
      id: "5d99719b-0e93-4cd6-9b36-e8d1c355469e",
      firstName: "Melody",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/148.jpg",
      birthDate: "2022-10-26T03:53:40.415Z",
      job: "Corporate Operations Planner",
      lastName: "Wiza",
    },
    {
      id: "b8225f4c-6a76-4dd1-8576-d10eb2711990",
      firstName: "Ewald",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1199.jpg",
      birthDate: "2022-08-12T22:28:43.651Z",
      job: "National Creative Analyst",
      lastName: "Osinski",
    },
    {
      id: "2335db9d-0bd8-4711-893a-4e10fa53bb86",
      firstName: "Kenyatta",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/249.jpg",
      birthDate: "2022-10-31T07:41:40.121Z",
      job: "National Response Associate",
      lastName: "Goyette",
    },
    {
      id: "e72cb76c-2303-4550-8dee-ef9a6f967f36",
      firstName: "Travis",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/63.jpg",
      birthDate: "2022-07-14T17:19:19.804Z",
      job: "Dynamic Usability Orchestrator",
      lastName: "Nitzsche",
    },
    {
      id: "66e18fc2-13da-4ecc-82e1-c36a080fd920",
      firstName: "Noel",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/246.jpg",
      birthDate: "2022-10-08T08:34:05.532Z",
      job: "Global Configuration Director",
      lastName: "Hoeger",
    },
    {
      id: "d10506f1-ebe7-420e-8048-4e6ad01bfce7",
      firstName: "Oren",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/7.jpg",
      birthDate: "2022-09-24T10:51:50.676Z",
      job: "Direct Research Engineer",
      lastName: "Gaylord",
    },
  ];

  const columns: IColmunDataTable[] = [
    { field: "avatar", content: "" },
    { field: "name", content: "Name" },
    { field: "job", content: "Job" },
    { field: "status", content: "Status" },
    { field: "birthDate", content: "Birth Date" },
    { field: "", content: "" },
  ];

  const row: IRowDataTable[] = users.map(
    ({ id, avatar, birthDate, firstName, lastName, job }, i) => ({
      value: id,
      contents: [
        <Avatar
          src={avatar}
          alt={firstName}
          nameInities={[firstName[0], lastName[0]]}
        />,
        `${firstName} ${lastName}`,
        job,
        <Badge variantStyle={i % 2 ? "info" : "warning"}>
          {i % 2 ? "Active" : "Pending"}
        </Badge>,
        format(new Date(birthDate), "dd/MM/yyyy"),
        <Box
          css={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            justifyContent: "flex-end",
          }}
        >
          <IconButton variantStyle="primary" icon={<FaPen />} size="sm" />
          <IconButton icon={<FaRegEye />} size="sm" />
          <IconButton variantStyle="danger" icon={<FaTrash />} size="sm" />
        </Box>,
      ],
    })
  );

  return <DataTable columns={columns} rows={row} />;
};
