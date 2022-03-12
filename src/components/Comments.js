import { useEffect, useState } from "react";
import * as api from "../api";
import Box from "@mui/material/Box";

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
    </Box>
  );
};

export default Comments;
