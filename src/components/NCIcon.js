import NorthIcon from "@mui/icons-material/North";
import TerminalIcon from "@mui/icons-material/Terminal";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const NCIcon = () => {
  const ourTheme = useContext(ThemeContext);

  return (
    <Link to="/">
      <NorthIcon sx={{ color: ourTheme.ourTheme.palette.text.main }} />
      <TerminalIcon sx={{ color: ourTheme.ourTheme.palette.text.main }} />
      <NewspaperIcon sx={{ color: ourTheme.ourTheme.palette.text.main }} />
    </Link>
  );
};

export default NCIcon;
