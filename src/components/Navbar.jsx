import React from "react";
// import { style, appbar } from "./Styles";
import { FaBars, FaFacebook } from "react-icons/fa";
import { Badge, Typography, AppBar, Toolbar, Box, Avatar } from "@mui/material";

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
          <Avatar src="./images/10.png" />
          <Badge badgeContent={3}>
            <FaFacebook style={{ fontSize: "40px", marginLeft: "15px" }} />
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
