import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ArticleLargeView from "./ArticleLargeView";
import Grid from "@mui/material/Grid";
import LinearProgressWithColor from "./LinearProgressWithColor";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
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
  }, []);
  return (
    <Container sx={{ py: 4 }} maxWidth="xl">
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
