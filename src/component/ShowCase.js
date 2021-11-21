import React, { useState, useEffect } from "react";
import showcase from "./showcase.module.css";
import ShowCaseItem from "./ShowCaseItem";

const ShowCase = (props) => {
  const [showItem, setShowItem] = useState(false);
  const [preserveData, setPreserveData] = useState([]);

  useEffect(() => {
    setShowItem(true);
  }, []);

  const { children, filterShowCaseData } = props;
  const preserve = () => {
    setPreserveData((prevState) => prevState.push(filterShowCaseData));
  };

  useEffect(() => {
    preserve();
  }, []);

  console.log(filterShowCaseData);
  console.log(preserveData);
  return (
    <>
      {showItem && (
        <div className={showcase.showcase}>
          {children}
          {filterShowCaseData.map((eachData) => {
            return (
              <ShowCaseItem
                key={eachData.id}
                {...eachData}
                filterShowCaseData={filterShowCaseData}
              ></ShowCaseItem>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShowCase;
