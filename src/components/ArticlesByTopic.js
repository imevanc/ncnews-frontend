import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import ArticleLargeView from "./ArticleLargeView";
import Grid from "@mui/material/Grid";
import LinearProgressWithColor from "./LinearProgressWithColor";
import * as api from "../api";
import { useLocation } from "react-router-dom";

const ArticlesByTopic = () => {
  const location = useLocation();
  const topic = location.state;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticlesByTopic = async (aTopic) => {
      return api
        .getArticlesByTopic(aTopic)
        .then((res) => {
          console.log(res.articles);
          return res;
        })
        .then((fetchedArticles) => {
          setArticles(fetchedArticles.articles);
        });
    };
    fetchArticlesByTopic(topic).catch((error) => console.log(error));
  }, [topic]);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        {articles.length ? (
          articles.map((anArticle, idx) => {
            return <ArticleLargeView article={anArticle} key={idx} />;
          })
        ) : (
          <LinearProgressWithColor />
        )}
      </Grid>
    </Container>
  );
};

export default ArticlesByTopic;
