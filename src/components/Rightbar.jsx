import React from "react";
import { FaTimes, FaHome } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { style } from "./Styles";

const Rightbar = ({ showside, setShowside }) => {
  return (
    <div className={showside ? "container showcontainer" : "container "}>
      <Typography
        variant="h6"
        color="initial"
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "35px",
          marginLeft: "50px",
          color: "white",
        }}
      >
        <FaHome style={{ marginRight: "20px" }} /> Home
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "35px",
          marginLeft: "50px",
          color: "white",
        }}
      >
        <BsPerson style={{ marginRight: "20px" }} /> About
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "35px",
          marginLeft: "50px",
          color: "white",
        }}
      >
        <FaHome style={{ marginRight: "20px" }} /> Skills
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "35px",
          marginLeft: "50px",
          color: "white",
        }}
      >
        <MdWorkOutline style={{ marginRight: "20px" }} /> Projects
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "35px",
          marginLeft: "50px",
          color: "white",
        }}
      >
        <TiMessages style={{ marginRight: "20px" }} /> Contact
      </Typography>

      <FaTimes
        style={{
          fontSize: "30px",
          color: "rgba(167, 41, 41, 0.9)",
          position: "absolute",
          top: "10px",
          right: "15px",
          cursor: "pointer",
        }}
        onClick={() => setShowside(false)}
      />
    </div>
  );
};

export default Rightbar;
