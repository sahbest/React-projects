import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { style } from "./Styles";
const Home = () => {
  return (
    <Grid
      container
      id="home"
      spacing={4}
      align="center"
      px="30PX"
      sx={{
        backgroundImage: "url('./images/HPIMG.jpg')",
        backgroundSize: "cover",
        imagePosition: "center",
        // height: "100vh",
        objectFit: "cover",
        paddingTop: { xs: "30px", sm: "100px" },
      }}
    >
      <Grid
        item
        xm={12}
        sm={6}
        sx={{
          marginBottom: "30px",
          textAlign: "center",
          maWwidth: "50%",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="body1"
          color="rgba(255, 255, 255, 0.9)"
          textAlign="center"
        >
          Hello clients,You are welcome to my
        </Typography>
        <Typography
          variant="h6"
          color="rgba(255, 255, 255, 0.9)"
          sx={{
            letterSpacing: "17px",
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ marginBottom: { xs: "20px", sm: "5px" } }}
      >
        <Typography variant="h6" color="rgba(255, 255, 255, 0.9)">
          I am Sahbest
        </Typography>
        <Typography
          variant="h6"
          color="rgba(255, 255, 255, 0.9)"
          sx={{ fontweight: "bold" }}
        >
          <span> A FULL STACK MERN DEVELOPER</span>
        </Typography>
        <Typography
          variant="h6"
          color="rgba(255, 255, 255, 0.9)"
          textAlign="justify"
          maxWidth={350}
        >
          I develop beautiful websites and interface using the modern react
          library and also build restful api with node and express framwork
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          color="rgba(255, 255, 255, 0.9)"
          maxWidth={500}
          textAlign="center"
          mb="10px"
          sx={{ wordSpacing: "10px", textTransform: "uppercase" }}
        >
          Contact me for your
        </Typography>
        <div className="wrapper">
          <div className="contain">
            <Typography
              variant="h5"
              color="rgba(255, 255, 255, 0.9)"
              sx={style.move}
            >
              Web design
            </Typography>
            <Typography
              variant="h6"
              color="rgba(255, 255, 255, 0.9)"
              sx={style.move}
            >
              Web development
            </Typography>
            <Typography
              variant="h6"
              color="rgba(255, 255, 255, 0.9)"
              sx={style.move}
            >
              Node and Express
            </Typography>
            <Typography
              variant="h6"
              color="rgba(255, 255, 255, 0.9)"
              sx={style.move}
            >
              Restful api projects
            </Typography>
          </div>
        </div>

        <Typography
          variant="h6"
          color="rgba(255, 255, 255, 0.9)"
          textAlign="center"
          mt="10px"
          sx={{
            letterSpacing: "10px",
            textTransform: "uppercase",
            marginBottom: "5%",
          }}
        >
          Projects
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
