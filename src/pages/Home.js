import React from "react";
import Body from "../layout/Body";
import Footer from "../layout/Footer";
import home from "./home.module.css";

const Home = ({ ShowCaseHandler }) => {
  return (
    <>
      <div className={home.home}>
        <div className={home.title}>
          <h1>CLOOB HOMES</h1>
          <p>Your Home Reservation Is A Click Away...</p>
        </div>
        <div className={home.blend}></div>
      </div>
      <Body ShowCaseHandler={ShowCaseHandler}></Body>
      <Footer></Footer>
    </>
  );
};

export default Home;
