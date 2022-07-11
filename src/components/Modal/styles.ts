import { styled } from "@stitches/react";

export const Overlay = styled("div", {
  position: "fixed",
  width: "100vw",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  top: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  transition: "opacity 0.3s ease, max-width 0s ease",

  variants: {
    visible: {
      true: {
        maxWidth: "100vw",
        opacity: 1,
      },

      false: {
        opacity: 0,
        maxWidth: -0,
      },
    },

    type: {
      sideLeft: {
        justifyContent: "flex-start",
      },

      center: {
        justifyContent: "center",
        alignItems: "center",
      },

      sideRight: {
        justifyContent: "flex-end",
      },
    },
  },
});

export const Container = styled("div", {
  backgroundColor: "white",
  height: "100vh",
  width: "523px",
  padding: "2rem 2rem",
  zIndex: 12,
  boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.6s ease, visibility 0.1s ease",

  variants: {
    visible: {
      true: { visibility: "visible" },
      false: { visibility: "hidden" },
    },

    type: {
      sideLeft: {},

      center: {
        height: "fit-content",
      },

      sideRight: {},
    },
  },

  compoundVariants: [
    {
      type: "sideLeft",
      visible: "false",
      css: {
        transform: "translateX(-100%)",
      },
    },

    {
      type: "sideLeft",
      visible: "true",
      css: {
        transform: "translateX(-0%)",
      },
    },

    {
      visible: "false",
      type: "sideRight",
      css: {
        transform: "translateX(100%)",
      },
    },

    {
      visible: "true",
      type: "sideRight",
      css: {
        transform: "translateX(0%)",
      },
    },

    {
      visible: "false",
      type: "center",
      css: {
        transform: "translateY(100%)",
      },
    },

    {
      visible: "true",
      type: "center",
      css: {
        transform: "translateY(0%)",
      },
    },
  ],
});

export const Content = styled("main", {});
