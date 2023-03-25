/// <reference types="react" />
export interface PaginationBarProps extends GlobalProps {
    currentPage: number;
    totalPages: number;
    totalRecords: number;
    perPage: number;
    disabled?: boolean;
    hidden?: boolean;
    onChangePage: (toPage: number) => void;
}
export declare function PaginationBar({ className, totalPages, currentPage, totalRecords, perPage, disabled, hidden, onChangePage, ...rest }: PaginationBarProps): JSX.Element;
