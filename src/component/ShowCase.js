import React, { useState, useEffect } from "react";
import showcase from "./showcase.module.css";
import ShowCaseItem from "./ShowCaseItem";

const ShowCase = (props) => {
  const {
    children,
    filterShowCaseData,
    setShowCaseData,
    showCaseData,
    store,
    setStore,
  } = props;

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
              store={store}
              setStore={setStore}
            ></ShowCaseItem>
          );
        })}
      </div>
    </>
  );
};

export default ShowCase;
