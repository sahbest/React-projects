import React, { useState, useEffect } from "react";
import { Container, Button, Typography } from "@mui/material";
import { style } from "./Styles";

const Contact1 = () => {
  const initialValue = { name: "", gmail: "", desc: "" };
  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setFormError(validate(formValue));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formError);
    }
  }, [formError]);

  const validate = (value) => {
    const errors = {};
    // const regex =
    if (!value.name) {
      errors.name = "please input your name";
    }
    if (!value.gmail) {
      errors.gmail = "please input your gmail";
    }
    //  else if(!RegExp.text(value.gmail)){
    //   errors.gmail='this is not a valid email format'
    // }
    if (!value.desc) {
      errors.desc = "please provides a little description about your projects";
    } else if (value.desc.length < 10) {
      errors.desc = "description must be at least 15 characters";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div
      style={{
        height: "90vh",
        backgroundImage: 'url("./images/contact.jpg")',
        backgroundSize: "cover",
        // marginTop: "30px",
      }}
    >
      <Typography variant="h4" color="white" align="center" my="10px">
        CONTACT ME
      </Typography>
      <Container
        maxWidth="xs"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "20px 35px",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{ color: "white" }}>NAME</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              // name is very imp for onchange
              name="name"
              value={formValue.name}
              style={style.input}
              type="text"
            ></input>
            <p style={{ color: "red", fontSize: "small" }}> {formError.name}</p>
          </div>
          <div>
            <label style={{ color: "white" }}>GMAIL</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              name="gmail"
              value={formValue.gmail}
              style={style.input}
              type="email"
            ></input>
            <p style={{ color: "red", fontSize: "small" }}>{formError.gmail}</p>
          </div>

          <div>
            <label style={{ color: "white" }}>
              What types of projects did you have for me
            </label>
          </div>
          <select style={style.input}>
            <option>Frontend projects </option>
            <option>Backendend projects </option>
            <option>Fullstack projects </option>
          </select>
          <div>
            <label style={{ color: "white" }}>DESCRIPTION</label>
          </div>
          <div>
            <textarea
              onChange={handleChange}
              name="desc"
              value={formValue.desc}
              style={style.input}
              placeholder="please input short description about the project"
              rows={4}
            />
            <p style={{ color: "red", fontSize: "small" }}> {formError.desc}</p>
          </div>

          <Button type="submit" variant="contained" color="primary">
            submit
          </Button>
        </form>
        {Object.keys(formError).length === 0 && isSubmit ? (
          <div style={{ color: "white" }}>sent succefully</div>
        ) : null}
      </Container>
    </div>
  );
};
export default Contact1;
