import { createContext, useState } from "react";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Axios from "axios";
import "./component.css";
import ControlNav from "./ControlNav";
import { useEffect } from "react";
import Register from "./Register";
import Login1 from "./Login1";
import App from "./App";

//importing all basic routes
import Home from "./Home";
import Groups from "./Packages/Group";
import Meeting from "./Packages/Meeting";
import Discuss from "./Packages/Discuss";
import Main from "./Packages/Main";
import ToDo from "./Components/Todos/ToDo";
import Navbar from "./Navbar";
import { AddContent } from "./Packages/AddContent";
import { Resource } from "./Packages/Resource";
import { AddPost } from "./Packages/AddPost";
import { Post } from "./Packages/Post";
import { AuthProvider } from "./Auth";
import Profile from "./Profile";
import { RequireAuth } from "./RequireAuth";
import { Unknown } from "./Unknown";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [loginData, setLoginData] = useState({});
  const LoginContext = createContext();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  //useEffect to get which user is logged in details from database
  /* useEffect(() => {
    Axios.get("http://localhost:3001/checkUser").then((res) => {
      var responsedata = res.data;
      console.log(responsedata);
      setLoginData([...loginData, ...responsedata]);

      return () => {
        setLoginData([]);
      };
    });
  }, []); */

  function handleSubmit(event) {
    event.preventDefault();
    console.log("data submitted ");
    console.log(email, password);
    setEmail("");
    setPassword("");
    navigate("/");
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.messsage) {
        setLoginStatus(response.data.messsage);
      } else {
        setLoginStatus("login successful");
        setIsLoggedin(true);
        navigate("/app", { replace: true });
        // <Home />;

        alert("login successful");
      }
    });
  }
  function register_btn() {
    navigate("/register", { replace: true });
  }

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        {/* <Route exact path="/" element={<Login1 />}></Route> */}
        <Route path="/register" element={<Register />}></Route>
        <Route path="/nav" element={<Navbar />}></Route>
        <Route path="/groups" element={<Groups />}></Route>
        <Route path="/meeting" element={<Meeting />}></Route>
        <Route
          path="/discuss"
          element={
            <RequireAuth>
              <Discuss />
            </RequireAuth>
          }
        ></Route>
        <Route path="/todo" element={<ToDo />} />
        <Route path="/login" element={<Login1 />}></Route>
        <Route path="/books" element={<Main />}></Route>
        <Route path="/youtubeManage" element={<AddContent />}></Route>
        <Route path="/youtubeLearning" element={<Resource />}></Route>{" "}
        <Route
          path="/addPosts"
          element={
            <RequireAuth>
              <AddPost />
            </RequireAuth>
          }
        ></Route>
        <Route path="/seePosts" element={<Post />}></Route>
        <Route path="/app" element={<App />}></Route>
        <Route path="*" element={<Unknown />}></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}
