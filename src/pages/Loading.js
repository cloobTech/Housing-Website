import React from "react";
import loading from "./loading.module.css";

const Loading = ({ children }) => {
  return (
    <div className={loading.div}>
      {children}
      Please wait a few seconds... <br />
      Page is loading
    </div>
  );
};

export default Loading;
