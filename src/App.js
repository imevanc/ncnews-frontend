import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticlesBlock from "./components/ArticlesBlock";
import Footer from "./components/Footer";
import Theme from "./theme/Theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import { ThemeContext } from "./theme/ThemeContext";
import * as api from "./api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleCard from "./components/ArticleCard";
import ErrorCard from "./components/ErrorCard";

const App = () => {
  const [ourMode, setOurMode] = useState("light");
  const ourTheme = Theme(ourMode);
  const [topics, setTopics] = useState(["all"]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      return api
        .getTopics()
        .then((res) => {
          return res;
        })
        .then((fetchedTopics) => {
          const newTopics = fetchedTopics.topics.map((aTopic) => aTopic.slug);
          setTopics((topics) => {
            return topics.length === 4
              ? ["all", ...newTopics]
              : [...topics, ...newTopics];
          });
          setError(null);
        });
    };
    fetchTopics().catch((error) => setError("Non Existent Topic Error"));
  }, []);
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ ourTheme }}>
        <ThemeProvider theme={ourTheme}>
          <CssBaseline />
          <Header ourMode={ourMode} setOurMode={setOurMode} />
          {error ? <ErrorCard msg={error} /> : <NavBar topics={topics} />}
          <Routes>
            <Route path="/" element={<ArticlesBlock topic={"all"} />} />
            <Route path="/topics/:topic" element={<ArticlesBlock />} />
            <Route path="/articles/:article_id" element={<ArticleCard />} />
            <Route
              path="*"
              element={<ErrorCard msg={"Non Existent Path Error"} />}
            />
          </Routes>
          <Footer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
