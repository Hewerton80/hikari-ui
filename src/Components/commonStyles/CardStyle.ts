import { colors } from "../../styles/colors";
import { CSS } from "../../styles/theme";
import { spaces } from "../../styles/spaces";

export const cardStyle: CSS = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: spaces["1.5"],
  overflow: "hidden",
  color: colors.black,
  backgroundColor: colors.white,
  borderWidth: spaces["0.25"],
  borderStyle: "solid",
};
