import React from "react";

import { Spinner } from "./Spinner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Feedback/Spinner",
  component: Spinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

export const Example = () => {
  return (
    <div>
      <Spinner />
    </div>
  );
};
