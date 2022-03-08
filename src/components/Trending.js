import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ArticleSmallView from "./ArticleSmallView";
import DialogTitle from "@mui/material/DialogTitle";

const Trending = () => {
  return (
    <>
      <Container maxWidth="xl">
        <DialogTitle>Trending</DialogTitle>
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
