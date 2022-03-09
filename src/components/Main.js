import LinearProgressWithColor from "./LinearProgressWithColor";

import Weather from "./Weather";
import Trending from "./Trending";
import ArticlesBlock from "./ArticlesBlock";
import { useState, useEffect } from "react";
import * as api from "../api";

let nextComponentArticlesBlock = null;
const Main = () => {
  const [topics, setTopics] = useState([]);
  if (topics.length) {
    nextComponentArticlesBlock = <ArticlesBlock topics={topics} />;
  } else {
    nextComponentArticlesBlock = <LinearProgressWithColor />;
  }
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
      {nextComponentArticlesBlock}
    </main>
  );
};

export default Main;
