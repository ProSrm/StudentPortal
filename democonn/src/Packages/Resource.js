import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
export const Resource = () => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/youtubeLearning").then((res) => {
      console.log(res.data);
      var myJsonString = JSON.stringify(res.data);
      setUrl(myJsonString);
    });
  }, []);
  return (
    <div>
      {
        <h3>
          <a href={url}>{url}</a>
        </h3>
      }
    </div>
  );
};
