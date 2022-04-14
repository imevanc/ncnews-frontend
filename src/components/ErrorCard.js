import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Container, Grid } from "@mui/material";

const ErrorCard = (props) => {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "30px" }}>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={props.msg} subheader="Go to Home Page" />
            <CardMedia
              component="img"
              height="100%"
              width="100%"
              image={process.env.PUBLIC_URL + "/error.svg"}
              alt="Error Card"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ErrorCard;
