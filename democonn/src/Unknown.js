import React from "react";
import { ReactComponent as Post } from "./images/undraw_page_not_found_re_e9o6.svg";

export function Unknown() {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Post
        height="700"
        width="700"
        style={{
          margin: "2em 3em",
          padding: "1rem 2rem",
        }}
      />
      {/* <div>
        <h2>Please navigate to home page</h2>
      </div> */}
    </div>
  );
}
