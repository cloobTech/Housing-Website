import React from "react";
import showcase from "./showcase.module.css";
import ShowCaseItem from "./ShowCaseItem";

const ShowCase = ({ children }) => {
  return (
    <div className={showcase.showcase}>
      {children}
      <ShowCaseItem></ShowCaseItem>
    </div>
  );
};

export default ShowCase;
