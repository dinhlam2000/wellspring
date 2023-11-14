import { ChipOwnProps } from "@mui/material";

export function getChipColor(status: string): ChipOwnProps["color"] {
  if (status === "Visit completed") {
    return "info";
  } else if (status === "Started training") {
    return "success";
  } else if (status === "Missing documentation") {
    return "warning";
  } else {
    return "default";
  }
}
