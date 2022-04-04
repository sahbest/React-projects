// import React from "react";
import { styled } from "@mui/system";
import { AppBar } from "@mui/material";

export const navbar = styled(
  AppBar,
  {}
)({
  backgroundColor: "green",
});

export const style = {
  type: {
    marginBottom: { xs: "20px", sm: "5px", md: "30px" },
    color: "rgba(255, 255, 255, 0.7)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "5px",
    borderRadius: "7px",
    border: "none",
    marginTop: "5px",
    outline: "none",
  },
  move: {
    height: "50px",
    fontWeight: "bold",
    textTramsform: "uppercase",
    alignItems: "center",
    // remove display flex and textalign
    display: "flex",
    textAlign: "center",
    width: "200px",
    margin: "auto",
  },
};
