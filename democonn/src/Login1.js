import { createContext, useState } from "react";
import {
  Route,
  Routes,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Axios from "axios";
import "./component.css";
import { useAuth } from "./Auth";
import ControlNav from "./ControlNav";
import { useEffect } from "react";
import Register from "./Register";
import App from "./App";

export default function Login1() {
  const navigate = useNavigate();
  const location = useLocation();
  // const pathToRedirect = location.state?.path || "/home";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [loginData, setLoginData] = useState({});
  const LoginContext = createContext();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  const auth = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("data submitted ");
    // console.log(email, password);
    setEmail("");
    setPassword("");
    navigate("/");
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.messsage) {
        setLoginStatus(response.data.messsage);
        navigate("/login", { replace: true });
      } else {
        setLoginStatus("login successful");
        setIsLoggedin(true);
        navigate("/home", { replace: true });
        // <Home />;
        //This is working now commenting because no use in login page currently

        /*   var collegename = response.data[0].college;
        console.log(collegename); */

        console.log(response.data);

        //setting userEmail when user logged in (to context )
        auth.loginuser(email);
        alert("login successful");
      }
    });
  }
  function register_btn() {
    navigate("/register", { replace: true });
  }

  return (
    <>
      <div className="main">
        <Form onSubmit={handleSubmit} className="section">
          <p className="sign">Sign In</p>
          <Form.Group size="lg" controlId="email" className="form1">
            {/* <Form.Label className="un">Email</Form.Label> */}
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="unl"
              placeholder="Username/Email"
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password" className="form1">
            {/* <Form.Label className="pass">Password</Form.Label> */}
            <Form.Control
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="pass"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            style={{
              lineHeight: 1.3,
              paddingLeft: "23px",
              textAlign: "center",
              marginBottom: "3px",
            }}
            className="submit"
            block="true"
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Login
          </Button>
          <Button
            className="submit"
            block="true"
            size="lg"
            type="submit"
            // disabled={!validateForm()}
            onClick={register_btn}
          >
            Signup
          </Button>
          {/* <Link to="/home">home</Link> */}
        </Form>

        <h4 style={{ textAlign: "center" }}>{loginStatus}</h4>
      </div>
    </>
  );
}
