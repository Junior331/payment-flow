import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  shadows: [
    "0px 3px 4px rgba(0, 0, 0, 0.1)",
    "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "0px 0px 13px 8px rgba(0, 0, 0, 0.22)",
  ],
  palette: {
    type: "dark",
    primary: {
      light: "#262561",
      main: "#121145",
      dark: "#0d0c2e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f7ad5e",
      main: "#F5850B",
      dark: "#794207",
      contrastText: "#fff",
    },
    text: {
      primary: "#121145",
      secondary: "#767182",
      disabled: "#E1DEE8",
    },
    background: {
      paper: "#f4f3f6",
      default: "#fff",
    },
    action: {
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
    error: {
      main: "#E56467",
    },
    warning: {
      main: "#ff9800",
    },
    success: {
      main: "#81c784",
    },
  },
  typography: {
    htmlFontSize: "16px",
    fontFamily: "DM Sans",
    fontSize: "14px",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "DM Sans",
      fontWeight: 500,
      fontSize: "1.4rem",
      lineHeight: 1.5,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: "DM Sans",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.2,
      letterSpacing: "-0.01562em",
    },
    body1: {
      fontFamily: "DM Sans",
      fontWeight: 300,
      fontSize: "0.8rem",
      lineHeight: 1,
      letterSpacing: "-0.01562em",
    },
    body2: {
      fontFamily: "DM Sans",
      fontWeight: 300,
      fontSize: "0.8rem",
      lineHeight: 1,
      letterSpacing: "-0.01562em",
    },
    button: {
      fontFamily: "DM Sans",
      fontWeight: 300,
      fontSize: "1rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    input: {
      fontFamily: "DM Sans",
      fontWeight: 400,
      fontSize: "1.2rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    label: {
      fontFamily: "DM Sans",
      fontWeight: 400,
      fontSize: "0.6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
  },
  shape: {
    borderRadius: "5px",
    padding: {
      smallest: "4px",
      small: "8px",
      medium: "12px",
      large: "16px",
      huge: "24px",
    },
    margin: {
      smallest: "4px",
      small: "8px",
      medium: "12px",
      large: "16px",
      huge: "24px",
    },
  },
};

export default Theme;
