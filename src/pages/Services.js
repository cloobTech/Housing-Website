/** @format */

import React from "react";
import services from "./services.module.css";

const Services = ({ children }) => {
  return (
    <div className={services.services}>
      {children}
      <div className={services.container}>
        <div className={services.heading}>SERVICES</div>
        <div className={services.listContainer}>
          <div className={services.list}>Web Dev Tutorial</div>
          <div className={services.list}>Professional Web Services</div>
          <div className={services.list}>Consultancy</div>
          <div className={services.list}>React Classes</div>
          <div className={services.list}>FireBase</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
