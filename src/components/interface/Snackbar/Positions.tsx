export const Positions = {
  "top-right": {
    top: "24px",
    right: "24px",
    bottom: "unset",
    left: "unset",
    align: "-webkit-right",
  },
  "top-left": {
    top: "24px",
    right: "unset",
    bottom: "unset",
    left: "24px",
    align: "-webkit-left",
  },
  "bottom-right": {
    top: "unset",
    right: "24px",
    bottom: "24px",
    left: "unset",
    align: "-webkit-right",
  },
  "bottom-left": {
    top: "unset",
    right: "unset",
    bottom: "24px",
    left: "24px",
    align: "-webkit-left",
  },
  "inherit": {
    top: "unset",
    right: "unset",
    bottom: "unset",
    left: "unset",
    align: "unset",
  },
};

export type positionType = keyof typeof Positions;