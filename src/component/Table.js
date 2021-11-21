import React from "react";
import table from "./table.module.css";

const Table = ({ children, title, address, price }) => {
  return (
    <div className={table.table}>
      {children}
      <div>{title}</div>
      <div>{address}</div>
      <div>{price}</div>
    </div>
  );
};

export default Table;
