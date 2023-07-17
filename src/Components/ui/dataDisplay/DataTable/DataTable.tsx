import React, { ReactNode } from "react";
import { Table } from "../Table";
import { GlobalProps } from "../../../../types/GlobalProps";
import classNames from "classnames";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";

export interface IColmunDataTable {
  field?: string;
  content: ReactNode;
}
export interface IRowDataTable {
  value: string;
  contents: ReactNode[];
}

export interface DataTableProps extends Omit<GlobalProps, "children"> {
  columns: IColmunDataTable[];
  rows: IRowDataTable[];
}

export function DataTable({
  columns,
  rows,
  className,
  ...restProps
}: DataTableProps) {
  return (
    <Table.Container
      className={classNames(addClasseNamePrefix("data-table"), className)}
      {...restProps}
    >
      <Table>
        <Table.Head>
          <Table.Roll>
            {columns.map((col, i) => (
              <Table.HeadCell key={`col-${i}`}>{col.content}</Table.HeadCell>
            ))}
          </Table.Roll>
        </Table.Head>
        <Table.Body>
          {rows.map((row, i) => (
            <Table.Roll key={`${row.value}-${i}`}>
              {row.contents.map((content, j) => (
                <Table.Data key={`${row.value}-${i}-${j}`}>
                  {content}
                </Table.Data>
              ))}
            </Table.Roll>
          ))}
        </Table.Body>
      </Table>
    </Table.Container>
  );
}
