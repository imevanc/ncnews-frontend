import "./App.css";
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
import LinearProgressWithColor from "./components/LinearProgressWithColor";
import ArticlesByTopic from "./components/ArticlesByTopic";

const App = () => {
  const [ourMode, setOurMode] = useState("light");
  const ourTheme = Theme(ourMode);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const fetchTopics = async () => {
      return api
        .getTopics()
        .then((res) => {
          return res;
        })
        .then((topics) => {
          const newTopics = topics.topics.map((aTopic) => aTopic.slug);
          setTopics(newTopics);
        });
    };
    fetchTopics().catch((error) => console.log(error));
  }, []);
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ ourTheme }}>
        <ThemeProvider theme={ourTheme}>
          <CssBaseline />
          <Header ourMode={ourMode} setOurMode={setOurMode} />
          <NavBar topics={topics} />
          <Routes>
            <Route
              path="/"
              element={
                topics.length ? (
                  <ArticlesBlock topics={topics} />
                ) : (
                  <LinearProgressWithColor />
                )
              }
            />
            {topics.map((topic, idx) => {
              return (
                <Route
                  key={idx}
                  path={`/${topic}`}
                  element={<ArticlesByTopic topic={topic} />}
                />
              );
            })}
          </Routes>
          <Footer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
