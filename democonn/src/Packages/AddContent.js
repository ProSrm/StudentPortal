import Axios from "axios";
import React, { useState } from "react";

export const AddContent = () => {
  // function addcontent() {
  //   console.log("content added ");
  // }
  const [url, setUrl] = useState("");
  function handlesubmit(event) {
    event.preventDefault();
    console.log("form submitted");
    console.log(url);
    Axios.post("http://localhost:3001/youtubeManage", {
      youtubeurl: url,
    }).then((response) => {
      console.log(response);
    });
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          placeholder="Add url here .."
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        ></input>
        <button type="submit">Add Url</button>
      </form>
    </div>
  );
};
