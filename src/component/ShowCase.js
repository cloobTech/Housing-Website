import React from "react";
import showcase from "./showcase.module.css";

const ShowCase = ({ children, description, houseName, address, title }) => {
  return (
    <div className={showcase.showcase}>
      {children}
      <div className={showcase.container}>
        <div className={showcase.title}>
          <h1>{title}</h1>
        </div>
        <div className={showcase.descriptionContainer}>
          <h3>{houseName}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
