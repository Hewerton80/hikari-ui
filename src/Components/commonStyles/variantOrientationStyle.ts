type OrientationType =
  | "left"
  | "right"
  | "top-start"
  | "top-center"
  | "top-right"
  | "bottom-start"
  | "bottom-center"
  | "bottom-right";

type AvaliableOrientations = {
  [Property in OrientationType]: {
    align: "start" | "center" | "end";
    side: "top" | "right" | "bottom" | "left";
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
