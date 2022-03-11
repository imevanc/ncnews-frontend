import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import * as api from "../api";

const VoteIcon = (props) => {
  const handleThumbUp = () => {
    console.log("like");
    return api
      .patchArticleByArticleId(props.article.article_id, {
        votes: props.votes + 1,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  const handleThumbDown = () => {
    console.log("dislike");
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <ThumbUpIcon onClick={handleThumbUp} />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <ThumbDownAltIcon onClick={handleThumbDown} />
      </Fab>
    </Box>
  );
};

export default VoteIcon;
