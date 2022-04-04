import React, { useState } from "react";
import Data from "./Data";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Skill = () => {
  const [value, setValue] = useState(0);
  const { head, info1, info2 } = Data[value];
  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        color="white"
        align="center"
        sx={{ margin: "5%" }}
      >
        MY SKILLS
      </Typography>
      <Typography
        variant="body2"
        color="white"
        align="center"
        sx={{ margin: "5%" }}
      >
        please click on the buttons to show infomation pertaining to each skills
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          sm={3}
          xs={12}
          sx={{ borderRight: { sm: "1px solid white", xs: "0" } }}
        >
          <Container
            maxWidth="xs"
            sx={{
              flexDirection: "column",
              alignItems: "center",
              marginTop: { xs: "0", sm: "30%" },
            }}
          >
            <Button
              size="small"
              onClick={() => setValue(0)}
              sx={{ marginBottom: "20px", width: "7em" }}
              variant="contained"
            >
              Frontend
            </Button>
            <Button
              size="small"
              onClick={() => setValue(1)}
              variant="contained"
              sx={{
                marginBottom: "20px",
                width: "7em",
                marginLeft: { xs: "10%", sm: "0" },
              }}
            >
              Backend
            </Button>
          </Container>
        </Grid>
        <Grid item sm={9} xs={12}>
          <Typography
            variant="h5"
            color="initial"
            sx={{ color: "white", marginBottom: "20px" }}
          >
            {head}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="initial"
            sx={{
              color: "white",
              marginBottom: "20px",
              textAlign: "justify",
            }}
          >
            {info1}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="initial"
            sx={{
              color: "white",
              marginBottom: "20px",
              textAlign: "justify",
            }}
          >
            {info2}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skill;
