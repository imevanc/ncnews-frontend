import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const CommentsForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid component="form" noValidate id="form1" container spacing={3}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="Comment"
            variant="outlined"
            id="Comment"
            label="Comment"
            autoFocus
          />
        </Grid>
        <Grid item xs={3}>
          <Button type="submit" variant="contained" sx={{ mt: 1, mb: 2 }}>
            Post
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommentsForm;
