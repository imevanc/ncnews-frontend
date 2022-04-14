import * as api from "../api";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";
import LinearProgressWithColor from "./LinearProgressWithColor";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Comments = (props) => {
  const [comments, setComments] = React.useState("");
  React.useEffect(() => {
    const fetchCommentsByArticleId = async (article_id) => {
      return api
        .getCommentsByArticleId(article_id)
        .then((res) => {
          return res.comments;
        })
        .then((comment) => {
          const newComment = comment;
          setComments(newComment);
        });
    };
    fetchCommentsByArticleId(props.article_id).catch((error) => {
      console.log(error);
    });
  }, [props.article_id]);

  const handleDelete = (event) => {
    event.preventDefault();
    const comment_id = event.currentTarget.getAttribute("comment_id");
    const deleteData = async (comment_id) => {
      await api.deleteCommentByCommentId(comment_id).then((res) => {
        if (res.status === 204) {
          const newComments = comments.reduce((filteredComments, comment) => {
            if (comment.comment_id !== Number(comment_id)) {
              filteredComments.push(comment);
            }
            return filteredComments;
          }, []);
          setComments(newComments);
        }
      });
    };
    deleteData(comment_id).catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const postData = async (article_id, comment) => {
      await api
        .postCommentByArticleId(article_id, {
          username: `happyamy2016`,
          body: data.get("Comment"),
        })
        .then((res) => res.comment)
        .then((comment) => {
          setComments([...comments, comment]);
          document.getElementById("Comment").nextSibling.nodeValue = "";
        });
    };
    postData(props.article_id, comments).catch((error) => console.log(error));
  };
  const evalLengthOfComment = Object.keys(comments).length;
  return (
    <Box
      sx={{
        padding: "5px 15px",
      }}
    >
      <Box sx={{ color: "text.secondary" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ paddingTop: "15px" }}
        >
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
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          sx={{ paddingTop: "15px" }}
        >
          Comments:{" "}
        </Typography>
        {evalLengthOfComment ? (
          <React.Fragment>
            {comments.map((comment, idx) => {
              return (
                <Container maxWidth="xl" key={idx} sx={{ paddingTop: "10px" }}>
                  <Card
                    component={Paper}
                    elevation={7}
                    bgcolor="grey"
                    id="comment_card"
                    label="comment_card"
                    name="comment_card"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, align: "center" }}>
                      <Typography component="div">
                        {evalLengthOfComment ? (
                          <dl>
                            <dt>Comment ID: {comment.comment_id}</dt>
                            <dt>Comment Body: {comment.body}</dt>
                          </dl>
                        ) : (
                          <LinearProgressWithColor />
                        )}
                      </Typography>
                      <Typography sx={{ align: "right" }} component="div">
                        {evalLengthOfComment ? (
                          <div>
                            {comment.created_at
                              .split("T")[0]
                              .split("-")
                              .reverse()
                              .join("-")}{" "}
                            by {comment.author}
                          </div>
                        ) : (
                          <LinearProgressWithColor />
                        )}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {evalLengthOfComment ? (
                        <React.Fragment>
                          <Grid container spacing={3}>
                            <Grid item xs={9}>
                              <Box
                                sx={{
                                  color: "text.secondary",
                                }}
                              >
                                Total Votes: {comment.votes}
                              </Box>
                            </Grid>
                            <Grid item xs={3}>
                              {comment.author === "happyamy2016" ? (
                                <Box
                                  sx={{
                                    color: "text.secondary",
                                  }}
                                >
                                  <Button
                                    comment_id={comment.comment_id}
                                    onClick={handleDelete}
                                    variant="outlined"
                                    color="secondary"
                                    sx={{ mt: 1, mb: 2 }}
                                  >
                                    <DeleteForeverIcon
                                      color="white"
                                      aria-label="edit"
                                    />
                                  </Button>
                                </Box>
                              ) : (
                                <Box
                                  sx={{
                                    color: "text.secondary",
                                  }}
                                ></Box>
                              )}
                            </Grid>
                          </Grid>
                        </React.Fragment>
                      ) : (
                        <LinearProgressWithColor />
                      )}
                    </CardActions>
                  </Card>
                </Container>
              );
            })}
          </React.Fragment>
        ) : (
          <LinearProgressWithColor />
        )}
      </Box>
    </Box>
  );
};

export default Comments;
