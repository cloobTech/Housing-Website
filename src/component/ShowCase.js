import React from "react";
import showcase from "./showcase.module.css";
import ShowCaseItem from "./ShowCaseItem";

const ShowCase = (props) => {
  const { children, filterShowCaseData } = props;
  return (
    <div className={showcase.showcase}>
      {children}
      {filterShowCaseData.map((eachData) => {
        return <ShowCaseItem key={eachData.id} {...eachData}></ShowCaseItem>;
      })}
    </div>
  );
};

export default ShowCase;
