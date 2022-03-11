import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import ArticleLargeView from "./ArticleLargeView";
import Grid from "@mui/material/Grid";
import LinearProgressWithColor from "./LinearProgressWithColor";
import * as api from "../api";

const ArticlesByTopic = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async (aTopic) => {
      return api
        .getArticles(aTopic)
        .then((res) => {
          return res;
        })
        .then((fetchedArticles) => {
          setArticles([...fetchedArticles.articles]);
        });
    };
    fetchArticles(props.topic).catch((error) => console.log(error));
  }, [props.topic]);
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
