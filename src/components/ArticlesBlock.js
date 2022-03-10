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
  const pages = ["sort_by", "order", ...props.topics];
  const ourTheme = useContext(ThemeContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [articles, setArticles] = useState([]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
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
    <Container sx={{ padding: "50px 15px" }} maxWidth="xl">
      <AppBar
        position="static"
        sx={{
          backgroundColor: ourTheme.ourTheme.palette.primary.main,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        spacing: 10,
                        fontSize: ourTheme.ourTheme.palette.typography.fontSize,
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  size="small"
                  type="submit"
                  key={page}
                  onClick={handleCloseNavMenu}
                  // onClick={(event) => {
                  //   console.log(event.target.innerHTML);
                  // }}
                  sx={{
                    fontSize: ourTheme.ourTheme.palette.button.fontSize,
                    color: ourTheme.ourTheme.palette.button.primary.main,
                  }}
                >
                  <span value={page}>{page}</span>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
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
    </Container>
  );
};

export default ArticlesBlock;
