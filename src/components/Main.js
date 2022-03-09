import LinearProgressWithColor from "./LinearProgressWithColor";

import Weather from "./Weather";
import Trending from "./Trending";
import ArticlesBlock from "./ArticlesBlock";
import { useState, useEffect } from "react";
import * as api from "../api";

const Main = () => {
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
    <main>
      <Weather />
      <Trending />
      {topics.length ? (
        <ArticlesBlock topics={topics} />
      ) : (
        <LinearProgressWithColor />
      )}
    </main>
  );
};

export default Main;
