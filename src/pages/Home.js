import React from "react";
import Body from "../layout/Body";
import home from "./home.module.css";

const Home = ({ children, title, description, address }) => {
  return (
    <>
      <div className={home.home}>
        <div className={home.title}>
          <h1>CLOOB HOMES</h1>
          <p>...your number one housing agency</p>
          <p className="">Hello world</p>
        </div>
      </div>
      <Body></Body>
    </>
  );
};

export default Home;
