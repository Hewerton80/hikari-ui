import React from "react";

interface ClickOutsideProps extends Omit<GlobalProps, "children"> {
  children: (
    isOpen: boolean,
    setIsOpen: (open: boolean) => void
  ) => React.ReactNode;
}

export function ClickOutside({ children }: ClickOutsideProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const elementRef = React.useRef();

  const handleClickOutside = React.useCallback((event: any) => {
    if (event.target?.contains(elementRef.current)) {
      setIsOpen(false);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return <div ref={elementRef}>{children(isOpen, setIsOpen)}</div>;
}
