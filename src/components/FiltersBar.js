import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useContext, useState } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ScrollDownMenu from "./ScrollDownMenu";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const FiltersBar = (props) => {
  const ourTheme = useContext(ThemeContext);
  const [selected, setSelected] = useState({ sortBy: " ", order: " " });
  const sortByOptions = ["created_at", "title", "author", "votes"];
  const orderOption = ["asc", "desc"];
  const scrollbars = [
    <ScrollDownMenu
      query={"sort_by"}
      options={sortByOptions}
      selected={selected}
      setSelected={setSelected}
    />,
    <ScrollDownMenu
      query={"order"}
      options={orderOption}
      selected={selected}
      setSelected={setSelected}
    />,
  ];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Container maxWidth="xs" sx={{ paddingTop: "5px" }}>
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
                {scrollbars.map((option, idx) => (
                  <MenuItem key={idx} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        spacing: 10,
                        fontSize: ourTheme.ourTheme.palette.typography.fontSize,
                      }}
                    >
                      <span value={option}>{option}</span>
                    </Typography>
                  </MenuItem>
                ))}
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
              <Grid container spacing={6}>
                {scrollbars.map((option, idx) => {
                  return (
                    <Grid key={idx} item xs={3}>
                      {option}
                    </Grid>
                  );
                })}
                <Grid item xs={3}>
                  {props.selectedTopic && Object.keys(selected).length ? (
                    <Button
                      component={Link}
                      to={`topics/${props.selectedTopic}?order=${selected.order}&sort_by=${selected.sortBy}`}
                      variant="contained"
                      type="submit"
                      sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                        color: ourTheme.ourTheme.palette.text.main,
                      }}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                        color: ourTheme.ourTheme.palette.text.main,
                      }}
                    >
                      Submit
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
};
export default FiltersBar;
