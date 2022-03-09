import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NCIcon from "./NCIcon";
import Grid from "@mui/material/Grid";

import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const Footer = () => {
  const ourTheme = useContext(ThemeContext);

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: ourTheme.ourTheme.palette.primary.main }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <NCIcon />
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <NCIcon />
          </Typography>

          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            NC-NEWS
          </Typography>

          <Grid
            item
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <dl>
              <dt>
                <Typography
                  component="div"
                  sx={{
                    fontSize: ourTheme.ourTheme.palette.text.fontSize,
                  }}
                >
                  NC-NEWS Premium
                </Typography>
              </dt>
              <dt>
                <Typography
                  component="div"
                  sx={{
                    fontSize: ourTheme.ourTheme.palette.text.fontSize,
                  }}
                >
                  NC-NEWS Free
                </Typography>
              </dt>
            </dl>
          </Grid>
          <Grid
            item
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <dl>
              <dt>
                <Typography
                  component="div"
                  sx={{
                    fontSize: ourTheme.ourTheme.palette.text.fontSize,
                  }}
                >
                  Subscriptions
                </Typography>
              </dt>
              <dt>
                <Typography
                  component="div"
                  sx={{
                    fontSize: ourTheme.ourTheme.palette.text.fontSize,
                  }}
                >
                  Blog
                </Typography>
              </dt>
            </dl>
          </Grid>
          <Grid
            item
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <dl>
              <dt>
                <Typography
                  component="div"
                  sx={{
                    fontSize: ourTheme.ourTheme.palette.text.fontSize,
                  }}
                >
                  About
                </Typography>
              </dt>
              <dt>
                <Typography
                  component="div"
                  sx={{
                    fontSize: ourTheme.ourTheme.palette.text.fontSize,
                  }}
                >
                  Careers
                </Typography>
              </dt>
            </dl>
          </Grid>
          <Grid
            item
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <dl>
              <dt>
                <Typography
                  component="div"
                  sx={{
                    fontSize: ourTheme.ourTheme.palette.text.fontSize,
                  }}
                >
                  Help
                </Typography>
              </dt>
              <dt>
                <Typography
                  component="div"
                  sx={{
                    fontSize: ourTheme.ourTheme.palette.text.fontSize,
                  }}
                >
                  Privacy
                </Typography>
              </dt>
            </dl>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
