import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Typography } from "@mui/material";
import { style } from "./Styles";
import emailjs from "@emailjs/browser";

const Contact1 = () => {
  const formRef = useRef();
  const initialValue = { name: "", gmail: "", desc: "" };
  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    await setFormError(validate(formValue));
    setIsSubmit(true);

    await emailjs
      .sendForm(
        "service_dh0pi0d",
        "template_y1p030k",
        formRef.current,
        "64L_Uepd4_yajAOOR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormValue({ name: "", gmail: "", desc: "" });
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formError);
    }
  }, [formError, isSubmit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div
      id="contact"
      style={{
        height: "100%",
        backgroundImage: 'url("./images/contact.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
        <form ref={formRef} onSubmit={handleSubmit}>
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
          <select style={style.input} name="project" onChange={handleChange}>
            <option value="frontend project">Frontend project </option>
            <option value=" backend project">Backendend project </option>
            <option value=" fullstack project">Fullstack project </option>
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
