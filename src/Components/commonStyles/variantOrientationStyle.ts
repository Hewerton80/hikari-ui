type OrientationType =
  | "left"
  | "right"
  | "top-start"
  | "top-center"
  | "top-right"
  | "bottom-start"
  | "bottom-center"
  | "bottom-right";

export type AligneType = "start" | "center" | "end";
export type SideType = "top" | "right" | "bottom" | "left";
type AvaliableOrientations = {
  [Property in OrientationType]: {
    align: AligneType;
    side: SideType;
  };
};

export const orientationStyle: AvaliableOrientations = {
  "top-start": { align: "start", side: "top" },
  "top-center": { align: "center", side: "top" },
  "top-right": { align: "end", side: "top" },
  left: { align: "start", side: "left" },
  right: { align: "start", side: "right" },
  "bottom-start": { align: "start", side: "bottom" },
  "bottom-center": { align: "center", side: "bottom" },
  "bottom-right": { align: "end", side: "bottom" },
};
