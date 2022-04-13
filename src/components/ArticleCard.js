import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import LinearProgressWithColor from "./LinearProgressWithColor";
import VoteIcon from "./VoteIcon";
import CardActions from "@mui/material/CardActions";
import Comments from "./Comments";
import Paper from "@mui/material/Paper";

const ArticleCard = () => {
  const [article, setArticle] = useState("");

  const article_id = useParams();
  useEffect(() => {
    const fetchArticleByArticleId = async (article_id) => {
      await api
        .getArticleByArticleId(article_id)
        .then((res) => {
          return res.article;
        })
        .then((fetchedArticle) => {
          const newArticle = fetchedArticle;
          setArticle(newArticle);
        });
    };

    fetchArticleByArticleId(article_id.article_id).catch((error) =>
      console.log(error)
    );
  }, [article_id.article_id]);

  const evalLengthOfArticle = Object.keys(article).length;
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "10px" }}>
      <Card
        component={Paper}
        elevation={10}
        bgcolor="grey"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flexGrow: 1, align: "center" }}>
          <Typography gutterBottom variant="h6" component="h2">
            {evalLengthOfArticle ? (
              <div>{article.title}</div>
            ) : (
              <LinearProgressWithColor />
            )}
          </Typography>
          <Typography sx={{ align: "right" }} component="div">
            {evalLengthOfArticle ? (
              <div>
                {article.created_at
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")}{" "}
                by {article.author}
              </div>
            ) : (
              <LinearProgressWithColor />
            )}
          </Typography>
          <Typography component="div">
            {evalLengthOfArticle ? (
              <dl>
                <dt>Article ID: {article.article_id}</dt>
                <dt>Article Body: {article.body}</dt>
              </dl>
            ) : (
              <LinearProgressWithColor />
            )}
          </Typography>
        </CardContent>
        <CardActions>
          {evalLengthOfArticle ? (
            <VoteIcon votes={article.votes} article_id={article.article_id} />
          ) : (
            <LinearProgressWithColor />
          )}
        </CardActions>
        <CardContent sx={{ flexGrow: 1, align: "center" }}>
          {evalLengthOfArticle ? (
            <Comments article_id={article.article_id} />
          ) : (
            <LinearProgressWithColor />
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default ArticleCard;
