import React from "react";
import error from "./error.module.css";

const Error = () => {
  return (
    <div className={error.error}>
      <img src="asset/error.png " alt="404 Error" />
    </div>
  );
};

export default Error;
