import React from "react";
import { useAuth } from "./Auth";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";
import "./profile.css";
import { useState, useEffect } from "react";

export default function Profile() {
  const [userdata, setUserData] = useState([]);
  const [user, setUsername] = useState();
  const [email1, setEmail] = useState();
  const [phoneno, setPhoneno] = useState();

  const navigate = useNavigate();
  const auth = useAuth();
  function logout() {
    auth.logout();
    navigate("/home", { replace: true });
  }
  useEffect(() => {
    Axios.post("http://localhost:3001/profile", {
      email: auth.user,
    }).then((response) => {
      if (response.data.messsage) {
        // navigate("/login", { replace: true });
        console.log(response.data.messsage);
      } else {
        /*   var collegename = response.data[0].college;
        console.log(collegename); */
        const username = response.data[0].name;
        const collegename = response.data[0].college;
        const email = response.data[0].email;
        const phoneno = response.data[0].phoneno;

        setEmail(email);
        setPhoneno(phoneno);
        setUsername(username);
        console.log(collegename, username);

        console.log(response.data);
      }
    });
    return () => {
      setUserData([]);
    };
  }, []);

  return (
    <div className="profile section-centerProf sectionProf">
      <div style={{ textAlign: "center" }}>Welcome {user}</div>
      <div className="logout">
        <div style={{ textAlign: "center", color: "black" }}>
          Email :{email1}
        </div>
        <div style={{ textAlign: "center" }}>Phoneno: {phoneno}</div>
      </div>

      <div className="logout" style={{ pading: "13px" }}>
        {/* <Link to="/updatePass" style={{ color: "brown" }}>
          <b>
            <i>
              <u> Change Password </u>{" "}
            </i>{" "}
          </b>
        </Link> */}
        <button type="button" onClick={logout}>
          Logout
        </button>
        {/* <div class="card">
          <h1>John Doe</h1>
          <p class="title">CEO Founder, Example</p>
          <p>Harvard University</p>
          <div style="margin: 24px 0;">
            <a href="#">
              <i class="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </div>
          <p>
            <button>Contact</button>
          </p>
        </div> */}
      </div>
    </div>
  );
}
