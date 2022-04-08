import Container from "@mui/material/Container";
import React, { useState, useEffect } from "react";
import ArticleLargeView from "./ArticleLargeView";
import Grid from "@mui/material/Grid";
import LinearProgressWithColor from "./LinearProgressWithColor";
import * as api from "../api";
import { useParams } from "react-router-dom";
import FiltersBar from "./FiltersBar";

const ArticlesBlock = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const tab = topic === "all" ? null : topic;

  useEffect(() => {
    const fetchArticles = async (tab) => {
      return api
        .getArticles(tab)
        .then((res) => {
          return res;
        })
        .then((fetchedArticles) => {
          setArticles(fetchedArticles.articles);
        });
    };
    fetchArticles(tab).catch((error) => console.log(error));
  }, [tab]);

  return (
    <Container maxWidth="xl" sx={{ paddingTop: "15px" }}>
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
