import React from "react";
import row from "./row.module.css";

const Row = ({ title, address, price }) => {
  return (
    <div>
      <div className={row.container}>
        <div>{title}</div>
        <div>{address}</div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default Row;
