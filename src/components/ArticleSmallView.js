import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ArticleSmallView = () => {
  return (
    <Grid item xs={5} sm={2} md={3}>
      <Accordion
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AccordionSummary
          sx={{ flexGrow: 1 }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">Article Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="right">created_at by username</Typography>
          <Typography align="left">Article Body</Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default ArticleSmallView;
