/// <reference types="react" />
interface ClickOutsideProps extends GlobalProps {
    onClickOutSide?: () => void;
}
export declare function ClickOutside({ children, css, onClickOutSide, ...restProps }: ClickOutsideProps): JSX.Element;
export {};
