import React from "react";
import { FaTimes, FaHome, FaQuestion } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import Typography from "@mui/material/Typography";
import { HashLink as Link } from "react-router-hash-link";

const Rightbar = ({ showside, setShowside }) => {
  return (
    <div className={showside ? "container showcontainer" : "container "}>
      <Link to="#home" smooth style={{ textDecoration: "none" }}>
        {" "}
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
      </Link>

      <Link to="#about" style={{ textDecoration: "none" }} smooth>
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
      </Link>
      <Link to="#skill" style={{ textDecoration: "none" }} smooth>
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
      </Link>
      <Link to="#project" style={{ textDecoration: "none" }} smooth>
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
      </Link>
      <Link to="#faq" style={{ textDecoration: "none" }} smooth>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "35px",
            marginLeft: "50px",
            color: "white",
          }}
        >
          <FaQuestion style={{ marginRight: "20px" }} /> FAQ
        </Typography>
      </Link>
      <Link to="#contact" style={{ textDecoration: "none" }} smooth>
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
      </Link>

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
