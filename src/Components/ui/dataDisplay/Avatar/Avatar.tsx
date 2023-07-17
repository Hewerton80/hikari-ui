import React from "react";
import * as Styled from "./Avatar.styles";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { GlobalProps } from "../../../../types/GlobalProps";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import classNames from "classnames";

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
      className={classNames(
        addClasseNamePrefix("avatar-root"),
        Styled.Root({ css }),
        className
      )}
      {...restProps}
    >
      {src && (
        <RadixAvatar.Image className={Styled.Image()} src={src} alt={alt} />
      )}
      <RadixAvatar.Fallback className={Styled.Fallback()}>
        {nameInities.join("")}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}
