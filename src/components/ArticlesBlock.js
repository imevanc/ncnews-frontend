import Container from "@mui/material/Container";
import ArticleSmallView from "./ArticleSmallView";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import TopicsMenu from "./TopicsMenu";

const pages = ["Sort_By", "Order", <TopicsMenu />];

const ArticlesBlock = () => {
  const ourTheme = useContext(ThemeContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Container maxWidth="xl">
        <AppBar
          position="static"
          sx={{ backgroundColor: ourTheme.ourTheme.palette.primary.main }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        sx={{
                          fontSize:
                            ourTheme.ourTheme.palette.typography.fontSize,
                        }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <>
                {pages.map((page) => {
                  if (typeof page === "string") {
                    return (
                      <Box
                        key={page}
                        sx={{
                          // justifyContent: "flex-start",
                          // alignItems: "flex-start",
                          flexGrow: 1,
                          display: { xs: "none", md: "flex" },
                        }}
                      >
                        <Button
                          key={page}
                          onClick={handleCloseNavMenu}
                          sx={{
                            fontSize: ourTheme.ourTheme.palette.button.fontSize,
                            color:
                              ourTheme.ourTheme.palette.button.primary.main,
                          }}
                        >
                          {page}
                        </Button>
                      </Box>
                    );
                  } else {
                    return page;
                  }
                })}
              </>
            </Toolbar>
          </Container>
        </AppBar>
        <Grid
          label="TRENDING"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <ArticleSmallView />
          <ArticleSmallView />
          <ArticleSmallView />
          <ArticleSmallView />
        </Grid>
      </Container>
    </>
  );
};

export default ArticlesBlock;
