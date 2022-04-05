import { useEffect, useState } from "react";
import * as api from "../api";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Comments = (props) => {
  const [comment, setComment] = useState("");
  useEffect(() => {
    const fetchCommentsByArticleId = async (article_id) => {
      return api
        .getCommentsByArticleId(article_id)
        .then((res) => res.comments.body)
        .then((comment) => {
          const newComment = comment;
          setComment(newComment);
        });
    };
    fetchCommentsByArticleId(props.article_id).catch((error) => {
      console.log(error);
    });
  }, [props.article_id]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      comment: data.get("Comment"),
    });
  };
  return (
    <Box
      sx={{
        padding: "5px 15px",
      }}
    >
      <Box sx={{ color: "text.secondary" }}>
        Comments:{" "}
        {
          <dl>
            {comment.split(".").map((aComment, idx) => {
              if (idx !== comment.split(".").length - 1) {
                if (aComment[0] === " ") {
                  return <dt key={idx}>-- {aComment.slice(1)}</dt>;
                } else {
                  return <dt key={idx}>-- {aComment}</dt>;
                }
              } else {
                return undefined;
              }
            })}
          </dl>
        }
      </Box>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="Comment"
              variant="outlined"
              id="Comment"
              label="Comment"
              autoComplete="Comment"
              autoFocus
            />
          </Grid>
          <Grid item xs={3}>
            <Button type="submit" variant="contained" sx={{ mt: 1, mb: 2 }}>
              Post
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Comments;
