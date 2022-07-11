import { styled } from "@stitches/react";
import { FiX } from "react-icons/fi";

export const Container = styled("header", {
  paddingBottom: "2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Label = styled("span", {});

export const CloseIcon = styled(FiX, {
  cursor: "pointer",
  height: 24,
  width: 24,
});
