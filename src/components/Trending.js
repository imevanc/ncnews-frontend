import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ArticleSmallView from "./ArticleSmallView";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const Trending = () => {
  const ourTheme = useContext(ThemeContext);
  return (
    <Container sx={{ padding: "50px 15px" }} maxWidth="xl">
      <AppBar
        position="static"
        sx={{ backgroundColor: ourTheme.ourTheme.palette.primary.main }}
      >
        <Container maxWidth="xl">
          <Typography
            sx={{
              fontSize: ourTheme.ourTheme.palette.typography.fontSize,
              color: ourTheme.ourTheme.palette.text.main,
            }}
          >
            TRENDING
          </Typography>
        </Container>
      </AppBar>
      <Grid
        label="TRENDING"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <ArticleSmallView />
        <ArticleSmallView />
        <ArticleSmallView />
        <ArticleSmallView />
      </Grid>
    </Container>
  );
};

export default Trending;
