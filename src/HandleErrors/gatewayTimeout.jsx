import React from "react";
import errImg from "../assets/img/timeout.gif";

export default function () {
  return (
    <div
      className="App"
      style={{
        marginTop: "2.5rem",
      }}
    >
      <h1>504 Gateway timeout</h1>
      <h3>Sorry, Something went wrong!</h3>
      <img
        src={errImg}
        style={{
          width: "50%",
        }}
        alt={"!error"}
      />
    </div>
  );
}
