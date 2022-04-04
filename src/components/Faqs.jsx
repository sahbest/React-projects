import React from "react";
import { questions } from "./Data";
import Faq from "./Faq";
import Typography from "@mui/material/Typography";

const Faqs = () => {
  return (
    <>
      <Typography variant="h4" color="white" my="50px" textAlign="center">
        FREQUENTLY ASKED QUESTIONS
      </Typography>
      <div style={{ marginTop: "1px", margin: "5%" }}>
        {questions.map((item) => {
          return <Faq {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Faqs;
