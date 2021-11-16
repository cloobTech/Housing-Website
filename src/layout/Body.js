import React from "react";
import Card from "../component/Card";
import card from "./body.module.css";

const Body = ({ children }) => {
  return (
    <div className={card.body}>
      {children}
      <h2 className={card.heading}>
        Explore a world of <span>COMFORT</span> & <span>LUXURY</span>
      </h2>
      <div className={card.container}>
        <Card
          title="Ochuko House"
          address="- No 234, New-York Layout, USA."
          badge="available"
          dismiss
          price="$40,000"
          btnText="View More"
          src="asset/house-4.jpg"
          path="/house-4"
        ></Card>
        <Card
          title="Ochuko House"
          address="- No 234, New-York Layout, USA."
          badge="available"
          dismiss
          price="$40,000"
          btnText="View More"
          src="asset/house-1.jpg"
          path="/house-1"
        ></Card>
        <Card
          title="Ochuko House"
          address="- No 234, New-York Layout, USA."
          badge="available"
          dismiss
          price="$40,000"
          btnText="View More"
          src="asset/house-5.jpg"
          path="/house-5"
        ></Card>
      </div>
      <div className={card.container}>
        <Card
          title="Ochuko House"
          address="- No 234, New-York Layout, USA."
          badge="available"
          dismiss
          price="$40,000"
          btnText="View More"
          src="asset/house-3.jpg"
          path="/house-3"
        ></Card>
        <Card
          title="Ochuko House"
          address="- No 234, New-York Layout, USA."
          badge="available"
          dismiss
          price="$40,000"
          btnText="View More"
          src="asset/house-2.jpg"
          path="/house-2"
        ></Card>
        <Card
          title="Ochuko House"
          address="- No 234, New-York Layout, USA."
          badge="available"
          dismiss
          price="$40,000"
          btnText="View More"
          src="asset/house-6.jpg"
          path="/house-6"
        ></Card>
      </div>
    </div>
  );
};

export default Body;
