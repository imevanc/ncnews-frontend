import Container from "@mui/material/Container";
import React, { useState, useEffect } from "react";
import ArticleLargeView from "./ArticleLargeView";
import Grid from "@mui/material/Grid";
import LinearProgressWithColor from "./LinearProgressWithColor";
import * as api from "../api";

const ArticlesBlock = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async (aTopic) => {
      return api
        .getArticles(aTopic)
        .then((res) => {
          return res;
        })
        .then((fetchedArticles) => {
          setArticles((articles) => [...articles, ...fetchedArticles.articles]);
        });
    };
    props.topics.forEach((aTopic) =>
      fetchArticles(aTopic).catch((error) => console.log(error))
    );
  }, [props.topics]);
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
