import React from "react";
import Button from "../component/Button";
import Card from "../component/Card";
import card from "./body.module.css";
import { data } from "../component/data";

const Body = ({ children, ShowCaseHandler }) => {
  return (
    <>
      <div className={card.body}>
        {children}

        <h2 className={card.heading}>
          Explore a world of <span>COMFORT</span> & <span>LUXURY</span>
        </h2>
        <div className={card.container}>
          {data.map((eachData) => {
            return (
              <Card
                ShowCaseHandler={ShowCaseHandler}
                key={eachData.id}
                {...eachData}
              ></Card>
            );
          })}
        </div>
        <div className={card.more}>
          <h3>
            Can't find your taste, click the button below to see more
            listings...
          </h3>
          <Button btnSize="btn--large">More Listing</Button>
        </div>
      </div>
    </>
  );
};

export default Body;
