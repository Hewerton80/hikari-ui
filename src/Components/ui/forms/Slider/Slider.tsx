import React, { AriaAttributes } from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import * as Style from "./Slider.styles";
import { twMerge } from "tailwind-merge";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { GlobalProps } from "../../../../types/GlobalProps";

export interface SliderRootProps extends GlobalProps {
  defaultValue?: number[];
  value?: number[];
  name?: string;
  disabled?: boolean;
  orientation?: AriaAttributes["aria-orientation"];
  min?: number;
  max?: number;
  step?: number;
  minStepsBetweenThumbs?: number;
  inverted?: boolean;
  onValueChange?: (value: number[]) => void;
  onValueCommit?: (value: number[]) => void;
}

function Slider({ children, css, className, ...restProps }: SliderRootProps) {
  return (
    <RadixSlider.Root
      // className="relative flex items-center select-none touch-none w-[200px] h-5"
      className={twMerge(
        addClasseNamePrefix("slider"),
        Style.SliderRoot({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </RadixSlider.Root>
  );
}

function SliderTrack({ children, className, css, ...restProps }: GlobalProps) {
  return (
    <RadixSlider.Track
      // className="bg-blackA10 relative grow rounded-full h-[3px]"
      className={twMerge(
        addClasseNamePrefix("slider-track"),
        Style.SliderTrack({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </RadixSlider.Track>
  );
}

function SliderRange({
  className,
  css,
  ...restProps
}: Omit<GlobalProps, "children">) {
  return (
    <RadixSlider.Range
      // className="absolute bg-white rounded-full h-full"
      className={twMerge(
        addClasseNamePrefix("slider-range"),
        Style.SliderRange({ css }),
        className
      )}
      {...restProps}
    />
  );
}

function SliderThumb({
  className,
  css,
  ...restProps
}: Omit<GlobalProps, "children">) {
  return (
    <RadixSlider.Thumb
      // className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
      className={twMerge(
        addClasseNamePrefix("slider-thumb"),
        twMerge(Style.SliderThumb({ css })),
        className
      )}
      {...restProps}
    />
  );
}

Slider.Track = SliderTrack;
Slider.Range = SliderRange;
Slider.Thumb = SliderThumb;

export { Slider };
