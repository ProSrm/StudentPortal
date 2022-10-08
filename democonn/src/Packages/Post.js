import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./post.css";

export const Post = () => {
  var i = 1;
  const [postData, setpostData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/seePosts").then((res) => {
      // console.log(response.data);
      var responsedata = res.data;
      setpostData([...postData, ...responsedata]);
      console.log(postData);
      return () => {
        setpostData([]);
      };
    });
  }, []);
  // function showPost() {
  //   console.log("showing post");
  //   Axios.get("http://localhost:3001/seePosts")
  //     .then((res) => {
  //       // var myJsonString = JSON.stringify(res.data);
  //       // setpostData(myJsonString);
  //       // console.log(response.data);
  //       var responseData = res.data;
  //       // // console.log(responseData);
  //       setpostData([responseData]);
  //       console.log(postData);
  //       // setpostData([...postData, ...response.data]);
  //       // console.log(postData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  return (
    <>
      <div className="postContainer">
        {/* <button onClick={showPost}>ShowPost</button> */}
        <div className="post1">
          {postData.map((val) => {
            return (
              <div className="showpost" key={i++}>
                <div className="showpostContent">
                  <h3
                    style={{
                      color: "black",
                      padding: "3px",
                      textAlign: "center",
                    }}
                  >
                    {val.pheading}
                  </h3>
                  <h4>{val.pdata}</h4>
                  <code style={{ color: "rgba(120,110,120,0599" }}>
                    Author:
                    {val.pname}
                  </code>
                  {/* <input placeholder="Enter your comment here"></input>
                  <button>comment</button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
