import React, { useState } from "react";
import Axios from "axios";
import "./post.css";
import { FaAppleAlt } from "react-icons/fa";
import { Navbar } from "react-bootstrap";
import { ReactComponent as Post } from "../images/undraw_feedback_re_urmj.svg";

export const AddPost = () => {
  const [name, setName] = useState(" ");
  const [heading, setHeading] = useState(" ");
  const [post, setPost] = useState(" ");
  //function to validate if data is present or not
  function validateForm() {
    console.log(name.length);
    return name.length > 3 && heading.length > 3 && post.length > 7;
  }

  //function to handle submitted post .
  function submitPost(event) {
    event.preventDefault();
    console.log("post submitted");
    console.log(name, heading, post);
    setName("");
    setHeading("");
    setPost("");
    if (validateForm()) {
      Axios.post("http://localhost:3001/addPosts", {
        postPerson: name,
        postHeading: heading,
        postdata: post,
      }).then((response) => {
        console.log(response);
      });
    } else {
      alert("please enter fileds ");
    }
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="postContainer1">
        <div className="post" style={{}}>
          <aside>
            <Post height="300" width="300" margin="20px" />
          </aside>

          <form
            onSubmit={submitPost}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label>Enter your name </label>
            <input
              autoFocus
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter name"
              style={{ width: "300px" }}
              className="unpost"
            ></input>
            <label>Title</label>
            <input
              placeholder="Enter Heading"
              value={heading}
              onChange={(event) => setHeading(event.target.value)}
              style={{ width: "300px" }}
              className="unpost"
            ></input>
            <label>Tweet here</label>
            <textarea
              type="textarea"
              placeholder="Enter small post here .. "
              value={post}
              onChange={(event) => setPost(event.target.value)}
              style={{ width: "300px" }}
              className="unpost"
            ></textarea>
            <button type="submit" style={{ width: "300px" }}>
              Publish
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
