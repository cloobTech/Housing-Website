import React from "react";
import table from "./table.module.css";
import Row from "./Row";

const Table = ({ children }) => {
  return (
    <>
      {" "}
      <div className={table.table}>{children}</div>
    </>
  );
};

export default Table;
