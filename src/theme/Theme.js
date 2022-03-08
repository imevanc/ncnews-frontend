import { createTheme } from "@mui/material/styles";

const Theme = (ourMode) => {
  return createTheme({
    palette: {
      mode: ourMode,
      primary: {
        main: "#2e40a6",
      },
      secondary: {
        main: "#f50000",
      },
      text: {
        main: "white",
      },
      typography: {
        fontSize: "1.4rem",
      },
      button: {
        fontSize: "1.4rem",
        primary: {
          main: "white",
        },
      },
      expansionPanel: {
        primary: {
          main: "#F7F7F7",
        },
      },
    },
  });
};
export default Theme;
