import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Weather = () => {
  return (
    <Box
      sx={{
        pt: 4,
        pb: 2,
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" gutterBottom>
          use the todo list code for the weather forecast
        </Typography>
      </Container>
    </Box>
  );
};

export default Weather;
