const CLASSNAME_PREFIX = "hikari";

export const addClasseNamePrefix = (className: string) =>
  `${CLASSNAME_PREFIX}-${className}`;
