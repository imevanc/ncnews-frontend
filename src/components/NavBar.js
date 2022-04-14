import { useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import FiltersBar from "./FiltersBar";

const NavBar = (props) => {
  const ourTheme = useContext(ThemeContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClick = (event) => {
    setSelectedTopic(event.currentTarget.textContent);
  };
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "50px" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: ourTheme.ourTheme.palette.primary.main,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { md: "none" },
                }}
              >
                {props.topics.length === 4 ? (
                  props.topics.map((aTopic, idx) => (
                    <MenuItem
                      key={idx}
                      component={Link}
                      to={`topics/${aTopic}`}
                      state={aTopic}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography
                        textAlign="center"
                        sx={{
                          spacing: 10,
                          fontSize:
                            ourTheme.ourTheme.palette.typography.fontSize,
                        }}
                      >
                        {aTopic}
                      </Typography>
                    </MenuItem>
                  ))
                ) : (
                  <LinearProgress sx={{ color: "white" }} />
                )}
              </Menu>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {props.topics.length === 4 ? (
                props.topics.map((aTopic, idx) => {
                  return (
                    <Button
                      component={Link}
                      to={`topics/${aTopic}?order=desc&sort_by=created_at`}
                      state={aTopic}
                      size="small"
                      onClick={handleClick}
                      type="submit"
                      key={idx}
                      sx={{
                        fontSize: ourTheme.ourTheme.palette.button.fontSize,
                        color: ourTheme.ourTheme.palette.button.primary.main,
                      }}
                    >
                      {aTopic}
                    </Button>
                  );
                })
              ) : (
                <LinearProgress sx={{ color: "white" }} />
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <FiltersBar selectedTopic={selectedTopic} />
    </Container>
  );
};

export default NavBar;
