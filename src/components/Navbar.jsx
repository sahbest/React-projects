import React from "react";
import { FaBars, FaGithub } from "react-icons/fa";
import { Typography, AppBar, Toolbar, Box, Avatar } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = ({ setShowside }) => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          <FaBars className="bar" onClick={() => setShowside(true)} /> SAHBEST
        </Typography>
        <Typography
          variant="h6"
          color="white"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          BUILD YOUR WEBSITE
        </Typography>
        <Box sx={{ display: "flex", alignItem: "center" }}>
          <Link to="#about" style={{ textDecoration: "none" }} smooth>
            <Avatar src="./images/sahbest.jpg" />
          </Link>

          <FaGithub
            style={{
              fontSize: "40px",
              marginLeft: "15px",
              cursor: "pointer",
              color: "rgba(256,256,256,.7)",
            }}
            onClick={() => {
              window.open("https://www.github.com/sahbest", "_blank");
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
