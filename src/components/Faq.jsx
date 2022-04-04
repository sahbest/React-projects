import React, { useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";

const Faq = ({ qst, ans, id }) => {
  const [show, setShow] = useState(false);

  return (
    <Container
      maxWidth="lg"
      sx={{ boxShadow: "0px 0px 4px white", marginTop: "20px" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" color="rgba(255, 255, 255, 0.9)" my="15px">
          {qst}
        </Typography>
        <Button
          onClick={() => setShow(!show)}
          size="medium"
          variant="contained"
          sx={{ color: "white", fontSize: "10px" }}
        >
          {show ? "hide" : "show"}
        </Button>
      </Box>
      {show && (
        <Typography
          variant="caption"
          color="rgba(255, 255, 255, 0.9)"
          my="15px"
          p="20px"
        >
          {ans}
        </Typography>
      )}
    </Container>
  );
};

export default Faq;
