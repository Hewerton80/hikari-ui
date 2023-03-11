import React from "react";

interface ClickOutsideProps extends GlobalProps {
  onClickOutSide?: () => void;
}

export function ClickOutside({ children, onClickOutSide }: ClickOutsideProps) {
  const elementRef = React.useRef();

  const handleClickOutside = React.useCallback(
    (event: any) => {
      if (event.target?.contains(elementRef.current)) {
        onClickOutSide?.();
      }
    },
    [onClickOutSide]
  );

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return <div ref={elementRef}>{children}</div>;
}
