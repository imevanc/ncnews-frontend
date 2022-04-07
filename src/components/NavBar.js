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

const NavBar = (props) => {
  const ourTheme = useContext(ThemeContext);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
                      to={`/${aTopic}`}
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
                        <span value={aTopic}>{aTopic}</span>
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
                      to={`/${aTopic}`}
                      state={aTopic}
                      size="small"
                      type="submit"
                      key={idx}
                      sx={{
                        fontSize: ourTheme.ourTheme.palette.button.fontSize,
                        color: ourTheme.ourTheme.palette.button.primary.main,
                      }}
                    >
                      <span value={aTopic}>{aTopic}</span>
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
    </Container>
  );
};

export default NavBar;
