import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const LinearProgressWithColor = () => {
  const ourTheme = useContext(ThemeContext);
  return (
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
      <LinearProgress
        sx={{ color: ourTheme.ourTheme.palette.progressBar.primary.main }}
      />
      <LinearProgress
        sx={{ color: ourTheme.ourTheme.palette.progressBar.secondary.main }}
      />
      <LinearProgress
        sx={{ color: ourTheme.ourTheme.palette.progressBar.primary.main }}
      />
      <LinearProgress
        sx={{ color: ourTheme.ourTheme.palette.progressBar.secondary.main }}
      />
      <LinearProgress
        sx={{ color: ourTheme.ourTheme.palette.progressBar.primary.main }}
      />
      <LinearProgress
        sx={{ color: ourTheme.ourTheme.palette.progressBar.secondary.main }}
      />
    </Stack>
  );
};

export default LinearProgressWithColor;
