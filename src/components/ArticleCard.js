import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import LinearProgressWithColor from "./LinearProgressWithColor";
import VoteIcon from "./VoteIcon";
import CardActions from "@mui/material/CardActions";

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
    <Container maxWidth="xl">
      <Card
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
          <Box
            sx={{
              padding: "5px 15px",
            }}
          >
            <Box sx={{ color: "text.secondary" }}>
              Total Votes: {article.votes}
            </Box>
            <VoteIcon article={article} votes={article.votes} />
          </Box>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ArticleCard;
