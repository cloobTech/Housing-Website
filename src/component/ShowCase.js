/** @format */

import React, { useEffect } from "react";
import showcase from "./showcase.module.css";
import ShowCaseItem from "./ShowCaseItem";

const ShowCase = (props) => {
  const {
    children,
    filterShowCaseData,
    setShowCaseData,
    showCaseData,
    setFilterShowCaseData,
  } = props;

  const show = () => {
    const fill = JSON.parse(localStorage.getItem("item"));

    setFilterShowCaseData([...fill]);
  };

  useEffect(() => {
    show();
  }, []);
  return (
    <>
      <div className={showcase.showcase}>
        {children}
        {filterShowCaseData.map((eachData) => {
          return (
            <ShowCaseItem
              key={eachData.id}
              {...eachData}
              setShowCaseData={setShowCaseData}
              showCaseData={showCaseData}
            ></ShowCaseItem>
          );
        })}
      </div>
    </>
  );
};

export default ShowCase;
