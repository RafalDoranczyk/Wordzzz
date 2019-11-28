export const theme = {
  colors: {
    white: "#F4F6FE",
    darkWhite: "#E3E5ED",
    red: "#cb7775",
    lightGreen: "#2ECC40",
    lightRed: "#FF4136",
    green: "#1a936f",
    warning: "#a94442",
    warningBox: "#f2dede",
    info: "#8a6d3b",
    infoBox: "#fcf8e3",
    success: "#3c763d",
    successBox: "#dff0d8",
    // black colors
    black: "#292B33",
    lightBlack: "#2E323B",
    lightestBlack: "#6d6f88",
    // database section colors
    blue: "#4770e1",
    lightBlue: "#698EF0",
    navyBlue: "#100e17",
    yellow: "#D0B92D",
    gray: "#c2c2c2"
  },
  queries: {
    smartphone_basic: "min-width: 320px",
    smartphone_landscape: "min-width: 460px",
    smartphone_lg: "min-width: 640px",
    tablet: "",
    iPad: "(width: 768px) and (height: 1024px)",
    iPadPro: "(width: 1024px) and (height: 1366px)",
    tablet_lg: "min-width: 1024px",
    desktop_sm: "min-width: 1280px",
    desktop_md: "min-width: 1600px",
    dekstop_lg: "min-width: 1900px"
  },
  mixins: {
    flex_center: "display: flex; justify-content: center; align-items: center",
    grid_gap: gap => `display: grid; gap: ${gap}px`
  }
};
