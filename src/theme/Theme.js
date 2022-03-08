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
    },
  });
};
export default Theme;
