import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { style } from "./Styles";
import Container from "@mui/material/Container";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg" id="about">
      <Typography variant="h4" color="white" align="center" m="10px">
        ABOUT ME
      </Typography>
      <Grid container spacing={3}>
        <Grid item sx={{}} xs={12} sm={6}>
          <img src="./images/sahbest.jpg" alt="img" />
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
          xs={12}
          sm={6}
        >
          <Typography variant="H6" color="initial" sx={style.type}>
            NAME: Adebayo Saheed
          </Typography>
          <Typography variant="H6" color="initial" sx={style.type}>
            STATE: Osun state
          </Typography>
          <Typography variant="H6" color="initial" sx={style.type}>
            CITIZEN: Nigeria
          </Typography>
          <Typography variant="H6" color="initial" sx={style.type}>
            EMAIL: sahbestdev@gmail.com
          </Typography>
          <Typography variant="H6" color="initial" sx={style.type}>
            WHATSAPP NO: +234 9034618872
          </Typography>
          <Typography variant="H6" color="initial" sx={style.type}>
            MARITAL STATUS: Single
          </Typography>
          <Typography
            variant="body2"
            color="initial"
            // sx={style.type}
            sx={{
              marginTop: { xs: "30px", sm: "40%px", md: "15%", lg: "20%" },
              color: "rgba(255, 255, 255, 0.7)",
              textAlign: "justify",
            }}
          >
            BIOS: I am a young, enthusiastic full stack web developer,even
            though i am studying pharmacy at prestigious and great Obafemi
            Awolowo University, ile-ife Osun state Nigeria. my curiosity and
            great interest in the tech industry drives me to becomes a
            webdeveloper.i am very convident in my abilities,eager to work and
            learning in the process,i help companies and individual elevating
            various their business by building beautiful websites and user
            interfaces. if you are in need of my services please contact me and
            lets get started
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        color="white"
        align="center"
        sx={{ my: { xs: "20px", sm: "40px" } }}
      >
        HOBBIES
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ minHeight: { sm: "29em", md: "15em" } }}>
            <CardActionArea>
              <CardMedia image="./images/reaad.jpg" sx={{ height: "40vh" }} />
              <CardContent>
                <Typography variant="h5" align="center" my="10px">
                  READING
                </Typography>
                <Typography variant="body2" pb="20px" textAlign="justify">
                  The world is changing very fast and things gets outdated very
                  easily,the same also applies to web industries,in order to
                  keep myself updated about this ever changing and diverse
                  industries,i engage myself in readings espesialy
                  documentations about different about the web
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ minHeight: { sm: "29em", md: "15em" } }}>
            <CardActionArea>
              <CardMedia image="./images/relax.jpg" sx={{ height: "40vh" }} />
              <CardContent>
                <Typography variant="h5" align="center" my="10px">
                  RELAXING
                </Typography>
                <Typography variant="body2" textAlign="justify">
                  Who doesn't like to relax especially after work? and
                  besides,research has it that relaxation is good for enhancing
                  productivity and is important for for restoring depleted
                  energy,Also different people has different ways of getting
                  inspiration and for me relaxation is one of them.i do relax
                  during weekends after working during the weekdays
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
