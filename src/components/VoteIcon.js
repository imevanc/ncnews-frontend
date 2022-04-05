import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import * as api from "../api";
import { useState } from "react";

const VoteIcon = (props) => {
  const [votes, setVotes] = useState(props.votes);
  const handleChange = (data) => {
    return api
      .patchArticleByArticleId(props.article_id, {
        inc_votes: data,
      })
      .then((res) => res.article)
      .then((article) => {
        const newVotes = article.votes;
        setVotes(newVotes);
      })
      .catch((error) => console.log(error));
  };
  const handleThumbUp = () => {
    handleChange(1);
  };
  const handleThumbDown = () => {
    handleChange(-1);
  };
  return (
    <Box
      sx={{
        padding: "5px 15px",
      }}
    >
      <Box sx={{ color: "text.secondary" }}>Total Votes: {votes}</Box>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab color="primary" aria-label="add">
          <ThumbUpIcon onClick={handleThumbUp} />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <ThumbDownAltIcon onClick={handleThumbDown} />
        </Fab>
      </Box>
    </Box>
  );
};

export default VoteIcon;
