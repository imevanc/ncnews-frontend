import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Theme from "./theme/Theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { ThemeContext } from "./theme/ThemeContext";

const App = () => {
  const [ourMode, setOurMode] = useState("light");
  const ourTheme = Theme(ourMode);

  return (
    <ThemeContext.Provider value={{ ourTheme }}>
      <ThemeProvider theme={ourTheme}>
        <CssBaseline />
        <Header ourMode={ourMode} setOurMode={setOurMode} />
        <Main />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
