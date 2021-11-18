import React from "react";
import Body from "../layout/Body";
import Footer from "../layout/Footer";
import home from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={home.home}>
        <div className={home.title}>
          <h1>CLOOB HOMES</h1>
        </div>
        <div className={home.blend}></div>
      </div>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

export default Home;
