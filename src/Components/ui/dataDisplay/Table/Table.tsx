import React from "react";

import * as Styled from "./Table.styles";
import { GlobalProps } from "../../../../types/GlobalProps";
import { twMerge } from "tailwind-merge";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";

function Table({ className, css, children, ...restProps }: GlobalProps) {
  return (
    <table
      className={twMerge(
        addClasseNamePrefix("table"),
        Styled.Table({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </table>
  );
}
function TableContainer({
  className,
  css,
  children,
  ...restProps
}: GlobalProps) {
  return (
    <div
      className={twMerge(
        addClasseNamePrefix("table-container"),
        Styled.TableContainer({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}
function TableHead({ className, css, children, ...restProps }: GlobalProps) {
  return (
    <thead
      className={twMerge(
        addClasseNamePrefix("table-head"),
        Styled.TableHead({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </thead>
  );
}
function TableRoll({ className, css, children, ...restProps }: GlobalProps) {
  return (
    <tr
      className={twMerge(
        addClasseNamePrefix("table-rool"),
        Styled.TableRoll({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </tr>
  );
}
function TableHeadCell({
  className,
  css,
  children,
  ...restProps
}: GlobalProps) {
  return (
    <th
      className={twMerge(
        addClasseNamePrefix("table-head-cell"),
        Styled.TableHeadCell({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </th>
  );
}
function TableBody({ className, css, children, ...restProps }: GlobalProps) {
  return (
    <tbody
      className={twMerge(
        addClasseNamePrefix("table-body"),
        Styled.TableBody({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </tbody>
  );
}
function TableDate({ className, css, children, ...restProps }: GlobalProps) {
  return (
    <td
      className={twMerge(
        addClasseNamePrefix("table-data"),
        Styled.TableDate({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </td>
  );
}
Table.Head = TableHead;
Table.Container = TableContainer;
Table.Roll = TableRoll;
Table.HeadCell = TableHeadCell;
Table.Body = TableBody;
Table.Data = TableDate;

export { Table };
