import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Theme from "./theme/Theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

const App = () => {
  const [ourMode, setOurMode] = useState("dark");
  const ourTheme = Theme(ourMode);

  return (
    <ThemeProvider theme={ourTheme}>
      <CssBaseline />
      <Header ourMode={ourMode} setOurMode={setOurMode} />
      <Main />
    </ThemeProvider>
  );
};

export default App;
