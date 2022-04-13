import * as api from "../api";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";
import LinearProgressWithColor from "./LinearProgressWithColor";

const Comments = (props) => {
  const [comment, setComment] = React.useState("");
  React.useEffect(() => {
    const fetchCommentsByArticleId = async (article_id) => {
      return api
        .getCommentsByArticleId(article_id)
        .then((res) => {
          console.log(res);
          return res;
        })
        .then((comment) => {
          const newComment = comment;
          setComment(newComment);
        });
    };
    fetchCommentsByArticleId(props.article_id).catch((error) => {
      console.log(error);
    });
  }, [props.article_id]);

  const handleSubmit = () => {
    console.log("submitted");
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const postData = async (article_id, comment) => {
  //     await api
  //       .postCommentByArticleId(article_id, {
  //         username: `${props.author}`,
  //         body: data.get("Comment"),
  //       })
  //       .then((res) => res.comment.body)
  //       .then((comment) => {
  //         setComment((comment) => comment + " " + data.get("Comment") + ".");
  //       });
  //   };
  //   postData(props.article_id, comment).catch((error) => console.log(error));
  // };
  const evalLengthOfComment = Object.keys(comment).length;
  return (
    <Box
      sx={{
        padding: "5px 15px",
      }}
    >
      <Box sx={{ color: "text.secondary" }}>
        Comments:
        {evalLengthOfComment ? (
          <React.Fragment></React.Fragment>
        ) : (
          <LinearProgressWithColor />
        )}
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
