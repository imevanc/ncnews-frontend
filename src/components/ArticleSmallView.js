import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ArticleSmallView = () => {
  return (
    <Grid item xs={5} sm={2} md={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5">
            Article Title
          </Typography>
          <Typography>Article Body</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" align="center">
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ArticleSmallView;
