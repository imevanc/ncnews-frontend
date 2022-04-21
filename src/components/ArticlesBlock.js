import Container from "@mui/material/Container";
import React, { useState, useEffect } from "react";
import ArticleLargeView from "./ArticleLargeView";
import Grid from "@mui/material/Grid";
import LinearProgressWithColor from "./LinearProgressWithColor";
import * as api from "../api";
import { useParams, useLocation } from "react-router-dom";
import ErrorCard from "./ErrorCard";

const ArticlesBlock = (props) => {
  const params = useParams();
  const [error, setError] = useState(null);
  const topic = props.topic ? props.topic : params.topic;
  const [articles, setArticles] = useState([]);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const order = searchParams.get("order");
  const sortBy = searchParams.get("sort_by");
  const tab = topic === "all" ? null : topic;

  useEffect(() => {
    const fetchArticles = async (tab, sortBy, order) => {
      return api
        .getArticles(tab, sortBy, order)
        .then((res) => {
          return res;
        })
        .then((fetchedArticles) => {
          setArticles(fetchedArticles.articles);
          setError(null);
        });
    };
    fetchArticles(tab, sortBy, order).catch((error) =>
      setError("Non Existent Articles Error")
    );
  }, [tab, sortBy, order]);
  if (error) {
    <ErrorCard msg={error} />;
  }
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
