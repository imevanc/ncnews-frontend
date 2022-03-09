import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const ArticleLargeView = () => {
  const ourTheme = useContext(ThemeContext);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Article Title
          </Typography>
          <Typography align="right">created_at by username</Typography>
          <Typography align="left">Article Body</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            type="submit"
            sx={{
              fontSize: ourTheme.ourTheme.palette.button.smallFontSize,
              backgroundColor: ourTheme.ourTheme.palette.button.secondary.main,
            }}
            size="small"
          >
            View
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{
              fontSize: ourTheme.ourTheme.palette.button.smallFontSize,
              backgroundColor: ourTheme.ourTheme.palette.button.secondary.main,
            }}
            size="small"
          >
            Comments
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ArticleLargeView;
