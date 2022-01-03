/** @format */

import React from "react";
import table from "./table.module.css";

const Table = ({ children }) => {
  return (
    <>
      <div className={table.table}>
        <h2>Watch List</h2>

        {children}
      </div>
    </>
  );
};

export default Table;
