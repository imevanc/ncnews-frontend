import Container from "@mui/material/Container";
import React, { useState, useEffect } from "react";
import ArticleLargeView from "./ArticleLargeView";
import Grid from "@mui/material/Grid";
import LinearProgressWithColor from "./LinearProgressWithColor";
import * as api from "../api";

const ArticlesBlock = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      return api
        .getArticles()
        .then((res) => {
          return res;
        })
        .then((fetchedArticles) => {
          setArticles(fetchedArticles.articles);
        });
    };
    fetchArticles().catch((error) => console.log(error));
  }, []);

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

export default ArticlesBlock;
