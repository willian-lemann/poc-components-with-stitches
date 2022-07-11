import { styled } from "@stitches/react";

export const Container = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Button = styled("button", {
  height: 45,
  marginTop: 10,
});

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: '100%',
});
