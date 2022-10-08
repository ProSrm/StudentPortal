import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Axios from "axios";
import "./component.css";
import { useNavigate } from "react-router-dom";
import validator from "validator";

export default function Register() {
  const [namereg, setName] = useState("");
  const [emailreg, setEmail] = useState("");
  const [passwordreg, setPassword] = useState("");
  const [collegereg, setCollege] = useState("");
  const [phonereg, setPhone] = useState("");
  const [asUserChoice, setasUserChoice] = useState("false");
  // const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      return true;
    } else {
      return false;
    }
  };
  //validate form
  function validateForm() {
    // const emailval = validateEmail();
    return emailreg.length > 0 && passwordreg.length <= 20;
  }

  //changing string value to boolean type .
  var str2bool = (value) => {
    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    return value;
  };

  const onOptionChange = (e) => {
    setasUserChoice(str2bool(e.target.value));
    setasUserChoice(e.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log("data submitted ");
    console.log(
      namereg,
      emailreg,
      passwordreg,
      collegereg,
      phonereg,
      asUserChoice
    );
    alert("account created");
    // setName("");
    // setEmail("");
    // setPassword("");
    // setCollege("");
    // setPhone("");
    navigate("/Login", { replace: true });

    Axios.post("http://localhost:3001/register", {
      name: namereg,
      email: emailreg,
      password: passwordreg,
      college: collegereg,
      phone: phonereg,
      registerasadmin: asUserChoice,
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="main">
      <Form onSubmit={handleSubmit} className="section">
        <p className="sign"> New Student </p>
        <Form.Group size="lg" controlId="email" className="form1">
          {/* <Form.Label className="un">Email</Form.Label> */}
          <Form.Control
            autoFocus
            type="text"
            value={namereg}
            onChange={(event) => setName(event.target.value)}
            className="pass"
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email" className="form1">
          {/* <Form.Label className="un">Email</Form.Label> */}
          <Form.Control
            type="email"
            value={emailreg}
            onChange={(event) => setEmail(event.target.value)}
            className="pass"
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" className="form1">
          {/* <Form.Label className="pass">Password</Form.Label> */}
          <Form.Control
            type="password"
            value={passwordreg}
            onChange={(event) => setPassword(event.target.value)}
            className="pass"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group size="lg" className="form1">
          {/* <Form.Label className="pass">Password</Form.Label> */}
          <Form.Control
            type="string"
            value={collegereg}
            onChange={(event) => setCollege(event.target.value)}
            className="pass"
            placeholder="College"
            required
          />
        </Form.Group>
        <Form.Group size="lg" className="form1">
          {/* <Form.Label className="pass">Password</Form.Label> */}
          <Form.Control
            type="number"
            value={phonereg}
            onChange={(event) => setPhone(event.target.value)}
            className="pass"
            placeholder="Phone number"
            required
          />
        </Form.Group>
        <Form.Group size="lg" className="form1">
          <div className="asuserChoice">
            <input
              type="radio"
              name="topping"
              value="true"
              id="regular"
              className="radio-input"
              checked={asUserChoice === "true"}
              onChange={onOptionChange}
            />
            <label htmlFor="regular" className="radio-label">
              Admin
            </label>

            <input
              type="radio"
              name="topping"
              value="false"
              id="medium"
              className="radio-input"
              checked={asUserChoice === "false"}
              onChange={onOptionChange}
            />

            <label htmlFor="medium" className="radio-label">
              Student
            </label>
          </div>
        </Form.Group>

        <Button
          className="submit"
          block="true"
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Register
        </Button>
      </Form>
    </div>
  );
}
