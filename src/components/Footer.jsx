import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "20%",
        mt: "10%",
        bgcolor: "rgb(45, 45, 91)",
        py: "5%",
        color: "white",
      }}
    >
      <Typography variant="h4" py={2} align="center" fontWeight={600}>
        SAHBEST
      </Typography>
      <Container maxWidth="xs">
        <Typography variant="caption" align="center">
          My goal is to meet the demands of my clients by creating beautiful and
          responsive user interphases and website that suit their needs
        </Typography>
      </Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "40px",
        }}
      >
        <FaRegCopyright />
        <Typography variant="body"> 2022</Typography>
        <Typography align="center" style={{ margin: "0 20px" }}>
          Sahbest
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
