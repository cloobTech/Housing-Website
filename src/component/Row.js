/** @format */

import React from "react";
import row from "./row.module.css";

const Row = ({ title, address, price }) => {
  return (
    <div>
      <div className={row.container}>
        <h4>{title}</h4>
        <div>{address}</div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default Row;
