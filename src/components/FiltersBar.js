import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useContext, useState } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ScrollDownMenu from "./ScrollDownMenu";

const sortByOptions = ["created_at", "title", "author", "votes"];
const orderOption = ["asc", "desc"];

const scrollbars = [
  <ScrollDownMenu query={"sort_by"} options={sortByOptions} />,
  <ScrollDownMenu query={"order"} options={orderOption} />,
];

const FiltersBar = () => {
  const ourTheme = useContext(ThemeContext);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Container maxWidth="md" sx={{ paddingTop: "5px" }}>
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
                  <MenuItem
                    key={idx}
                    // component={Link}
                    // to={`/${aTopic}`}
                    // state={aTopic}
                    onClick={handleCloseNavMenu}
                  >
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
              {scrollbars.map((option, idx) => {
                return option;
                //   <MenuItem
                //     onClick={() => console.log(option)}
                //     // component={Link}
                //     // to={`/${aTopic}`}
                //     // state={aTopic}
                //     size="small"
                //     type="submit"
                //     key={idx}
                //     sx={{
                //       fontSize: ourTheme.ourTheme.palette.button.fontSize,
                //       color: ourTheme.ourTheme.palette.button.primary.main,
                //     }}
                //   >
                //     <span value={option}>{option}</span>
                //   </MenuItem>
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
};
export default FiltersBar;
