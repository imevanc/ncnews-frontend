import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ArticleSmallView from "./ArticleSmallView";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const Trending = () => {
  const ourTheme = useContext(ThemeContext);
  return (
    <>
      <Container maxWidth="xl">
        <DialogTitle
          style={{
            backgroundColor: ourTheme.ourTheme.palette.primary.main,
            color: ourTheme.ourTheme.palette.text.main,
          }}
        >
          <Typography
            sx={{
              fontSize: ourTheme.ourTheme.palette.typography.fontSize,
            }}
            type="title"
            color="inherit"
          >
            Trending
          </Typography>
        </DialogTitle>
        <Grid
          label="Trending"
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
    </>
  );
};

export default Trending;
