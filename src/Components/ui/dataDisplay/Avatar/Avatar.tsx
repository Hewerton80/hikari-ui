import React from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { GlobalProps } from "../../../../types/GlobalProps";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { twMerge } from "tailwind-merge";
export interface AvatarProps extends Omit<GlobalProps, "children"> {
  src?: string;
  alt?: string;
  nameInities?: [string] | [string, string];
}

export function Avatar({
  src,
  alt,
  nameInities = [""],
  className,
  css,
  ...restProps
}: AvatarProps) {
  return (
    <RadixAvatar.Root
      className={twMerge(
        addClasseNamePrefix("avatar-root"),
        "inline-flex items-center justify-center",
        "h-10 w-10 overflow-hidden rounded-full select-none align-middle",
        className
      )}
      {...restProps}
    >
      {src && (
        <RadixAvatar.Image
          className="h-full w-full object-cover rounded-[inherit]"
          src={src}
          alt={alt}
        />
      )}
      <RadixAvatar.Fallback
        className={twMerge(
          "flex items-center justify-center h-full w-full",
          "bg-white text-purple-500 font-bold uppercase"
        )}
      >
        {nameInities.join("")}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}
