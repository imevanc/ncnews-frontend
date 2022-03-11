import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { useLocation } from "react-router-dom";
import * as api from "../api";
import LinearProgressWithColor from "./LinearProgressWithColor";

const ArticleCard = () => {
  const [commentsBody, setCommentsBody] = useState("");
  const ourTheme = useContext(ThemeContext);
  const location = useLocation();
  const article = location.state.article;
  useEffect(() => {
    const fetchCommentsByArticleId = async (article_id) => {
      await api
        .getCommentsByArticleId(article_id)
        .then((res) => {
          return res.comments;
        })
        .then((comments) => {
          const newCommentsBody = comments;
          setCommentsBody(newCommentsBody);
        });
    };
    fetchCommentsByArticleId(article.article_id).catch((error) =>
      console.log(error)
    );
  }, [article.article_id]);

  let evalLengthOfComments = Object.keys(commentsBody).length;
  return (
    <Container maxWidth="xl">
      <Grid>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flexGrow: 1, align: "center" }}>
            <Typography gutterBottom variant="h6" component="h2">
              {article.title}
            </Typography>
            <Typography sx={{ align: "right" }}>
              {article.created_at.split("T")[0].split("-").reverse().join("-")}{" "}
              by {article.author}
            </Typography>
            <Typography>
              {evalLengthOfComments ? (
                [commentsBody.article_id, commentsBody.body, article.article_id]
              ) : (
                <LinearProgressWithColor />
              )}
            </Typography>
          </CardContent>
          {/* <CardActions sx={{ display: "flex", justifycontent: "space-between" }}>
          <Button
            component={Link}
            to="/article"
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
        </CardActions> */}
        </Card>
      </Grid>
    </Container>
  );
};

export default ArticleCard;
