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

const NavBar = (props) => {
  const ourTheme = useContext(ThemeContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorSortByNav, setAnchorSortByNav] = useState(true);
  // const sortBy = ["title", "author"];
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  // const handleOpenSortByNavMenu = (event) => {
  //   setAnchorSortByNav(event.currentTarget);
  // };
  // const handleCloseSortByNavMenu = () => {
  //   setAnchorSortByNav(null);
  // };
  return (
    <main>
      <Container sx={{ padding: "50px 15px" }} maxWidth="xl">
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
                  {props.topics.map((aTopic) => (
                    <MenuItem
                      key={aTopic}
                      component={Link}
                      to={`/${aTopic}`}
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
                  ))}
                </Menu>
              </Box>
              {/* <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenSortByNavMenu}
                  color="inherit"
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      spacing: 10,
                      fontSize: ourTheme.ourTheme.palette.typography.fontSize,
                    }}
                  >
                    SORT_BY
                  </Typography>
                </IconButton>
                <Menu
                  id="menu-sort_by_bar"
                  anchorEl={anchorSortByNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  open={Boolean(anchorSortByNav)}
                  onClose={handleCloseSortByNavMenu}
                  sx={{
                    display: { md: "none" },
                  }}
                >
                  {sortBy.map((aSort) => (
                    <MenuItem
                      key={aSort}
                      component={Link}
                      to={`/${aSort}`}
                      onClick={handleCloseSortByNavMenu}
                    >
                      <Typography
                        textAlign="center"
                        sx={{
                          spacing: 10,
                          fontSize:
                            ourTheme.ourTheme.palette.typography.fontSize,
                        }}
                      >
                        <span value={aSort}>{aSort}</span>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box> */}
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                {props.topics.map((aTopic, idx) => {
                  return (
                    <Button
                      component={Link}
                      to={`/${aTopic}`}
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
                })}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </main>
  );
};

export default NavBar;
